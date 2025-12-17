import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <Image
          className="dark:invert  rounded-4xl "
          src="/photo.png"
          alt="My Face!"
          width={100}
          height={20}
          priority
        />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Matt Samuels
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I'm Matt. I'm a computer scientist with a passion for problem solving. I'm always learning new skills to help me work through any obstacles I face.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/mlsamuels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/githublogowhite.svg"
              alt="GitHub Logo"
              width={20}
              height={20}
            />
            GitHub
          </a>

        </div>

        <div>
          <div>
            <Image
                className="dark:invert"
                src="/javalogo.svg"
                alt="Logo1"
                width={50}
                height={50}
                priority
            />
          </div>
          <div>
            <Image
                className="dark:invert"
                src="/pythonlogo.svg"
                alt="Logo1"
                width={50}
                height={50}
                priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
