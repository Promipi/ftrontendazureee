import Image from "next/image";
import { comunidadesData } from "./comunidadesData";
import Link from "next/link";

export function Comunidades() {
    return (
        <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
            <div className="container">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4">
                        <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                            <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                                Comunidades Indígenas
                            </h1>
                            <p className="text-base font-medium leading-relaxed text-body-color">
                                Conoce más sobre nuestras comunidades indígenas
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                grid
                                gap-8
                                grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"
                        >
                            {comunidadesData.map((comunidad, idx) => (
                                <div
                                    key={idx}
                                    className="
                                        w-full
                                        py-[50%]
                                        relative"
                                >
                                    <Image
                                        alt={comunidad.alt}
                                        src={comunidad.src}
                                        className="
                                            absolute"
                                        fill
                                        style={{
                                            objectFit: "cover"
                                        }}
                                    />
                                    <div
                                        className="
                                            opacity-0
                                            hover:opacity-100
                                            duration-700
                                            bg-black/70
                                            w-full
                                            h-full
                                            absolute
                                            top-0
                                            left-0
                                            z-10
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                            flex-col
                                            p-12
                                            text-lg"
                                    >
                                        {comunidad.description}
                                        <Link
                                            href="/contacto"
                                            className="
                                                mt-8
                                                bg-green-700
                                                hover:bg-green-800
                                                duration-200
                                                h-14
                                                w-full
                                                px-8
                                                flex
                                                items-center
                                                justify-center
                                                text-white
                                                font-semibold
                                                rounded-md"
                                        >
                                            Agendar Visita
                                        </Link>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}