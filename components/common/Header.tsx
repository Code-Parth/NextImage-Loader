"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full border-b border-black/50 dark:border-white/50 border-dashed rounded-lg p-4">
            <div className="w-full max-w-[90vw] mx-auto">
                <div className="flex w-full max-sm:flex-col max-sm:gap-4 justify-between items-center">
                    <div className="flex gap-4 max-sm:flex-col">
                        <Link href="/">
                            <h1 className="font-semibold text-4xl max-sm:text-2xl hover:opacity-75">NextImage-Loader</h1>
                        </Link>
                        {pathname === "/" ? (
                            <button
                                onClick={() => { window.location.reload() }}
                                className="flex gap-4 items-center justify-center px-4 py-2 border border-dashed border-black/50 dark:border-white/50 rounded-lg hover:opacity-75"
                            >
                                <ReloadIcon className="w-5 h-5" />
                                <p className="font-medium text-md">
                                    Reload
                                </p>
                            </button>
                        ) : (
                            null
                        )}
                    </div>
                    <div className="flex gap-8 items-center justify-center">
                        <Link href="/code" className="font-medium text-md hover:opacity-75">
                            Code
                        </Link>
                        <Link
                            target="_blank"
                            href="https://github.com/Code-Parth/NextImage-Loader"
                            className="flex gap-4 items-center justify-center px-4 py-2 border border-dashed border-black/50 dark:border-white/50 rounded-lg hover:opacity-75"
                        >
                            <p className="font-medium text-md">
                                Star on GitHub
                            </p>
                            <GitHubLogoIcon className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
