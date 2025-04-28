'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative w-full h-screen">
      <Image
        src="/ZeeLanding.png"
        alt="Zee App Coming Soon"
        fill
        priority
        className="object-cover"
      />
      
      <div className="absolute bottom-10 w-full flex justify-center">
        <Link href="/register">
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-100 transition">
            Register Now
          </button>
        </Link>
      </div>
    </main>
  );
}
