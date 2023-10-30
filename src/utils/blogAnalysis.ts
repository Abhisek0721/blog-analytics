import _ from "lodash";

const blogAnalysis = (blogsInput:any) => {
  const blogs = blogsInput;
  // Calculate the total number of blogs fetched
  const totalBlogs = blogs?.length;
  // Find the blog with the longest title
  const blogWithLongestTitle = _.maxBy(blogs, "title.length");
  // Determine the number of blogs with titles containing the word "privacy"
  const blogsWithPrivacyTitle = _.filter(blogs, (blog) =>
    _.includes(_.toLower(blog.title), "privacy")
  );
  // Create an array of unique blog titles (no duplicates)
  const uniqueBlogTitles = _.uniqBy(blogs, "title");

  return {
    totalBlogs,
    blogWithLongestTitle,
    numberOfBlogsWithPrivacyTitle: blogsWithPrivacyTitle.length,
    uniqueBlogTitles,
  };
};

export default blogAnalysis;
