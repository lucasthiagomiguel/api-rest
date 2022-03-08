import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from "../controllers/UsersController";

const userRouter = Router();
const usersController = new UsersController();

userRouter.post(
    '/',
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
      },
    }),
    usersController.create,
  );
  export default userRouter;