import Link from "next/link";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer className="w-full border-t border-black/50 dark:border-white/50 border-dashed rounded-lg p-4">
            <div className="w-full flex max-sm:flex-col gap-4 justify-between items-center max-w-[90vw] mx-auto">
                <Link href="/">
                    <h1 className="text-xl max-sm:text-sm max-sm:text-center font-semibold hover:opacity-75">Made with ❤️ NextImage-Loader</h1>
                </Link>
                <div className="flex gap-4 justify-center">
                    <Link
                        target="_blank"
                        href="https://github.com/Code-Parth"
                        className="flex gap-4 items-center justify-center px-4 py-2 border border-dashed border-black/50 dark:border-white/50 rounded-lg hover:opacity-75"
                    >
                        <GitHubLogoIcon className="w-5 h-5" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://x.com/Code_Parth"
                        className="flex gap-4 items-center justify-center px-4 py-2 border border-dashed border-black/50 dark:border-white/50 rounded-lg hover:opacity-75"
                    >
                        <TwitterLogoIcon className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
