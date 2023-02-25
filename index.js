import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import likeRoute from "./routes/likes.js";
import commentRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/likes", likeRoute);
app.use("/api/comments", commentRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
