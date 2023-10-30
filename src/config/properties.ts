interface IProperties {
    PORT: number;
    SERVER_URL: string;
    BLOG_API_URI: string;
    BLOG_API_SECRET_KEY: string;
}

const properties:IProperties = {
    PORT: 3000,
    SERVER_URL: `http://localhost:3000`,
    BLOG_API_URI: `https://intent-kit-16.hasura.app/api/rest/blogs`,
    BLOG_API_SECRET_KEY: `32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6`
}

export default properties;