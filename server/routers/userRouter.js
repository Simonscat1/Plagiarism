const Router = require("express").Router;
const userController = require("../controllers/user-controller");

const userRouter = new Router();
userRouter.get("/", userController.getAll);
userRouter.put("/:username/role", userController.changeRole);
userRouter.get("/:username", userController.getOne);
userRouter.delete("/:username", userController.deleteUser);

module.exports = userRouter;
