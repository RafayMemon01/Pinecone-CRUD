# Pinecone-CRUD API Documentation

## API Endpoints:

1. **Create a New Post**
   - Endpoint: `POST /api/v1/post`
   - Description: Creates a new post.
   - Request Body: 
     ```
     {
         title: "abc post title",
         text: "some post text"
     }
     ```
   - Response: 
     ```
     {
         message: "post created"
     }
     ```

2. **Retrieve List of Posts**
   - Endpoint: `GET /api/v1/posts`
   - Description: Retrieves a list of posts.

3. **Search for Posts**
   - Endpoint: `GET /api/v1/search`
   - Description: Searches for posts based on a query.

4. **Update an Existing Post**
   - Endpoint: `PUT /api/v1/post/:postId`
   - Description: Updates an existing post.
   - Request Body: 
     ```
     {
         title: "updated title",
         text: "updated text"
     }
     ```
   - Response: 
     ```
     {
         message: "post created"
     }
     ```

5. **Delete a Post**
   - Endpoint: `DELETE /api/v1/post/:postId`
   - Description: Deletes a post.
   - Response: 
     ```
     "post deleted"
     ```

6. **Delete All Posts**
   - Endpoint: `DELETE /api/v1/posts/all`
   - Description: Deletes all posts.
   - Response: 
     ```
     "All posts deleted successfully."
     ```

