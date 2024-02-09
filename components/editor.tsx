"use client"


import { useTheme } from "next-themes";
import {
  BlockNoteEditor,
  PartialBlock,
  BlockSchemaFromSpecs,
} from "@blocknote/core";

import {
  BlockNoteView,
  useBlockNote
} from "@blocknote/react";

import "@blocknote/react/style.css";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
};

const Editor = ({
  onChange,
  initialContent,
  editable
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file
    });

    return response.url
  }

  function isBlockSchemaFromSpecsArray(obj: any): obj is BlockSchemaFromSpecs<{obj: any}>[] {
    // Implement your type checking logic here
    // For example, check if obj is an array and if its elements have certain properties
    return Array.isArray(obj) && obj.every(item => item && item.paragraph && item.paragraph.config);
  }
  
  const parsedContent = initialContent ? JSON.parse(initialContent) : undefined;
  
  if (parsedContent && !isBlockSchemaFromSpecsArray(parsedContent)) {
    throw new Error('Invalid initial content');
  }
  
  const editor: BlockNoteEditor = useBlockNote({
    editable,
    initialContent: parsedContent,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload
  });

  return (
    <div>
      <BlockNoteView 
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  )
}

export default Editor;