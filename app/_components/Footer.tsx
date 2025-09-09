import Image from "next/image";
import ContactForm from "./ContactForm";

interface MenuItem {
    name: string;
    url: string;
}
interface FooterProps {
    menuItems: MenuItem[];
}

export default function Footer( { menuItems }: FooterProps ) {
    return (
        <footer
            className="
        bg-primary text-white
        px-8 py-16 flex flex-col gap-9
        md:flex-row md:items-center md:justify-between md:px-[140px] md:gap-0
      "
        >
            <div className="w-full md:w-auto flex flex-col gap-6">
                <div className="relative w-[160px] h-[29px]">
                    <Image
                        src="/logo-footer.png"
                        alt="Logoipsum"
                        fill
                        className="object-contain"
                        sizes="160px"
                        priority
                    />
                </div>

                <nav className="flex flex-col gap-4 text-[16px]">
                    {menuItems.map( ( item, i ) => (
                        <a key={i} href={item.url} className="text-white">
                            {item.name}
                        </a>
                    ) )}
                </nav>
            </div>

            <div className="w-full md:w-auto">
                <ContactForm />
            </div>
        </footer>
    );
}
