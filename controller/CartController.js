const conn = require("../mariadb");
const ensureAuthorization = require("../auth");
const { StatusCodes } = require("http-status-codes");
const { use } = require("../routes/carts");
const jwt = require("jsonwebtoken");

const addToCart = (req, res) => {
  const { book_id, quantity } = req.body;

  let authorization = ensureAuthorization(req);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토큰입니다.",
    });
  }

  // ✅ 여기에만 INSERT 로직 남기기
  let sql = "INSERT INTO cartItems (book_id, quantity, user_id) VALUES(?,?,?)";
  let values = [book_id, quantity, authorization.id];
  conn.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
  });
};

const getCartItems = (req, res) => {
  const { selected } = req.body;

  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토근입니다.",
    });
  } else {
    let sql = `select cartItems.id, book_id, title, summary, quantity, price 
        FROM cartItems 
        LEFT JOIN books ON cartItems.book_id = books.id 
        WHERE user_id=?`;

    let values = [authorization.id];

    if (selected) {
      // 주문서 작성 시 '선택한 장바구니 목록 조회'
      sql += ` AND cartItems.id IN (?)`;
      values.push(selected);
    }

    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

const removeCartItems = (req, res) => {
  let authorization = ensureAuthorization(req, res);

  if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  } else if (authorization instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "잘못된 토근입니다.",
    });
  } else {
    const cartItems = req.params.id;

    let sql = "DELETE FROM cartItems WHERE id = ?;";

    conn.query(sql, cartItems, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(results);
    });
  }
};

module.exports = { addToCart, getCartItems, removeCartItems };
