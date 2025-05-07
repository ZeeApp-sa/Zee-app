'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingpage.png"
          alt="Zee App Coming Soon"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen px-4 pb-12">
        <Link href="/register">
          <button className="bg-white text-green-600 font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg hover:bg-green-100 transition">
            Early-Access Membership
          </button>
        </Link>
      </div>
    </main>
  );
}
