const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig");

const app = express();
const port = process.env.PORT || 3000;

// Swagger UI 라우트 설정
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Book Store!");
});

const usersRouter = require("./routers/users");
app.use("/users", usersRouter);

const booksRouter = require("./routers/books");
app.use("/books", booksRouter);

const likesRouter = require("./routers/likes");
app.use("/likes", likesRouter);

const cartRouter = require("./routers/cart");
app.use("/cart", cartRouter);

const ordersRouter = require("./routers/orders");
app.use("/orders", ordersRouter);

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});
