"use client";

import Image from "next/image";
import NextImage from "@/components/ui/NextImage";

const ImageSRCs = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
];

export default function Home() {
    return (
        <div className="w-full max-w-[90vw] mx-auto">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 py-4">
                <div className="w-full border-dashed border-[1px] border-white/50 rounded-lg">
                    <div className="flex flex-col">
                        <div className="p-2 border-dashed border-b border-white/50">
                            <h2 className="text-center">Image</h2>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            {ImageSRCs.map((image, index) => (
                                <div key={index} className="rounded-md border-[1px] border-white/50 shadow-lg">
                                    <Image
                                        src={image}
                                        alt="Image"
                                        width={1080}
                                        height={1080}
                                        className="w-full aspect-video rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full border-dashed border-[1px] border-white/50 rounded-lg">
                    <div className="flex flex-col">
                        <div className="p-2 border-dashed border-b border-white/50">
                            <h2 className="text-center">NextImage-Loader</h2>
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            {ImageSRCs.map((image, index) => (
                                <div key={index} className="overflow-hidden rounded-md border-[1px] border-white/50 shadow-lg">
                                    <NextImage
                                        src={image}
                                        alt="Image"
                                        width={1080}
                                        height={1080}
                                        className="w-full aspect-video rounded-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
