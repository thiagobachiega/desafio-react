'use client'

import '@/ui/global.css';
import Providers from '@/providers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export let router: AppRouterInstance

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    router = useRouter()

    return (
        <html lang="en">
            <head>
                <title>Pokédex - Explore os Pokémon</title>
            </head>
            <body className="bg-slate-50">
                <Providers>
                    <div>
                        <header>
                            <div className="flex flex-col items-center justify-start p-8">
                                <div className="p-0">
                                    <Image
                                        src="/pokeball.png"
                                        width={90}
                                        height={90}
                                        className="hidden md:flex"
                                        alt="Pokeball"
                                    />
                                </div>
                                <div className="flex mt-4">
                                    <h1 className="text-6xl font-extrabold bg-gradient-to-r
                                    text-transparent bg-clip-text
                                     from-red-600 to-blue-600">Pokédex</h1>
                                </div>
                                <div className="flex mt-4">
                                    <p className="font-semibold text-lg text-gray-600 text-center">
                                        Explore os 151 pokémon originais da região de Kanto
                                    </p>
                                </div>
                            </div>
                        </header>
                        <main>{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
