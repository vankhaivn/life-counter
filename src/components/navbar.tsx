"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-lg">Life Counter</span>
                    </div>
                    <div className="flex space-x-2 md:space-x-4">
                        <NavLink href="/" isActive={pathname === "/"}>
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="hidden sm:inline">Version 1</span>
                            <span className="sm:hidden">V1</span>
                        </NavLink>
                        <NavLink href="/v2" isActive={pathname === "/v2"}>
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="hidden sm:inline">Weekly Countdown</span>
                            <span className="sm:hidden">Weekly</span>
                        </NavLink>
                        <NavLink href="/v2/love" isActive={pathname === "/v2/love"}>
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            <span className="hidden sm:inline">Love Counter</span>
                            <span className="sm:hidden">Love</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({
    children,
    href,
    isActive,
}: {
    children: React.ReactNode;
    href: string;
    isActive: boolean;
}) => {
    const baseClasses =
        "flex items-center px-3 md:px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200";
    const activeClasses = "bg-gray-800 text-white";
    const inactiveClasses = "text-gray-300 hover:bg-gray-800/60 hover:text-white";

    return (
        <Link
            href={href}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </Link>
    );
};
