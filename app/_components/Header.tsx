"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

interface MenuItem {
    name: string;
    url: string;
}
interface HeaderProps {
    menuItems: MenuItem[];
}

export default function Header( { menuItems }: HeaderProps ) {
    const [ sidebarOpen, setSidebarOpen ] = useState( false );

    return (
        <>
            <header className="w-full h-16 bg-white flex items-center justify-between px-8 py-4 md:px-[140px]">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logoipsum"
                        width={160}
                        height={29}
                        className="h-[29px] w-auto"
                        priority
                    />
                </div>

                <nav className="hidden md:flex gap-6 text-base text-primary">
                    {menuItems.map( ( item, i ) => (
                        <a key={i} href={item.url} className="hover:underline">
                            {item.name}
                        </a>
                    ) )}
                </nav>

                <button
                    aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
                    className="md:hidden size-8 grid place-items-center"
                    onClick={() => setSidebarOpen( !sidebarOpen )}
                >
                    {sidebarOpen ? (
                        <X className="size-8" strokeWidth={1.75} />
                    ) : (
                        <Menu className="size-8 cursor-pointer" strokeWidth={1.75} />
                    )}
                </button>
            </header>

            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetContent side="right" className="w-[393px] max-w-full bg-[#170038] p-0 gap-0 [&>button]:hidden border-l-0">
                    <SheetHeader className="bg-white py-4 px-8">
                        <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                        <div className="flex items-center justify-between">
                            <Image
                                src="/logo.png"
                                alt="Logoipsum"
                                width={160}
                                height={29}
                                className="h-[29px] w-auto"
                            />
                            <button
                                onClick={() => setSidebarOpen( false )}
                                className="size-8 grid place-items-center cursor-pointer text-[#FF4D00]"
                                aria-label="Fechar menu"
                            >
                                <X className="size-6" strokeWidth={1.75} />
                            </button>
                        </div>
                    </SheetHeader>

                    <div className="bg-[#170038] p-8">
                        <nav className="flex flex-col gap-6">
                            {menuItems.map( ( item, i ) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    className={`text-xl font-normal ${ item.name === "Produtos" ? "text-[#FF4D00]" : "text-white"
                                        }`}
                                    onClick={() => setSidebarOpen( false )}
                                >
                                    {item.name}
                                </a>
                            ) )}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
