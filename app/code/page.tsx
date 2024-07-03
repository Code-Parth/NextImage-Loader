"use client";

import MarkdownPreview from "@/components/markdown/markdownPreview";

const Content00 = `
## Overview

The \`NextImage\` component is a custom image loader for Next.js applications. It provides a progressive image loading experience by initially displaying a blurred version of the image and gradually removing the blur effect.

## Installation

1. **Set up a Next.js project**
    If you don't have a Next.js project, create one using the following command:
`

const Code00 = `
\`\`\`bash
npx create-next-app my-next-app
\`\`\`
`

const Code01 = `
2. **Add necessary dependencies**
    Navigate to your project directory and install the required dependencies:

\`\`\`bash
npm install clsx tailwind-merge
\`\`\`

`

const Content01 = `
3. **Create a utility function**
    Create a new file at \`lib/utils.ts\` and add the following code:

\`\`\`ts
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
\`\`\`

`

const NextImageCode = `
## NextImage Component

4. **Create the NextImage component**
    Create a new file at \`components/NextImage.tsx\` and add the following code:

\`\`\`tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const blurImage = [
    "blur-3xl",
    "blur-2xl",
    "blur-xl",
    "blur-lg",
    "blur-md",
    "blur-sm",
    "blur-none",
];

interface NextImageProps extends Omit<ImageProps, "className" | "onLoad"> {
    alt: string;
    className?: string;
}

export default function NextImage({ className, alt, ...props }: NextImageProps) {
    const [blurImageProp, setBlurImageProp] = useState("blur-3xl");

    return (
        <Image
            {...props}
            alt={alt}
            blurDataURL={props.src as string}
            className={cn(className, blurImageProp)}
            onLoad={() => {
            let i = 0;
                const interval = setInterval(() => {
                    setBlurImageProp(blurImage[i]);
                    i++;
                    if (i === blurImage.length) {
                        clearInterval(interval);
                    }
                }, 75);
            }}
        />
    );
}
\`\`\`
`

const Content02 = `
## Usage

5. **Import and use the NextImage component**
    Import the NextImage component into the file where you want to use it, for example, \`pages/index.tsx\`:

`

const Code02 = `
\`\`\`tsx
import React from "react";
import NextImage from "@/components/NextImage";

    const ExamplePage = () => {
        return (
            <div className="overflow-hidden">
                <NextImage
                    src="/path/to/your/image.jpg"
                    alt="Description of the image"
                    width={600}
                    height={400}
                    className="custom-class"
                />
            </div>
        );
    };

export default ExamplePage;
\`\`\`
`

const Content03 = `

## Styling

6. **Add custom CSS classes**
    You can pass additional class names through the \`className\` prop to style the image. For example, in your CSS file:

`

const Code03 = `
\`\`\`css
.custom-class {
        border-radius: 8px;
}
\`\`\`

`

const Content04 = `

## How It Works

The \`NextImage\` component utilizes the \`useState\` hook to manage the blur effect class. When the image loads, an interval updates the blur class sequentially, creating a progressive loading effect.

### Key Features
- **Progressive Blur Removal**: The image starts with a heavy blur and gradually becomes clear.
- **Responsive Design**: Utilizes Next.js's Image component for optimized and responsive image loading.
- **Easy Integration**: Simple component for quick integration into any Next.js project.

### Conclusion
The \`NextImage\` component is a powerful yet simple tool for enhancing image loading in your Next.js applications. By following the steps outlined, you can easily integrate and customize the component to fit your project's needs.

`

export default function CodePage() {
    return (
        <div className="w-full py-8 max-w-[90vw] mx-auto flex flex-col gap-4 items-center">
            <MarkdownPreview
                content={Content00}
            />
            <MarkdownPreview
                filename="Create_Next_App"
                content={Code00}
            />
            <MarkdownPreview
                filename="Add_Dependencies"
                content={Code01}
            />
            <MarkdownPreview
                filename="lib/utils"
                content={Content01}
            />
            <MarkdownPreview
                filename="components/NextImage"
                content={NextImageCode}
            />
            <MarkdownPreview
                content={Content02}
            />
            <MarkdownPreview
                filename="index"
                content={Code02}
            />
            <MarkdownPreview
                content={Content03}
            />
            <MarkdownPreview
                filename="custom-class"
                content={Code03}
            />
            <MarkdownPreview
                content={Content04}
            />
        </div>
    );
}