import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use("/vi", (req, res) => {});

export default app;
