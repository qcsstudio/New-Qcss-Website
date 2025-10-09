// LinkModal.jsx
import React from "react";

export default function LinkModal({ editor }) {
  const setLink = () => {
    const url = prompt("Enter link URL");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <button
      onClick={setLink}
      className="px-2 py-1 mt-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Add Link
    </button>
  );
}
