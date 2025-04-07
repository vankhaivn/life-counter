import { Navbar } from "@components/index";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full">
            <Navbar />
            {children}
        </div>
    );
}
