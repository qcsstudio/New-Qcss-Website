// ToolbarButton.jsx
import React from "react";

export default function ToolbarButton({ editor, action, icon, tooltip }) {
  if (!editor) return null;
  return (
    <button
      type="button"
      title={tooltip}
      onClick={() => editor.chain().focus()[action]().run()}
      className="px-2 py-1 hover:bg-gray-200 rounded transition"
    >
      {icon}
    </button>
  );
}
