import Image from "next/image";

const SIZES = {
    "base": {
        width: 140,
        hegiht: 30
    },
}

interface LogotypeProps {
    size?: keyof typeof SIZES;
}

export function Logotype({
    size = "base",
}: LogotypeProps) {
    return (
        <>
            <Image
                src="/images/logo/logotype.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
            />
            <Image
                src="/images/logo/logotype.svg"
                alt="logo"
                width={SIZES[size].width}
                height={SIZES[size].hegiht}
                className="hidden w-full dark:block"
            />
        </>
    )
}