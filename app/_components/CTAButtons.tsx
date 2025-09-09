import Link from "next/link";

interface CTA {
    name: string;
    url: string;
}
interface CTAButtonsProps {
    ctas: CTA[];
}

export default function CTAButtons( { ctas }: CTAButtonsProps ) {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[336px] md:w-auto flex flex-col md:flex-row gap-4 md:gap-6">
                {ctas.map( ( cta, index ) => (
                    <Link
                        key={index}
                        href={cta.url}
                        className="
              inline-flex items-center justify-center
              w-full md:w-auto
              h-10 md:h-[43px]
              rounded-[8px]
              px-[18px] py-[12px]
              bg-white text-[#170038]
              font-semibold uppercase
              text-[14px] md:text-[16px]
              text-center
            "
                    >
                        {cta.name}
                    </Link>
                ) )}
            </div>
        </div>
    );
}
