import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export function WhatsappContactButton() {
    return (
        <div className="fixed bottom-8 right-20 z-[99]">
            <div
                aria-label="Whatsapp Contact"
            >
                <Link
                    href=""
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                >
                    <FaWhatsapp />
                </Link>
            </div>
        </div>
    )
}