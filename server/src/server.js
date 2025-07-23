import express from "express";
import cors from "cors";
import profileRoutes from "./routes/profile.js";
import tweetRoutes from "./routes/tweet.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import "./database/index.js";
dotenv.config();



const app = express();
const PORT_SERVER = process.env.PORT_SERVER||5000;
const PORT_CLIENT = process.env.PORT_CLIENT||3000;

app.use(
  cors({
    origin: [`http://localhost:${PORT_CLIENT}`],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Twitter clone 🥳");
});

// PFORILE ROUTES
app.use("/profile", profileRoutes);

// POST ROUTES
app.use("/tweet", tweetRoutes);

app.listen(PORT_SERVER, () => {
  console.log(`Server is listening at ${PORT_SERVER}`);
});
