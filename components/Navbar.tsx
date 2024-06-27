"use client";

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar () {

    const { data: session } = useSession();

    console.log(session);

    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault()
        signIn();
    }


    return (
        <nav className='flex justify-between items-center gap-2 w-max-[800px] bg-slate-200 px-4 py-2 text-black rounded-full'>
            <Link href="/" className='hover:font-bold flex gap-2 items-center'>
                <Image className='rounded-full' src="/icon.png" alt="Pagaraplata" priority width={60} height={60} />
                Pagaraplata
            </Link>
            <div className='flex gap-2'>
                <button type='button' onClick={handleLogin} className='px-4 py-2 hover:bg-blue-500 hover:opacity-50 hover:font-bold rounded-full'>Entrar</button>
            </div>
        </nav>
    )
}
