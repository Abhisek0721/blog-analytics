import { Response, NextFunction } from "express";
import CustomRequest from "../../utils/CustomRequest";
import memoizedAxios from "../../utils/memoizeBlogData";

export const fetchBlogMiddleware = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Fetch blog data using memoized axios function
    const blogData = await memoizedAxios();
    if (!blogData || !blogData?.length) {
      return res.status(200).json({
        status: false,
        message: "Data not found!",
      });
    }

    req.blogData = blogData;
    return next();
  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error?.message,
      error: error?.stack,
    });
  }
};
