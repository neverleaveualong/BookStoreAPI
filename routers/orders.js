const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: 장바구니에서 선택한 상품 조회
 *     description: 장바구니에서 선택한 상품 목록을 조회합니다
 *     tags: [Orders]
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

router.get("/", (req, res) => {});

module.exports = router;
