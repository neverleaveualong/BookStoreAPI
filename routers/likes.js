const express = require("express");
const router = express.Router();

/**
 * 구현해야 할 것 좋아요 추가 및 취소
 */

router.put("/", (req, res) => {
  res.status(200).json({
    message: "좋아요 성공",
  });
});

router.put("/", (req, res) => {
  res.status(200).json({
    message: "좋아요 실패",
  });
});

module.exports = router;
