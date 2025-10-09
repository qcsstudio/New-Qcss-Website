"use client";
import React, { useMemo, useCallback, Suspense } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";

import ToolbarButton from "./ToolbarButton";

// Lazy load modals
const ImageUploadModal = React.lazy(() => import("./ImageUploadModal"));
const LinkModal = React.lazy(() => import("./LinkModal"));

export default function TiptapEditor({content}) {
    // Memoized extensions
    const extensions = useMemo(
        () => [
            StarterKit,
            Underline,
            Link.configure({ openOnClick: false }),
            Image.configure({ inline: false }),
            Table.configure({ resizable: true }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        []
    );

    // Editor instance
    const editor = useEditor({
        immediatelyRender: false,
        extensions,
        content:content,
    });

    // Example callback for paste normalization
    const handlePaste = useCallback((event) => {
        const text = event.clipboardData.getData("text/plain");
        editor.chain().focus().insertContent(text).run();
        event.preventDefault();
    }, [editor]);

    if (!editor) return null;

    return (
        <div className="p-4 border rounded-lg">
            {/* Toolbar */}
            <div className="flex gap-2 mb-3 flex-wrap">
                <ToolbarButton editor={editor} action="toggleBold" icon="B" tooltip="Bold" />
                <ToolbarButton editor={editor} action="toggleItalic" icon="I" tooltip="Italic" />
                <ToolbarButton editor={editor} action="toggleUnderline" icon="U" tooltip="Underline" />
                <ToolbarButton editor={editor} action="toggleHeading" icon="H1" tooltip="Heading 1" />
                <ToolbarButton editor={editor} action="toggleHeading" icon="H2" tooltip="Heading 2" />
                <ToolbarButton editor={editor} action="toggleBulletList" icon="• List" tooltip="Bullet List" />
                <ToolbarButton editor={editor} action="toggleOrderedList" icon="1. List" tooltip="Ordered List" />
                <ToolbarButton editor={editor} action="toggleBlockquote" icon="❝ ❞" tooltip="Blockquote" />
                <ToolbarButton editor={editor} action="setHorizontalRule" icon="―" tooltip="Horizontal Rule" />
                <ToolbarButton editor={editor} action="undo" icon="↶" tooltip="Undo" />
                <ToolbarButton editor={editor} action="redo" icon="↷" tooltip="Redo" />
            </div>

            {/* Editor Content */}
            <EditorContent
                editor={editor}
                onPaste={handlePaste}
                className="border p-3 rounded min-h-[200px]"
            />

            {/* Lazy-loaded Modals */}
            <Suspense fallback={<div>Loading...</div>}>
                <ImageUploadModal editor={editor} />
                <LinkModal editor={editor} />
            </Suspense>
        </div>
    );
}
