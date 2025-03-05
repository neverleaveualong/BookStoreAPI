const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: 도서 전체 조회
 *     description: 모든 도서의 정보를 조회합니다.
 *     tags: [Books]
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
 *                       likes:
 *                         type: integer
 *                         description: 좋아요 수
 *                         example: 250
 *                       pubDate:
 *                         type: date
 *                         description: 출간일
 *                         example: 2015/03/01
 */
router.get("/", (req, res) => {
  // 실제 응답 예시
  res.status(200).json({
    books: [
      {
        bookid: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        summary: "1920년대 미국의 사회와 사랑을 그린 소설",
        price: 19.99,
        likes: 250,
        pubDate: "2015/03/01",
      },
      // 다른 도서 정보들 ...
    ],
  });
});

/**
 * @swagger
 * /books/bookid:
 *   get:
 *     summary: 도서 개별 조회
 *     description: 개별 도서id를 통해 정보를 조회합니다.
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: 개별 도서 목록 조회
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
 *                       bookid:
 *                         type: int
 *                         description: 도서 id
 *                         example: "1"
 *                       title:
 *                         type: string
 *                         description: 도서 제목
 *                         example: "The Great Gatsby"
 *                       category:
 *                         type: string
 *                         description: 카테고리
 *                         example: "action"
 *                       format:
 *                         type: string
 *                         description: 포맷
 *                         example: "format"
 *                       author:
 *                         type: string
 *                         description: 도서 작가
 *                         example: "F. Scott Fitzgerald"
 *                       isbn:
 *                         type: int
 *                         description: isbn
 *                         example: "5678412545"
 *                       pages:
 *                         type: int
 *                         description: 쪽수수
 *                         example: "562"
 *                       summary:
 *                         type: string
 *                         description: 요약 설명
 *                         example: "1920년대 미국의 사회와 사랑을 그린 소설"
 *                       description:
 *                         type: string
 *                         description: 상세 설명
 *                         example: "위대한 게츠비와 여인과의 상류층 사랑 이야기"
 *                       price:
 *                         type: number
 *                         description: 도서 가격
 *                         example: 19.99
 *                       likes:
 *                         type: integer
 *                         description: 좋아요 수
 *                         example: 250
 *                       liked:
 *                         type: boolen
 *                         description: 조아요 했는지지
 *                         example: "true"
 *                       pubDate:
 *                         type: date
 *                         description: 출간일
 *                         example: 2015/03/01
 */

router.get("/bookid", (req, res) => {
  res.status(200).json({
    books: [
      {
        bookid: "1",
        title: "The Great Gatsby",
        category: "action",
        foramt: "format",
        author: "F. Scott Fitzgerald",
        isbn: "12345678",
        page: "562",
        summary: "1920년대 미국의 사회와 사랑을 그린 소설",
        description: "숄라숄라숄라",
        index: "목차",
        price: 19.99,
        likes: 250,
        liked: "true",
        pubDate: "2015/03/01",
      },
      // 다른 도서 정보들 ...
    ],
  });
});

/**
 * @swagger
 * /books/categoryid:
 *   get:
 *     summary: 신간 조회
 *     description: 신간 도서의 정보를 조회합니다.
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: 신간 도서 목록 조회 성공
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
 *                       likes:
 *                         type: integer
 *                         description: 좋아요 수
 *                         example: 250
 *                       pubDate:
 *                         type: date
 *                         description: 출간일
 *                         example: 2015/03/01
 */

router.get("/categoryid", (req, res) => {
  res.status(200).json({
    books: [
      {
        bookid: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        summary: "1920년대 미국의 사회와 사랑을 그린 소설",
        price: 19.99,
        likes: 250,
        pubDate: "2015/03/01",
      },
      // 다른 도서 정보들 ...
    ],
  });
});

/**
 * @swagger
 * /books?categoryid={categoryid}&new={boolean}:
 *   get:
 *     summary: 신간 카테고리 도서 조회 or 카테고리리도서 조회
 *     description: 쿼리 파라미터를 사용하여 카테고리별 또는 전체 도서 목록을 조회합니다.
 *                  categoryid가 제공되면 해당 카테고리의 도서를 조회하며,
 *                  new 파라미터가 true인 경우 신간만 조회할 수 있습니다.
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: categoryid
 *         schema:
 *           type: string
 *         description: 조회할 카테고리 ID (없으면 전체 조회)
 *         required: false
 *         example: "123"
 *       - in: query
 *         name: new
 *         schema:
 *           type: boolean
 *         description: 신간 조회 여부
 *         required: false
 *         example: true
 *     responses:
 *       200:
 *         description: 도서 목록 조회 성공
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
 *                       likes:
 *                         type: integer
 *                         description: 좋아요 수
 *                         example: 250
 */

router.get("/", (req, res) => {
  const { categoryid, new: isNew } = req.query;

  // categoryid와 isNew를 이용해 로직 처리
  console.log("카테고리 ID:", categoryid);
  console.log("신간 조회 여부:", isNew);

  // 실제 데이터 조회 로직 구현...
  res.status(200).json({
    books: [
      // 도서 데이터 예시
    ],
  });
});

module.exports = router;
