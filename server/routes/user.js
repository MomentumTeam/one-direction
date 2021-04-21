const Router = require("express").Router;
const user = require("../controllers/user");
const authentication = require("../controllers/authentication");

const userRouter = Router();

/* GET home page. */
userRouter.get("/", authentication.isAuthenticated, user.getUser);

userRouter.put("/", authentication.isAuthenticated, user.updateUser);

module.exports = userRouter;
