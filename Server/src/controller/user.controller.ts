import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import config from "../../index";
import UtilService from "../services/util.service";
class UserController {
  static createUser = async (req: any, res: any, next: any) => {
    const data = req.body;
    const isUser = await UserService.getUserbyEmail(
      data?.email,
      data?.password
    );
    if (!isUser) {
      const userInput = {
        first_name: data.first_name || "bob",
        last_name: data.last_name || "max",
        email: data.email,
        password: data.password,
      };
      try {
        const userData = await UserService.createUser(userInput);
        try {
          if (!userData) {
            return res.json({ status: true, message: "Unable to create user" });
          }
          return res.json({
            status: true,
            message: "User Registered successfully",
          });
        } catch (error) {
          next(error);
        }
      } catch (e) {
        // if( e instanceof Prisma.PrismaClientKnownRequestError){

        //     if(e.code === 'P2002'){
        //         throw new Error("User already exist")
        //     }
        // }
        next(e);
      }
    }
    return res.json({ status: false, message: "User already exist" });
  };

  static loginUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data = req.body;
    // console.log("isUser==",isUser);
    if (!data?.email || !data?.password) {
      throw new Error("Incorrect Parameters");
    }
    const isUser = await UserService.getUserbyEmail(
      data?.email,
      data?.password
    );
    if (!isUser) {
      try {
        return res
          .status(200)
          .json({ status: false, message: "User not found" });
      } catch (e) {
        next(e);
      }
    }
    const createToken = {
      id: isUser?.id,
      email: isUser?.email,
      userName: isUser?.first_name,
      createdAt: isUser?.createdAt,
    };
    // console.log("res==",res.json({status:true, data:isUser}));
    const jwtToken = await UtilService.generateJwtToken(
      createToken,
      config.jwtConfig.secretekey,
      config.jwtConfig.expireDuration
    );

    return res.status(200).json({ status: true, token: jwtToken });
    //  next()
  };

  static getUserbyUserId = async (req: any, res: any, next: any) => {
    const data = req.body;
    const user = await UserService.getUserbyUserId(data.id);
    try {
      if (!user) {
        return res.json({
          status: true,
          message: `User with ${data.id} doesn't exist`,
        });
      }
      return res.json({ status: false, data: user });
    } catch (error) {
      next(error);
    }
  };
  static getUsers = async (req: any, res: any, next: any) => {
    // const data = req.body;
    const userData = await UserService.getUsers();
    // console.log("userData==",userData);
    try {
      res.json({ status: true, data: userData });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
