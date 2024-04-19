import { IconType } from "react-icons";

interface CardProps {
    title: string;
    description: string;
    icon: IconType;
}

export function Card({
    title,
    description,
    icon: Icon,
}: CardProps) {
    return (
        <div
            className="
                relative
                border-[1px]
                border-gray-100
                shadow-sm
                overflow-hidden
                rounded-md"
        >
            <div
                className="
                    h-2
                    w-full
                    bg-green-700"
            />
            <div
                className="
                    p-8"
            >
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        gap-4
                        mb-4"
                >
                    <div
                        className="
                            p-2
                            w-fit
                            rounded-sm"
                    >
                        <Icon
                            className="
                                w-10
                                h-10
                                text-green-800"
                        />
                    </div>
                    <h1
                        className="
                            font-bold
                            text-2xl
                            text-zinc-700"
                    >
                        {title}
                    </h1>
                </div>
                <p
                    className="
                        text-gray-500
                        text-center"
                >
                    {description}
                </p>
            </div>
        </div>
    )
}