import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      name: "Facebook Clone",
      description: `A Full Stack Facebook cloned using React/Next.js, Typescript, Firebase, Tailwind Css.
          This Facebock clone uses the Next.Js Facebook Authentication which permits an Existing Facebook User Login/Logout Functionality.
          It has a Post Message Functionality and uses a Firebase Storage and Upload functionality to help store/retrieve the Post and Image Uploads. 
          I developed using a guided tuturiol, during the development of the project i was faced with the challenge of
          modules version updates which resulted to alot of errors. I debugged the errors by using modules/packages documentations.
        `,
      url: "https://github.com/eitse/facebook-2-clone",
    },
    {
      name: "Gmail Clone",
      description: `A Full Stack Gmail cloned using React, Redux, Firebase, Material-UI, React Router.  It has Compose Messages Functionality.
      As at the time of developing this clone, i didnt have the knowledge of tailwind Css, that would have ensured that the project is Web/Mobile responsive.
      Although i was able to learn how to implement Firebase Auth for new users, facebook/gmail user login authentication, React Router to route between pages, redux for state management of user data across different re-useable Components.
     `,
      url: "https://eitse.github.io/gmail_clone_reactJs/",
    },
    {
      name: "LinkedIn Clone",
      description: `A Full Stack LinkedIn cloned using React, Redux, Firebase, Material-UI, React Router. It has Compose Messages Functionality.
      and uses a Firebase Storage and Upload functionality to help store/retrieve the Post and Image Uploads. 
          Tailwind Css was used to ensure Mobile/Web Responsiveness.`,
      url: "https://github.com/eitse/linkedin_clone_reactJs",
    },
    {
      name: "Rock Paper Scissor Game",
      description:
        "The essense of this project is to understand the core concepts of Vanilla Javascript. Click the Link below to Play the Game",
      url: "https://eitse.github.io/paper_scissor_rock/",
    },
    {
      name: "Medium Clone",
      description: "Medium Clone still Under Construction",
      url: "Be Patient, it will be available soon",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      //use ViewPoint to animate only once but whileInView to repetitively animate
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{ once: true }}
      className=" h-screen max-w-full z-0 flex flex-col relative justify-center items-center text-center md:text-left "
    >
      <h3 className="absolute  xs:top-20 top-20 md:top-[5rem] lg:top-24  uppercase font-[600] tracking-[15px] text-[gray] text-3xl md:text-4xl">
        Projects
      </h3>
      <div
        className="w-full flex relative overflox-x-scroll   overflow-y-hidden
      snap-mandatory snap-x scrollbar scrollbar-track-gray-300 scrollbar-track-rounded-lg scrollbar-thumb-[#f7ac0acb] hover:scrollbar-thumb-[#F7AB0A] scrollbar-thumb-rounded-lg z-20"
      >
        {projects.map((project, i) => {
          return (
            <div
              key={i + 1}
              className="w-screen flex flex-col p-10 md:44 h-fit items-center justify-center flex-shrink-0  snap-center  "
            >
              <motion.img
                initial={{
                  opacity: 0,
                }}
                //use ViewPoint to animate only once but whileInView to repetitively animate
                whileInView={{
                  opacity: [0.1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
                className="h-36 w-72 xs:h-20 xs:w-32 mt-24 md:mt-20"
                alt=""
                src="/image/laptop1.png"
                height={150}
                width={150}
              />

              <motion.div
                initial={{
                  opacity: 0,
                }}
                //use ViewPoint to animate only once but whileInView to repetitively animate
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-10 px-o md:px-10 max-w-6xl"
              >
                <h4 className="text-lg md:text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A/50]">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.name}
                </h4>

                <p className="xs:text-xs text-xs md:text-lg lg:text-sm text-center md:text-left">
                  {project.description}
                </p>
                <p className="hover:animate-pulse xs:text-sm text:lg md:text-xl text-center ">
                  <a target="_blank" href={project.url}>
                    Click to Visit Website
                  </a>
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
