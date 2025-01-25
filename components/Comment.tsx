"use client";
import React, { useState } from "react";

// Define an interface for the comment structure
interface Comment {
  name: string;
  content: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Stores list of comments
  const [name, setName] = useState<string>(""); // Stores user's name
  const [newComment, setNewComment] = useState<string>(""); // Stores user's comment text

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure both fields are filled before adding a comment
    if (!name.trim() || !newComment.trim()) return;

    // Add new comment
    setComments((prevComments) => [
      ...prevComments,
      { name: name.trim(), content: newComment.trim() },
    ]);

    // Clear input fields
    setName("");
    setNewComment("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mt-24">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Comment Section
      </h2>

      {/* Display Existing Comments */}
      <div className="space-y-4 mb-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
            >
              <h3 className="font-bold text-start mb-2 text-gray-900 dark:text-gray-100">
                {comment.name}
              </h3>
              <p className="text-gray-700 text-start dark:text-gray-300">
                {comment.content}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleAddComment} className="flex flex-col space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Comment Input */}
        <textarea
          placeholder="Write a comment..."
          className="p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-200 focus:outline-none focus:ring focus:ring-blue-400"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
