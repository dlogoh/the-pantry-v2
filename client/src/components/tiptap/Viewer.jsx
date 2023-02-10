import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./Viewer.css";

const Viewer = ({ post }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `${post}`,
    editable: false,
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className='viewer'
        style={{ width: "auto", height: "auto" }}
      />
    </>
  );
};

export default Viewer;
