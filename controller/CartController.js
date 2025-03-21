const conn = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const { use } = require("../routes/carts");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const addToCart = (req, res) => {
  const { book_id, quantity } = req.body;

  let authorization = ensureAuthorization(req);

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
        WHERE user_id=? AND cartItems.id IN(?)`;
    let values = [authorization.id, selected];
    conn.query(sql, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return err;
    });
  }
};

const removeCartItems = (req, res) => {
  const cartItems = req.params.id;

  let sql = "DELETE FROM cartItems WHERE id = ?;";

  conn.query(sql, cartItems, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.OK).json(results);
  });
};

function ensureAuthorization(req, res) {
  try {
    let receivedJwt = req.headers["authorization"];
    console.log("received jwt : ", receivedJwt);

    let decodedJwt = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
    console.log(decodedJwt);

    return decodedJwt;
  } catch (err) {
    console.log(err.name);
    console.log(err.message);

    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "로그인 세션이 만료되었습니다. 다시 로그인 하세요.",
    });
  }
}

module.exports = { addToCart, getCartItems, removeCartItems };
