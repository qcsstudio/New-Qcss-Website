// ImageUploadModal.jsx
import React from "react";

export default function ImageUploadModal({ editor }) {
  const insertImage = () => {
    const url = prompt("Enter image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <button
      onClick={insertImage}
      className="px-2 py-1 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add Image
    </button>
  );
}
