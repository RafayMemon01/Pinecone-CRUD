import React, { useState } from "react";
import "./post.css";

const Post = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Title");
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti, nam fugit eveniet inventore eum ducimus ratione non odio pariatur a alias magni voluptatibus temporibus, quis ab itaque nostrum labore?"
  );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any necessary actions to save the edited content
  };

  const handleDelete = () => {
    // Perform any necessary actions to delete the post
  };

  return (
    <>
    <div className="card">
      <div className="cardBody">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{text}</p>
          </>
        )}
      </div>
      <div className="cardFooter">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Post;
