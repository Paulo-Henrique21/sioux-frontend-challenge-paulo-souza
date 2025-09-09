interface CTA {
    name: string;
    url: string;
}

interface Solution {
    title: string;
    description: string;
    icon: string;
    ctas: CTA;
}

interface ServicesProps {
    solutions: Solution[];
    iconMap: Record<string, React.ComponentType<any>>;
}

export default function Services( { solutions, iconMap }: ServicesProps ) {
    return (
        <section
            id="services"
            className="
    w-full
    px-8 md:px-[140px]
    py-8 md:py-16
    grid grid-cols-1 md:grid-cols-3
    gap-9
  "
        >
            {solutions.map( ( solution, index ) => {
                const Icon = iconMap[ solution.icon ];

                return (
                    <div
                        key={index}
                        className="
          w-full md:w-auto
          flex flex-col justify-between gap-2
        "
                    >
                        <div className="pb-4 flex flex-col gap-2">
                            <div className="w-[72px] h-[72px] md:w-24 md:h-24 flex items-center justify-center text-[#FF4D00]">
                                {Icon ? <Icon className="w-full h-full" strokeWidth={1.5} /> : null}
                            </div>

                            <p className="font-semibold text-primary text-[18px] md:text-xl">
                                {solution.title}
                            </p>

                            <p className="font-normal text-[16px] md:text-base text-primary">
                                {solution.description}
                            </p>
                        </div>

                        <a
                            href={solution.ctas.url}
                            className="
    inline-flex items-center justify-center
    w-fit          /* Fixed no mobile; Hug no desktop */
    h-10 md:h-[43px]            /* 40px (mob) / 43px (desk) */
    px-[18px] py-3              /* 18 L/R, 12 T/B */
    rounded-[8px]
    bg-primary text-white
    text-[14px] md:text-base    /* 14 mob / 16 desk */
    font-semibold uppercase
    leading-none
  "
                        >
                            {solution.ctas.name}
                        </a>



                    </div>
                );
            } )}
        </section>

    );
}

