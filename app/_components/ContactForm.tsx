"use client";

import { useState } from "react";

export default function ContactForm() {
    const [ nome, setNome ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ submitted, setSubmitted ] = useState( false );

    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        setSubmitted( true );

        if ( nome.trim() && email.trim() ) {
            console.log( "Formulário enviado:", { nome, email } );
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="
        flex flex-col gap-4 
        w-full max-w-[329px] 
        md:w-[240px]
      "
        >
            <p className="text-white font-semibold text-[20px] md:text-xl">
                Fale conosco
            </p>

            <div className="flex flex-col gap-1">
                <input
                    type="text"
                    placeholder="Nome *"
                    value={nome}
                    onChange={( e ) => setNome( e.target.value )}
                    className={`
            w-full h-[35px] px-3 py-2 rounded-md border text-base leading-none
            bg-transparent text-white focus:outline-none focus:ring-1
            ${ submitted && !nome.trim()
                            ? "border-[#FF4D00] placeholder:text-[#FF4D00]/60 focus:ring-[#FF4D00]"
                            : "border-white/60 placeholder:text-white/60 focus:ring-white"
                        }
          `}
                />
                {submitted && !nome.trim() && (
                    <span className="text-xs text-[#FF4D00]">Nome é obrigatório</span>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    type="email"
                    placeholder="E-mail *"
                    value={email}
                    onChange={( e ) => setEmail( e.target.value )}
                    className={`
            w-full h-[35px] px-3 py-2 rounded-md border text-base leading-none
            bg-transparent text-white focus:outline-none focus:ring-1
            ${ submitted && !email.trim()
                            ? "border-[#FF4D00] placeholder:text-[#FF4D00]/60 focus:ring-[#FF4D00]"
                            : "border-white/60 placeholder:text-white/60 focus:ring-white"
                        }
          `}
                />
                {submitted && !email.trim() && (
                    <span className="text-xs text-[#FF4D00]">E-mail é obrigatório</span>
                )}
            </div>

            <button
                type="submit"
                className="
          h-[43px] w-[196px] md:w-fit
          px-[18px] py-3
          bg-white text-primary text-[16px] font-semibold uppercase
          rounded-[8px] flex items-center justify-center
        "
            >
                Enviar mensagem
            </button>
        </form>
    );
}
