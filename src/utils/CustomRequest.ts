import { Request } from "express";

interface CustomRequest extends Request {
  blogData: {
      id: string;
      image_url: string;
      title: string;
    }[] | any;
}

export default CustomRequest;
