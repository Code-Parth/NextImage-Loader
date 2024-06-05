"use client"

import { Card } from "@/components/ui/card";
import NextImage from "@/components/NextImage";

const ImagesData = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a",
    "https://images.unsplash.com/photo-1433477155337-9aea4e790195",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    "https://images.unsplash.com/photo-1434730737257-3e97ad16f4b6",
    "https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8",
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e",
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
];

export default function Home() {
    return (
        <main className="w-full max-w-[90%] mx-auto flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {ImagesData.map((data, index) => (
                    <Card key={index} className="overflow-hidden">
                        <NextImage ImageSRC={data} ImageALT="Image" ImageWidth={1920} ImageHeight={1080} ClassName="aspect-video w-full" />
                    </Card>
                ))}
            </div>
        </main>
    );
}
