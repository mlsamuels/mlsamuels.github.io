'use client';
import Image from "next/image";
import { useState, useRef, useLayoutEffect} from 'react';


export default function Home() {
  const [aboutText, setAboutText] = useState("Click on the icons to learn more about my skills!")
  const [aboutLogo, setAboutLogo] = useState("/accounticon.svg")
  const [aboutInvert, setAboutInvert] = useState("")
  const scrollYRef = useRef(0);


  function changeAbout(icon:string){

    const dict: {[key: string]: string[]} = {
      java: ["/javalogo.svg", "Java is the language I have the most experience in. It's the main language used in my classes and the one I'm most equipped to teach. I have created hundreds of projects in Java and have an intuitive understanding of its syntax. I was the lead Java instructor at SummerTech, where I taught java skills to the other teachers. I was the person who would fix problems no one else could. Because of my experience I can solve most java bugs quickly as I've seen them before."],
      python: ["/pythonlogo.svg", "Python is one of my most used languages. I have extensive experience both using and teaching it. I'm also familiar with several libraries and frameworks such as Numpy, Pandas, TensorFlow, Pytorch, and Keras. Python is one of my favorite languages because of its ease of access and concise syntax."],
      c: ["/clogo.svg", "C is the language I used in my systems classes. I've used it to make a virtual memory management unit. I particularly enjoy its closeness to assembly and getting to do interesting things with pointers."],
      csharp: ["/csharplogo.svg", "C# was the first proper programming language I ever learned. Though it's extremely similar to java I still have a particular fondness for it. I've used it specifically with game development in Unity where I coded custom mechanics and behaviors for the games I've made."],
      racket: ["/racketlogo.svg", "Lisp, or more specifically Racket, was a language I used in my intro code course as well as in theoretical CS courses. I really appreciate the elegance and simplicity of the language. I also use Racket for making my schedules as I find it very convenient for programmatically editing images."],
      sql: ["/sqllogo.svg", "I gained experience using SQL and databases in classes such as 'Database Systems' and 'Software Engineering'. Now that I have some knowledge of it, I'd love the chance to build database experience within a professional context."],
      html: ["/htmllogo.svg", "After teaching HTML to myself using a free online course, I used it extensively in my software engineering classes. I also used HTML to make this website."],
      css: ["/csslogo.svg", "My experience with CSS goes hand in hand with my experience with HTML. I'm particularly proud of the CSS that went into this site, where it was used to make this wheel. It was a very fun problem to work on and satisfying to go from an idea to an implementation."],
      javascript: ["/javascriptlogo.svg", "I first interacted with JavaScript when I learned web development. It's similar in syntax to other languages I'm familiar with so I picked it up quickly. I learned TypeScript later in my software engineering classes. I've also used JavaScript when messing around with a website called Dwitter.net, where I used it to make tiny art demos"],
      react: ["/reactlogo.svg", "I learned React after I learned web development, so I have experience both with and without it. In this website, react was used to update the image and text at the center of the wheel."],
      aws: ["/awslogo.svg", "I used some Amazon Web Services during my software engineering class, specifically Lambda, S3, and API Gateway."],
      github: ["/githublogo.svg", "I've become familiar with GitHub throughout my Computer Science career. I have foundational git knowledge and am familiar with a traditional workflow."],
      scala: ["/scalalogo.svg", "I used Scala on my MQP, my final major project at WPI. In that project, my team and I developed a meta model to represent dynamic programming problem and used a scala framework to generate solutions."],
      rust: ["/rustlogo.svg", "I used Rust in my programming languages course. I enjoyed the speed, efficiency, and safety of the language."],
      matlab: ["/matlablogo.png", "I've used MatLab in most of my math courses. It's been an incredibly useful tool for mathematical computation and visualization. I've found it particularly helpful with automating tedious homework problems."],
      r: ["/rlogo.svg", "I used R in my statistics course, the language is very similar to MatLab so I picked it up quickly."],
      haskell: ["/haskelllogo.svg", "I learned some Haskell in my free time. I don't have much experience with the language but I really liked its lazy evaluation and pattern matching."],
      excel: ["/excellogo.svg", "I took a class that used Excel heavily in high school and since then I've used it whenever I need to quickly operate on data. Excel is an incredibly strong tool and I've found uses for it from doing simple calculations to organizing pairings between instructors and students at my Summer Camp job."],
      unity: ["/unitylogo.svg", "I have extensive experience in Unity, having spent several years designing video games with it. My most popular Unity game has garnered over 40,000 plays online. While I haven't developed any games recently, my experience with Unity has made other similar softwares more accessible to me."],
      plus: ["/plussymbol.svg", "And more! This site is probably outdated because I'm always learning new things, and I'm never satisfied with what I know. There's so much knowledge out there and I love to learn and apply it. Perhaps one day this circle will need a second layer!"],
      placeholder: ["globe.svg", "This is placeholder text!"],
    }


    const dictResult:string[] = dict[icon];
    setAboutLogo(dictResult[0]);
    setAboutText(dictResult[1]);
    setAboutInvert(" ");
    if(icon=="github"){
      setAboutInvert("dark:invert ")
    }


    //Save scroll
    scrollYRef.current = window.scrollY;
  }

  //Fixes scroll jump bug
  useLayoutEffect(() => {
    window.scrollTo(0, scrollYRef.current);
  }, [aboutText]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950">
      <main className="flex min-h-screen w-full max-w-4xl flex-col gap-6 items-center  py-16  bg-white dark:bg-black sm:items-start">
        <div className="px-16 flex flex-row gap-2 items-center">
          <Image
          className="  rounded-4xl "
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
        <div className="px-16 flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I&#39;m a computer scientist with a passion for problem solving. I&#39;m always learning new skills to help me work through any obstacle I face.
          </p>
        </div>
        <div className="px-16 flex flex-col gap-4 text-base font-medium sm:flex-row">
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


          <a
              className="flex h-12 w-full items-center gap-2 justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent bg-[#5AC54F] hover:bg-[#33984B] dark:border-white/[.145]  md:w-[158px]"
              href="https://www.newgrounds.com/portal/view/841472"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Image
                className=""
                src="/acehead.svg"
                alt="Ace Head"
                width={30}
                height={30}
            />
            Acend
          </a>

        </div>

        <div className="px-20 circle-container  rounded-full bg-zinc-100 dark:bg-zinc-800" >
          <div className=" center-element flex flex-row  items-center  justify-center gap-4">
            <Image
                className={aboutInvert+" flex-none "}
                src={aboutLogo}
                alt="Logo1"
                width={100}
                height={100}
                priority
            />

            <p className="flex-1 min-w-0 text-align-justify  text-sm  text-zinc-600 dark:text-zinc-400 max-w-96">
              {aboutText}
            </p>

          </div>


          <div className="moving-element" style={{'--i': 1}as React.CSSProperties}>
            <Image
                className="hover:bg-black/[.04] dark:hover:bg-white/[.04] p-2 rounded-full  "
                src="/javalogo.svg"
                alt="Logo1"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("java");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 2}as React.CSSProperties }>
            <Image
                className="p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/pythonlogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("python");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 3}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/clogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("c");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 4}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/csharplogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("csharp");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 5}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/racketlogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("racket");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 6}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/sqllogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("sql");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 7}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/htmllogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("html");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 8}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/csslogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("css");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 9}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/javascriptlogo.svg"
                alt="Logo9"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("javascript");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 10}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/reactlogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("react");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 11}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/awslogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("aws");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 12}as React.CSSProperties }>
            <Image
                className="dark:invert p-2 hover:bg-black/[.04]  rounded-full"
                src="/githublogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("github");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 13}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/scalalogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("scala");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 14}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/rustlogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("rust");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 15}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/matlablogo.png"
                alt="Logo15"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("matlab");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 16}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/rlogo.svg"
                alt="Logo16"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("r");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 17}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/haskelllogo.svg"
                alt="Logo17"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("haskell");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 18}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04]  dark:hover:bg-white/[.04] rounded-full"
                src="/excellogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("excel");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 19}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/unitylogo.svg"
                alt="Logo2"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("unity");}}
            />
          </div>
          <div className="moving-element" style={{'--i': 20}as React.CSSProperties }>
            <Image
                className=" p-2 hover:bg-black/[.04] dark:hover:bg-white/[.04] rounded-full"
                src="/plussymbol.svg"
                alt="Logo20"
                width={70}
                height={70}
                priority
                tabIndex={-1}
                onClick={(e)=>{e.preventDefault(); changeAbout("plus");}}
            />
          </div>



        </div>

      </main>
    </div>
  );
}

