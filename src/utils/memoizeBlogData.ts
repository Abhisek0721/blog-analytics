import _ from "lodash";
import properties from "../config/properties";
import axios from "axios";

// Memoize the axios function to fetch blog data
const memoizedAxios = _.memoize(
    async () => {
      try {
        const response = await axios.get(properties.BLOG_API_URI, {
          headers: {
            "x-hasura-admin-secret": properties.BLOG_API_SECRET_KEY,
          },
        });
        return response.data?.blogs || [];
      } catch (error) {
        throw error;
      }
    },
    () => "blogDataCache" // Cache key for memoization
  );

export default memoizedAxios;
