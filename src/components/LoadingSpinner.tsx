import { twMerge } from 'tailwind-merge'

interface LoadingSpinnerProps {
    className?: HTMLDivElement["className"];
}

export function LoadingSpinner({
    className
}: LoadingSpinnerProps) {
    return (
        <div
            className={twMerge(`
                inline-block
                h-4
                w-4
                animate-spin
                rounded-full
                border-2
                border-solid
                border-current
                border-r-transparent
                align-[-0.125em]
                motion-reduce:animate-[spin_1.5s_linear_infinite]
                duration-100`, className ?? "")}
            role="status"
        >
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >
                Loading...
            </span>
        </div>
    )
}