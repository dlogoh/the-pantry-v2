import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

import "./Tiptap.css";

const Instructions = ({ state, setState }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Enter details here</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setState({
        ...state,
        instructions: html,
      });
    },
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Instructions;
