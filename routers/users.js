const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users/join:
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

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 사용자 로그인
 *     description: 사용자를 사이트에 로그인합니다
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
 *       200:
 *         description: 로그인 완료 및 JWT 토큰 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: 발급된 JWT 토큰
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 */

router.post("/login", (req, res) => {
  res.json({ message: "로그인완료" });
});

/**
 * @swagger
 * /users/reset:
 *   post:
 *     summary: 비밀번호 초기화 요청
 *     description: 비밀번호 초기화 요청합니다
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: 비밀번호 초기화 요청
 */

router.post("/reset", (req, res) => {
  res.json({ message: "비밀번호 초기화 요청" });
});

/**
 * @swagger
 * /users/reset:
 *   put:
 *     summary: 비밀번호 초기화 (=수정)
 *     description: 비밀번호 초기화를 시작합니다다
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password;
 *             properties:
 *               password:
 *                 type: string
 *                 example: secret123
 *     responses:
 *       200:
 *         description: 비밀번호 초기화 완료
 */

router.put("/rest", (req, res) => {
  res.json({ message: "비밀번호 초기화 완료" });
});

module.exports = router;
