import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <footer className="w-full mx-auto border-t rounded-t-lg mt-4">
            <div className="max-w-[90%] mx-auto py-6 flex justify-between items-center">
                <label className="flex items-center">
                    Made with ❤️ NextImage-Loader
                </label>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/Code-Parth" target="_blank">
                        <Button
                            variant="outline"
                            className="cursor-pointer"
                        >
                            <GitHubLogoIcon />
                        </Button>
                    </Link>

                    <Link href="https://www.x.com/Code_Parth" target="_blank">
                        <Button
                            variant="outline"
                            className="cursor-pointer"
                        >
                            <TwitterLogoIcon />
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    );
}