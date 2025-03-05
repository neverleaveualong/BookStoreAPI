const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: 장바구니 담기
 *     description: 장바구니의 도서를 담습니다
 *     tags: [cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bookid
 *               - count
 *             properties:
 *               email:
 *                 type: int
 *                 example: 1
 *               count:
 *                 type: int
 *                 example: 2
 *     responses:
 *       201:
 *         description: 장바구니 담기 완료
 */

router.post("/", (req, res) => {
  res.status(201).json({
    message: "장바구니 담기",
  });
});

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: 장바구니 조회
 *     description: 장바구니의 있는 도서를 조회합니다
 *     tags: [cart]
 *     responses:
 *       200:
 *         description: 전체 도서 목록 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 books:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       cartitemid:
 *                         type: id
 *                         description: 장바구니 item id
 *                         example: "1"
 *                       bookid:
 *                         type: id
 *                         description: 도서 id
 *                         example: "1"
 *                       title:
 *                         type: string
 *                         description: 도서 제목
 *                         example: "The Great Gatsby"
 *                       author:
 *                         type: string
 *                         description: 도서 작가
 *                         example: "F. Scott Fitzgerald"
 *                       summary:
 *                         type: string
 *                         description: 요약 설명
 *                         example: "1920년대 미국의 사회와 사랑을 그린 소설"
 *                       price:
 *                         type: number
 *                         description: 도서 가격
 *                         example: 19.99
 *                       count:
 *                         type: int
 *                         description: 수량
 *                         example: 10
 */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "장바구니 조회",
  });
});

/**
 * @swagger
 * /cart/bookid:
 *   delete:
 *     summary: 장바구니 도서 삭제
 *     description: 장바구니의 있는 도서를 삭제합니다
 *     tags: [cart]
 *     responses:
 *       200:
 *         description: 개별 장바구니 도서 삭제 성공
 *
 */

router.delete("/bookid"),
  (req, res) => {
    res.status(200).json({});
  };
module.exports = router;
