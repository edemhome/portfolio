import { Hero } from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-black-100 overflow-auto mx-auto sm:px10 px-5">
            <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
                <Hero />
            </div>
        </main>
    );
}
