# Blog Analytics API

Blog Analytics with Express and Lodash.
( Language used : TypeScript )

### Live: https://blog-analytics-jj7y.onrender.com

## Configuration in properties.ts

```json
{
    "PORT": "3000",
    "SERVER_URL": "http://localhost:3000",
    "BLOG_API_URI": "https://intent-kit-16.hasura.app/api/rest/blogs",
    "BLOG_API_SECRET_KEY": "SECRET KEY OF BLOG API"
}
```

## How to Run ?

To run this api:
Step-1
```
npm install
```
Step-2
```
npm run dev
```

## API Documentation

The project provides the following API endpoints:

### `GET /api/blog-stats`

Get blog statistics.

**Request:**

`GET /api/blog-stats`

**Response:**
```json
{
  "status": true,
  "data": {
    "totalBlogs": 461,
    "blogWithLongestTitle": {
      "id": "1627f364-559c-46cf-a03a-04d185bacb3a",
      "image_url": "https://cdn.subspace.money/whatsub_services/backdrop_url/Q1g1nRYpHbA48ngIPX6nA.png",
      "title": "After 24 days at the box office, Sunny Deol's action film Gadar 2 became the second Hindi film to gross over ₹500 crore"
    },
    "numberOfBlogsWithPrivacyTitle": 4,
    "uniqueBlogTitles": [
      {
        "id": "4b66e146-6da5-46e4-8a0e-2b40c0f13b0a",
        "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
        "title": "Privacy policy"
      },
      {
        "id": "8f2ffbf6-4058-47cd-800b-8c65f25fdf3c",
        "image_url": "https://cdn.subspace.money/whatsub_blogs/q.png",
        "title": "Top 5 ways to save money on Subscriptions"
      },
      {
        "id": "9fccb1c3-5a92-4e2a-94d0-5c95d8434e55",
        "image_url": "https://cdn.subspace.money/whatsub_blogs/lee-paz-aJJoTV1r87w-unsplash.jpg",
        "title": "Sony is updating its PlayStation Plus gaming subscription, which will be available soon."
      },
      "..."
    ]
  }
}
```


### `GET /api/blog-search?query={text}`

Filters the blogs based on the provided query string (case-insensitive).

**Request:**

`GET /api/blog-search?query=privacy`

**Response:**
```json
{
  "status": true,
  "data": [
    {
      "id": "4b66e146-6da5-46e4-8a0e-2b40c0f13b0a",
      "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
      "title": "Privacy policy"
    },
    {
      "id": "9b709fce-5cf7-486b-8314-fe4232577ce9",
      "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
      "title": "Privacy policy"
    },
    {
      "id": "7811ae2e-aa14-423e-89e7-5773ec79812c",
      "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
      "title": "Privacy Policy"
    },
    {
      "id": "8a7ffe79-4054-419e-82ce-f7ba307e5537",
      "image_url": "https://cdn.subspace.money/whatsub_blogs/slate(1).png",
      "title": "Privacy policy"
    }
  ]
}
```


## Contact Information

```
Name: Abhisekh Upadhaya
```

```
Email: abhisek0721@gmail.com
```
