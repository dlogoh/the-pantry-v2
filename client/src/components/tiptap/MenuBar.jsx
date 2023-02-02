import React from "react";

function MenuBar({ editor }) {
  const handleClick = (e) => {
    e.preventDefault();

    editor.chain().focus().toggleBold().run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div className='btn-rack'>
      <button
        className={`tip-btn tip-btn-bold ${
          editor.isActive("bold") ? "is-active" : ""
        }`}
        id={"1"}
        onClick={(e) => handleClick(e)}
      ></button>
    </div>
  );
}

export default MenuBar;
