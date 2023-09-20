import React, { useState, useEffect } from "react";
import PostCard from "./components/post-card/post.js";
import "./app.css";
function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    postTitle: "",
    postText: ""
  });

  const openForm = () => {
    setShowForm(true);
  };
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    if (showForm) {
      window.addEventListener("keydown", handleEscKey);
    } else {
      window.removeEventListener("keydown", handleEscKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [showForm]);

  const closeForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
    // Reset form data and close the form
    setFormData({
      postTitle: "",
      postText: ""
    });
    setShowForm(false);
  };

  return (
    <>
      <header>
        <h1>
          Pinecone <span className="text">CRUD</span>
        </h1>

        <form className="searchBox">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button type="submit" hidden></button>
        </form>
      </header>
      <main>
        <div className="createPost">
          <label>Create Post</label>
          <input
            onClick={openForm}
            type="text"
            placeholder="Create A New Post"
          />
        </div>
      </main>

      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <span className="close-button" onClick={closeForm}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <h2>Create Post</h2>
              <input
                type="text"
                name="postTitle"
                value={formData.postTitle}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <textarea
                name="postText"
                value={formData.postText}
                onChange={handleInputChange}
                placeholder="Text"
              ></textarea>
              <button className="submit" type="submit">Submit</button>
              <button onClick={closeForm} type="button" className="cancelBtn">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="postContainer">

      <PostCard />
      <PostCard />
      <PostCard />
      
      </div>
    </>
  );
}

export default App;
