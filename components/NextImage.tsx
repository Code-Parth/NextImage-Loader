
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
            width={ImageWidth}
            height={ImageHeight}
            blurDataURL={ImageSRC}
            className={cn(ClassName, blurImageProp)}
        />
    );
}
