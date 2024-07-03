"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { icons } from "@/lib/icons";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-light.min.css";
import { FileTextIcon } from "@radix-ui/react-icons";
import CopyButton from "@/components//markdown/copyButton";

export default function MarkdownPreview({ content, className = "", filename }: { content: string; className?: string; filename?: string; }) {
    return (
        <main className="w-full max-w-[90%] mx-auto flex items-center">
            <Markdown
                className={cn("w-full", className)}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    h1: ({ node, ...props }) => {
                        return <h1 {...props} className="text-3xl font-bold py-2 border-b-[1pt]" />;
                    },
                    h2: ({ node, ...props }) => {
                        return (
                            <h2 {...props} className="text-2xl font-bold mt-4 py-2"
                            />
                        );
                    },
                    h3: ({ node, ...props }) => {
                        return (
                            <h3 {...props} className="text-xl font-bold my-2 py-2"
                            />
                        );
                    },
                    p: ({ node, ...props }) => {
                        return <p {...props} className="text-lg py-2" />;
                    },
                    a: ({ node, ...props }) => {
                        return (
                            <a
                                {...props}
                                className="text-blue-500 hover:underline"
                            />
                        );
                    },
                    ul: ({ node, ...props }) => {
                        return <ul {...props} className="list-disc pl-5 py-2" />;
                    },
                    ol: ({ node, ...props }) => {
                        return <ol {...props} className="list-decimal pl-5 py-2" />;
                    },
                    li: ({ node, ...props }) => {
                        return <li {...props} className="text-lg py-1" />;
                    },
                    code: ({ node, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "");
                        const id = (Math.floor(Math.random() * 100) + 1).toString();
                        if (match?.length) {
                            let Icon = FileTextIcon;
                            const isMatch = icons.hasOwnProperty(match[1]);
                            if (isMatch) {
                                // @ts-ignore
                                Icon = icons[match[1] as keyof typeof icons];
                            }
                            return (
                                <div className="border-dashed border border-black/50 dark:border-white/50 rounded-md">
                                    <div className="flex items-center justify-between px-5 py-2 border-dashed border-b border-black/50 dark:border-white/50">
                                        <div className="flex items-center gap-2">
                                            <Icon />
                                            <p className="text-sm">
                                                {`${filename}.${match[1]}`}
                                            </p>
                                        </div>
                                        <CopyButton id={id} />
                                    </div>
                                    <div className="overflow-x-auto w-full">
                                        <div className="p-5" id={id}>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <code
                                    className="text-lg break-words px-1 rounded-sm"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        }
                    },
                }}
            >
                {content}
            </Markdown>
        </main>
    );
}