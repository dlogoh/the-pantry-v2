import React from "react";

function MenuBar({ editor }) {
  const handleBold = (e) => {
    e.preventDefault();

    editor.chain().focus().toggleBold().run();
  };

  const handleItalic = (e) => {
    e.preventDefault();

    editor.chain().focus().toggleItalic().run();
  };

  const handleBullet = (e) => {
    e.preventDefault();

    editor.chain().focus().toggleBulletList().run();
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
        onClick={(e) => handleBold(e)}
      ></button>
      <button
        className={`tip-btn tip-btn-italic ${
          editor.isActive("italic") ? "is-active" : ""
        }`}
        id={"1"}
        onClick={(e) => handleItalic(e)}
      ></button>
      <button
        className={`tip-btn tip-btn-bullet ${
          editor.isActive("bulletList") ? "is-active" : ""
        }`}
        id={"1"}
        onClick={(e) => handleBullet(e)}
      ></button>
    </div>
  );
}

export default MenuBar;
