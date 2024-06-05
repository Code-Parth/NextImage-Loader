"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
    const pathname = usePathname();
    const { setTheme } = useTheme();


    return (
        <>
            <div className="w-full border-b mb-4 rounded-b-lg">
                <div className="max-w-[90%] w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center max-sm:flex-col max-sm:gap-4">
                    <div className="flex gap-4">
                        <Link href="../" className="cursor-pointer">
                            <h1 className="font-semibold text-3xl cursor-pointer">
                                NextImage-Loader
                            </h1>
                        </Link>
                        {pathname === "/" ? (
                            <Button
                                variant="outline"
                                onClick={() => { window.location.reload() }}
                            >
                                <ReloadIcon className="h-[1.2rem] w-[1.2rem]" />
                            </Button>
                        ) : (
                            null
                        )}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/code" className="cursor-pointer">
                            <label className="cursor-pointer">
                                Code
                            </label>
                        </Link>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="https://github.com/Code-Parth/NextImage-Loader" target="_blank">
                            <Button variant="secondary">
                                <label className="gap-2 flex font-medium text-md items-center cursor-pointer">
                                    Star on GitHub
                                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
                                </label>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}