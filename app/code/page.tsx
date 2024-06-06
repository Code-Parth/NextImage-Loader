"use client";

import MarkdownPreview from "@/components/markdown/MarkdownPreview";
import { create } from "domain";

const Content00 = `
## Overview

The \`NextImage\` component is a custom image loader for Next.js applications. It provides a progressive image loading experience by initially displaying a blurred version of the image and gradually removing the blur effect.

## Installation

To use the \`NextImage\` component, you need to have a Next.js project set up. If you don't have one, you can create it using the following command:
`

const Code00 = `
\`\`\`bash
npx create-next-app my-next-app
\`\`\`
`
const Code01 = `
add dependencies to your project by running the following command:

\`\`\`bash
npm install clsx tailwind-merge
\`\`\`

`

const Content01 = `
create a new file at \`lib\` folder called \`utils.ts\` and add the following code to it:

\`\`\`ts
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
\`\`\`

`

const NextImageCode = `
## Create the NextImage Component

create a new file at \`components\` folder  called \`NextImage.tsx\` and add the following code to it:

\`\`\`tsx
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const blurImage = [
    "blur-3xl",
    "blur-2xl",
    "blur-xl",
    "blur-lg",
    "blur-md",
    "blur-sm",
    "blur-none",
];

interface NextImageProps {
    ImageSRC: string;
    ImageALT: string;
    ImageWidth: number;
    ImageHeight: number;
    ClassName: string;
}

export default function NextImage({ ImageSRC, ImageALT, ImageWidth, ImageHeight, ClassName }: NextImageProps) {
    const [blurImageProp, setBlurImageProp] = useState("blur-3xl");

    return (
        <Image
            src={ImageSRC}
            alt={ImageALT}
            width={ImageWidth}
            height={ImageHeight}
            blurDataURL={ImageSRC}
            className={cn(ClassName, blurImageProp)}
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
After setting up your project, place the \`NextImage\` component file in the appropriate directory, such as \`components/NextImage.tsx\`.

## Usage

### Importing the Component

First, import the \`NextImage\` component into the file where you want to use it.
`

const Code02 = `
\`\`\`tsx
import NextImage from "@/components/NextImage";
\`\`\`
`

const Content03 = `

### Component Props

The \`NextImage\` component accepts the following props:

- \`ImageSRC\`: The source URL of the image.
- \`ImageALT\`: The alternative text for the image.
- \`ImageWidth\`: The width of the image.
- \`ImageHeight\`: The height of the image.
- \`ClassName\`: Additional class names for styling the image.

### Example Usage

Here is an example of how to use the \`NextImage\` component in a Next.js page or component:

`

const Code03 = `
\`\`\`tsx
import React from "react";
import NextImage from "@/components/NextImage";

const ExamplePage = () => {
    return (
        <div>
            <h1>Example Page</h1>
            <NextImage
                ImageSRC="/path/to/your/image.jpg"
                ImageALT="Description of the image"
                ImageWidth={600}
                ImageHeight={400}
                ClassName="custom-class"
            />
        </div>
    );
};

export default ExamplePage;
\`\`\`

`

const Content04 = `

### Styling

You can pass additional class names through the \`ClassName\` prop to style the image. The \`blurImage\` prop will be dynamically updated to progressively remove the blur effect.
also you can use tailwind css classes to style the image.

Example CSS:

`

const Code04 = `

\`\`\`css
.custom-class {
    border-radius: 8px;
}
\`\`\`
`

const Content05 = `
## How It Works

The \`NextImage\` component uses the \`useState\` hook to manage the blur effect class. When the image loads, an interval is set to update the blur class in sequence, creating a progressive loading effect.

### Key Features

- **Progressive Blur Removal**: The image starts with a heavy blur and gradually becomes clear.
- **Responsive Design**: Utilizes Next.js's \`Image\` component for optimized and responsive image loading.
- **Easy Integration**: Simple API for quick integration into any Next.js project.

## Conclusion

The \`NextImage\` component is a powerful yet simple tool for enhancing image loading in your Next.js applications. By following the steps outlined in this documentation, you can easily integrate and customize the component to fit your project's needs.


`

export default function CodePage() {
    return (
        <main className="w-full max-w-[90%] mx-auto flex flex-col gap-4 items-center">
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
                filename="Example_Page"
                content={Code03}
            />
            <MarkdownPreview
                content={Content04}
            />
            <MarkdownPreview
                filename="Custom_CSS"
                content={Code04}
            />
            <MarkdownPreview
                content={Content05}
            />
        </main>
    );
}