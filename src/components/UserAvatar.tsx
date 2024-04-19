import * as Avatar from '@radix-ui/react-avatar'

interface UserAvatarProps {
    name: string;
    imageURL: string;
}

export function UserAvatar({
    imageURL,
    name
}: UserAvatarProps) {
    const abbreviation = name.split(" ").map(w => w[0].toUpperCase()).join("")

    return (
        <Avatar.Root
            className='
                inline-flex
                items-center
                justify-center
                align-middle
                overflow-hidden
                select-none
                w-[45px]
                h-[45px]
                rounded-full
                bg-black'
        >
            <Avatar.Image
                src={imageURL}
                alt={name}
                className='
                    w-full
                    h-full
                    object-cover
                    rounded-[inherit]'
            />
            <Avatar.Fallback
                className='
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    bg-slate-200
                    text-violet-600
                    text-sm
                    leading-none
                    font-semibold'
            >
                {abbreviation}
            </Avatar.Fallback>
        </Avatar.Root>
    )
}