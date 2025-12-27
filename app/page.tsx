'use client';
import Image from "next/image";
import { useState } from 'react';


export default function Home() {
  const [aboutText, setAboutText] = useState("Click on the icons to learn more about my skills!")
  const [aboutLogo, setAboutLogo] = useState("/favicon.ico")


  function changeAbout(icon:string){
    const dict: {[key: string]: string[]} = {
      java: ["Java is the language I have the most experience in. It's the main language used in my classes and the language I'm most equipped to teach. I have created hundreds of projects in Java and have an intuitive understanding of its syntax. I was the lead Java instructor at SummerTech, where I taught java skills to the other teachers. I was the person who would fix problems no one else could. Because of my experience I can solve most java bugs quickly as I've seen them before.","/javalogo.svg"],
      python: ["Python is one of my most used languages. I have extensive experience both using and teaching it. I'm also familiar with several libraries and frameworks such as Numpy, Pandas, TensorFlow, Pytorch, and Keras. Python is one of my favorite languages because of its ease of access and concise syntax.", "/pythonlogo.svg"]
    }

    const dictResult:string[] = dict[icon];
    setAboutText(dictResult[0])
    setAboutLogo(dictResult[1])
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col gap-6 items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-row gap-2 items-center">
          <Image
          className="dark:invert  rounded-4xl "
          src="/photo.png"
          alt="My Face!"
          width={100}
          height={20}
          priority
        />
          <h1 className=" max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Matt Samuels
          </h1>
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&#39;m Matt. I&#39;m a computer scientist with a passion for problem solving. I&#39;m always learning new skills to help me work through any obstacle I face.
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

          <a
              className="flex h-12 w-full items-center gap-2 justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://www.linkedin.com/in/matthew-samuels-843ba8321/"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                className=" "
                src="/linkedinlogo.svg"
                alt="LinkedIn Logo"
                width={20}
                height={20}
            />
            LinkedIn
          </a>

        </div>


        <div className="circle-container">
          <div className="center-element flex flex-row  items-center  justify-center gap-4">
            <Image
                className="dark:invert flex-none "
                src={aboutLogo}
                alt="Logo1"
                width={100}
                height={100}
                priority
            />

            <p className="flex-1 min-w-0 text-align-justify  text-sm  text-zinc-600 dark:text-zinc-400 max-w-1/2">
              {aboutText}
            </p>

          </div>


          <div className="moving-element" style={{'--i': 1}as React.CSSProperties}>
            <Image
                className="hover:bg-black/[.04]  p-2 rounded-full dark:invert "
                src="/javalogo.svg"
                alt="Logo1"
                width={70}
                height={70}
                priority
                onClick={()=>changeAbout("java")}
            />
          </div>

          <div className="moving-element" style={{'--i': 2}as React.CSSProperties}>
            <Image
                className="dark:invert p-2 hover:bg-black/[.04] rounded-full"
                src="/pythonlogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                onClick={()=>changeAbout("python")}
            />
          </div>
        </div>


      </main>
    </div>
  );
}

