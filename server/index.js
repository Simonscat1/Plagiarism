const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter.js");
const roleRouter = require("./routers/roleRouter.js");
const userRouter = require("./routers/userRouter.js");
const feedbackRouter = require("./routers/feedbackRouter.js");

const PORT = 5000;
const DB_URL =
	"mongodb+srv://pplagiarism16:7fehJmoKIw40x82N@cluster0.skxwzen.mongodb.net/plagiarism?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/roles", roleRouter);
app.use("/api/feedbacks", feedbackRouter);

const start = async () => {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log(`Server started at port ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();