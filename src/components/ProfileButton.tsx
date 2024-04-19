"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { UserAvatar } from './UserAvatar'
import { signOut } from 'next-auth/react';

interface ProfileButtonProps {
    name: string;
    imageURL: string;
}

export function ProfileButton({
    name,
    imageURL
}: ProfileButtonProps) {

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger
                className="
                    flex
                    items-center
                    justify-between
                    gap-5
                    pl-6
                    w-64
                    h-20"
            >
                <div
                    className='
                        h-10
                        w-px
                        dark:bg-slate-500
                        bg-slate-400'
                />
                <span
                    className="
                        truncate
                        dark:text-white
                        text-zinc-800"
                >
                    {name}
                </span>
                <UserAvatar
                    imageURL={imageURL}
                    name={name}
                />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="
                        w-64
                        dark:bg-slate-700
                        bg-white
                        z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
                >
                    <DropdownMenu.Label
                        className='
                            px-2
                            text-sm
                            font-semibold
                            dark:text-gray-200
                            text-zinc-500
                            pt-3'
                    >
                        Mi Cuenta
                    </DropdownMenu.Label>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item
                        className='
                            py-2
                            px-2.5
                            dark:hover:bg-slate-800
                            hover:bg-slate-200'
                    >
                        <button
                            onClick={() => signOut()}
                        >
                            Cerrar Sesión
                        </button>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}