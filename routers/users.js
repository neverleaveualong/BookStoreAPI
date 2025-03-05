const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /join:
 *   post:
 *     summary: 사용자 회원가입
 *     description: 새로운 사용자를 등록합니다.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       201:
 *         description: 등록 완료 (응답 본문 없음)
 */

router.post("/join", (req, res) => {
  res.status(201).json({ message: "등록완료" });
});

router.post("/login", (req, res) => {
  res.json({ message: "로그인완료" });
});

module.exports = router;
