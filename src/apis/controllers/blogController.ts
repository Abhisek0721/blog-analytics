import { Response } from "express";
import CustomRequest from "../../utils/CustomRequest";
import blogAnalysis from "../../utils/blogAnalysis";
import _ from "lodash";

//API : /api/blog-stats
//Method : GET
//Access : Public
//Description : get blog statistics
export const blogStats = (req: CustomRequest, res: Response) => {
  try {
    const blogData = blogAnalysis(req.blogData);
    return res.status(200).json({
      status: true,
      data: blogData
    });
  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error?.message,
      error: error?.stack,
    });
  }
};

//API : /api/blog-search?query={text}
//Method : GET
//Access : Public
//Description : filters the blogs based on the provided query string (case-insensitive).
export const blogSearch = (req: CustomRequest, res: Response) => {
  try {
    const queryText = req.query?.query;
    const blogs = req.blogData;

    if (!queryText) {
      return res.status(200).json({
        status: false,
        message: "query parameter is missing!",
      });
    }

    const filterData = _.filter(blogs, (blog) =>
      _.includes(_.toLower(blog.title), queryText)
    );

    return res.status(200).json({
      status: true,
      data: filterData,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error?.message,
      error: error?.stack,
    });
  }
};
