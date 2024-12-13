"use client"
import React, { useState } from "react";
// Define an interface for the comment structure
interface Comment {
    name: string;
    content: string;
  }
  
  const CommentSection = () => {
      const [comments, setComments] = useState<Comment[]>([]); // Changed from string[] to Comment[]
  const [name, setName] = useState(""); // Stores name
  const [newComment, setNewComment] = useState(""); // Stores comment text

  const handleAddComment = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (name.trim() === "" || newComment.trim() === "") return;

    // Add new comment with name
    setComments([...comments, { name, content: newComment }]);
    setName("");
    setNewComment("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Comment Section
      </h2>

      {/* Display Added Comments */}
      <div className="space-y-4 mb-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
          >
            <h3 className="font-bold text-start mb-2 text-gray-900 dark:text-gray-100">
              {comment.name}
            </h3>
            <p className="text-gray-700 text-start dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>

      {/* Add Comment Form */}
      <form
        onSubmit={handleAddComment}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
