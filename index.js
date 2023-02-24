import express from "express";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import likeRoute from "./routes/likes.js";
import commentRoute from "./routes/comments.js";
import authRoute from "./routes/auth.js";
const app = express();

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/likes", likeRoute);
app.use("/api/comments", commentRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
