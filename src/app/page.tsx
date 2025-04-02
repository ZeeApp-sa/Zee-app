import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-primary">Zee</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center justify-center gap-8">
        <h2 className="text-2xl font-semibold text-secondary">
          Explore local dispensaries around Cape Town
        </h2>
        <p className="text-center text-gray-600">
          This is a simple app to explore local dispensaries around Cape Town.
          <br />
          It is built with Next.js, Tailwind CSS, and TypeScript.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/hero-image.png"
            alt="Hero image"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <a
            href="/explore"
            className="px-4 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition duration-200"    
          >
            Explore Now
          </a>
        </div>
      </main>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold text-secondary"> Get Started</h3>
        <p className="text-center text-gray-600">
          To get started, check out the documentation and examples.
          <br />
          You can also find the source code on GitHub.
        </p>
        <a></a>
        
        </div>           
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
