import Image from "next/image";
import CTAButtons from "./CTAButtons";

interface CTA { name: string; url: string; }
interface Hero { title: string; description: string; image: string; ctas: CTA[]; }

export default function Banner( { hero }: { hero: Hero } ) {
    return (
        <section className="w-full px-2">
            <div className="relative h-[500px] rounded-[16px] overflow-hidden">
                <Image
                    src={hero.image}
                    alt="Banner"
                    fill
                    className="object-cover object-[45%_35%] md:object-[70%_50%]"
                    sizes="(max-width: 768px) calc(100vw - 16px), 1440px"
                    quality={90}
                    priority
                />

                <div className="absolute inset-0 flex items-center justify-center px-2">
                    <div className="w-full max-w-[336px] md:max-w-[600px] flex flex-col items-center text-center gap-6">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-white text-[24px] md:text-4xl font-semibold uppercase leading-none tracking-tight">
                                {hero.title}
                            </p>
                            <p className="text-white/90 text-sm md:text-lg">
                                {hero.description}
                            </p>
                        </div>
                        <CTAButtons ctas={hero.ctas} />
                    </div>
                </div>
            </div>
        </section>
    );
}
