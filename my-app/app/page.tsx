import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-8">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bem-vindo ao Projeto Faculdades!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Para navegar pelas próximas páginas do sistema, adicione uma das seguintes rotas na barra de endereço do seu navegador ou clique nos links abaixo:
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium w-full sm:flex-row sm:flex-wrap">
          <Link
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-black text-white px-6 transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc]"
            href="/about"
          >
            /about
          </Link>
          <Link
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/furb"
          >
            /furb
          </Link>
          <Link
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/ufsc"
          >
            /ufsc
          </Link>
          <Link
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/ifc"
          >
            /ifc
          </Link>
        </div>
      </main>
    </div>
  );
}
