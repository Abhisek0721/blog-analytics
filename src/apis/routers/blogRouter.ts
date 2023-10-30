import express, { NextFunction, Request, Response } from "express";
import CustomRequest from "../../utils/CustomRequest";
import { fetchBlogMiddleware } from "../middlewares/fetchBlogMiddleware";
import { blogStats, blogSearch } from "../controllers/blogController";

const router = express.Router();

router.route("/blog-stats").get(
  (req: Request, res: Response, next: NextFunction) => {
    fetchBlogMiddleware(req as CustomRequest, res, next);
  },
  (req: Request, res: Response) => {
    blogStats(req as CustomRequest, res);
  }
);

router.route("/blog-search").get(
  (req: Request, res: Response, next: NextFunction) => {
    fetchBlogMiddleware(req as CustomRequest, res, next);
  },
  (req: Request, res: Response) => {
    blogSearch(req as CustomRequest, res);
  }
)

export default router;
