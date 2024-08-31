import { motion } from "framer-motion";
import { Dot, ExternalLink, Github, Linkedin } from "lucide-react";

// import {  useRef } from "react";
{
  /* <ExternalLink />; */
}

// import { useEffect } from "react";
// import ParallaxText from "./ParallaxText";

function HomePage() {
  return (
    <>
      {/* Links */}
      <div className="flex p-1 flex-col space-y-1 items-center fixed w-12  top-1/2 bg-portfolio-lightest rounded-sm">

        <motion.a whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }} href="https://www.linkedin.com/in/om-prakash-sahoo-166715204/" target="_blank">
          <Linkedin className="bg-portfolio-bg shadow-sm text-portfolio-lightest rounded-sm w-10 p-2 h-10"></Linkedin>
        </motion.a>

        <motion.a whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }} target="_blank" href="https://github.com/OmPrakashSahoo416">
          <Github className="bg-portfolio-bg shadow-sm text-portfolio-lightest rounded-sm w-10 p-2 h-10"></Github>
        </motion.a>
      </div>

      <div className=" px-36 pt-24 min-h-screen h-fit bg-portfolio-bg font-['Roboto']">
        <div className="w-full h-full  justify-start flex ">
          {/* Left half introduction */}
          <div className="w-1/2 fixed">
            {/* name */}
            <div className="text-portfolio-lightest  text-5xl mb-3 flex flex-col space-y-3 font-black">
              <img
                className="w-16 animate-bounce h-16 object-cover rounded-full drop-shadow-md ring-2 ring-portfolio-lightest"
                src="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/2.0profile.png?alt=media&token=de6a5824-0e95-47a5-a0ed-6fa78bcddfa7"
                alt=""
              />
              <p>Om Prakash Sahoo</p>
            </div>

            {/* designation */}
            <div className="text-portfolio-lightest text-xl mb-6 font-semibold">
              Software Engineer
            </div>

            {/* intro line */}
            <div className="text-portfolio-lighter text-md w-1/2 mb-12 font-medium">
              I build seamless and accessible digital experiences.
            </div>
            {/* <ParallaxText baseVelocity={-5} >Framer Motion</ParallaxText> */}

            {/* navigations */}
            <div className=" flex flex-col space-y-2 text-portfolio-lightest items-start">
              {/* about */}
              <motion.button
                className="p-2 group flex items-center focus:font-bold"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    })
                }
              >
                {" "}
                <Dot className="w-10 h-10 hidden group-focus:block" /> About
              </motion.button>

              {/* experience */}
              <motion.button
                className="p-2 group flex items-center focus:font-bold "
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  document
                    .getElementById("experience")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "nearest",
                    })
                }
              >
                <Dot className="w-10 h-10 hidden group-focus:block" />
                Experience
              </motion.button>

              {/* project */}
              <motion.button
                className="p-2 group flex items-center focus:font-bold"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() =>
                  document
                    .getElementById("project")
                    .scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                }
              >
                <Dot className="w-10 h-10 hidden group-focus:block" />
                Projects
              </motion.button>

              {/* get resume */}
              <motion.button
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="text-portfolio-bg mb-12 bg-portfolio-lightest p-3 rounded-md"
              >
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/omprakashsahooresume.pdf?alt=media&token=79391b03-8810-4c6c-9e2b-2dabe07c5022"
                  target="_blank"
                >
                  Get resume
                </a>
              </motion.button>
            </div>
          </div>

          {/* right half */}
          <div className="w-1/2 ml-[50%] ">
            {/* about description */}
            <motion.div id="about" className="text-portfolio-lighter mb-24">
              With over a year of experience, I currently contribute to the
              Center of Excellence (CoE) team at{" "}
              <span className="hover:cursor-pointer hover:underline text-portfolio-lightest font-semibold">
                <a href="https://www.hsc.com/" target="_blank">Hughes Systique Corporation</a>
              </span>
              , where we drive innovation through dedicated research and
              development. My expertise lies in{" "}
              <span className=" text-portfolio-lightest font-semibold">
                full stack development
              </span>{" "}
              and backend technologies like Firebase and NodeJS, enabling me to
              build robust, user-friendly applications. <br></br>
              <br></br>
              Beyond development, I explore{" "}
              <span className=" text-portfolio-lightest font-semibold">
                deep learning
              </span>{" "}
              projects, working on cutting-edge technologies like depth
              estimation, neural receivers, and creating AI-driven applications
              such as a ChatGPT-inspired tool for wireless knowledge Q&A. This
              fusion of development and AI keeps me at the forefront of
              technological advancements.<br></br>
              <br></br>I hold a B. Tech in Electrical Engineering from{" "}
              <span className="hover:cursor-pointer hover:underline text-portfolio-lightest font-semibold">
                <a href="https://outr.ac.in/" target="_blank">
                  Odisha University of Technology and Research
                </a>
              </span>
              , graduating in 2023. My academic foundation equips me with strong
              problem-solving and technical skills, which I continually apply in
              my professional journey.
              <br></br>
              <br></br>
            </motion.div>

            {/* Experience */}
            <div id="experience" className="  mb-24">
              {/* card kind of thing for each experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                className="card hover:bg-white/5 p-2 rounded-sm hover:ring-1 group hover:ring-portfolio-light hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
              >
                <a
                  target="_blank"
                  className="flex items-start "
                  href="https://www.hsc.com/" 
                >
                  <div className="text-portfolio-lightest mt-1 min-w-[150px] text-xs font-bold">
                    AUG 2023 - PRESENT
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex space-x-2">
                      <div className="text-portfolio-lightest font-semibold mb-2">
                        Software Engineer (T0) |{" "}
                        <span className=" text-portfolio-lightest font-semibold">
                          Hughes Systique Corporation{" "}
                        </span>
                      </div>
                      <ExternalLink className="text-slate-50 w-4 h-4 group-hover:translate-x-5 group-hover:-translate-y-2" />
                    </div>
                    <div className="text-sm text-portfolio-lighter">
                      Ideated and developed a RAG solution with 3GPP
                      specifications and the front-end UI for an in-house
                      chatbot application. Specifically, responsible for
                      developing the user interface and backend of the
                      application. Successfully implemented the user interface,
                      which is utilized by more than 100 employees.
                      Additionally, and won the bronze medal in a global ITU
                      Competition for the RAG solution.
                    </div>
                  </div>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.02 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                }}
                className="card hover:bg-white/5 p-2 hover:ring-1 hover:ring-portfolio-light group rounded-sm  hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
              >
                <a
                  target="_blank"
                  className="flex items-start "
                  href="https://www.hsc.com/"
                >
                  <div className="text-portfolio-lightest mt-1   min-w-[150px]  text-xs font-bold">
                    JAN 2023 - AUG 2023
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex space-x-2">
                      <div className="text-portfolio-lightest font-semibold mb-2">
                        Software Engineer Trainee |{" "}
                        <span className="text-portfolio-lightest font-semibold">
                          Hughes Systique Corporation{" "}
                        </span>
                      </div>
                      <ExternalLink className="text-slate-50 w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2" />{" "}
                    </div>
                    <div className="text-sm text-portfolio-lighter">
                      Designed a dynamic web interface using Streamlit to
                      visualize the constellation diagram and real-time plotting
                      of bit error rate with varying channel conditions and SNR
                      values using a neural receiver model.
                    </div>
                  </div>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.02 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2 },
                }}
                className="card hover:bg-white/5 p-2 hover:ring-1 hover:ring-portfolio-light group rounded-sm hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
              >
                <a
                  target="_blank"
                  className="flex items-start "
                  href="https://www.learnemp.in/"
                >
                  <div className="text-portfolio-lightest mt-1   min-w-[150px]  text-xs font-bold">
                    JAN 2022 - APR 2022
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex space-x-2">
                      <div className="text-portfolio-lightest font-semibold mb-2">
                        Game Design and Development Intern |{" "}
                        <span className="text-portfolio-lightest font-semibold">
                          Learn and Empower Private Ltd{" "}
                        </span>
                      </div>
                      <ExternalLink className="text-slate-50 w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2" />{" "}
                    </div>
                    <div className="text-sm text-portfolio-lighter">
                      Worked on game design, development and logic requirements
                      of sub levels in Resonate Learning App using Unity using
                      C#. Ensured the best possible performance, quality, and
                      responsiveness of the game.
                    </div>
                  </div>
                </a>
              </motion.div>
              <br></br>
            </div>

            {/* Projects */}
            <div id="project">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.03 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                }}
                className={
                  "card bg-white/5 p-2 ring-1 ring-portfolio-light group rounded-sm shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
                }
              >
                <div className="flex flex-col justify-center">
                  <div className="flex  justify-between">
                    <div className="text-portfolio-lightest font-semibold mb-2">
                      TaskWeave: Organization Management and Productivity App
                    </div>
                    <div className="flex items-center space-x-5">
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        href="https://github.com/OmPrakashSahoo416/Productivity-Full-Stack"
                      >
                        <Github className="text-slate-50"></Github>
                      </motion.a>
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        target="_blank"
                        className="flex items-start "
                        href="https://productivity-full-stack.vercel.app/"
                      >
                        <ExternalLink className="text-slate-50"></ExternalLink>
                      </motion.a>
                    </div>
                  </div>
                  <img
                    className="rounded-md my-3"
                    src="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/taskweave.png?alt=media&token=6c898879-e267-4cf8-95fa-3f7c37a96562"
                    alt=""
                  />
                  <div className="text-sm text-portfolio-lighter">
                    Developed TaskWeave, an organization management app with
                    features like board management, drag-and-drop lists, and
                    robust authentication. Implemented using Next.js for the
                    full stack development, integrated Clerk for authentication,
                    utilized Vercel PostgreSQL for the database, and deployed
                    the app on Vercel. App streamlined team productivity and
                    enhanced project management with customizable and
                    user-friendly features, accessible online offering seamless
                    collaboration.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.04 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                }}
                className={
                  "card bg-white/5 p-2 ring-1 ring-portfolio-light group rounded-sm shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
                }
              >
                <div className="flex flex-col justify-center">
                  <div className="flex  justify-between">
                    <div className="text-portfolio-lightest font-semibold mb-2">
                      CollabCode: Real-Time Multi-User Code Collaboration
                      Platform
                    </div>
                    <div className="flex items-center space-x-5">
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        href="https://github.com/OmPrakashSahoo416/code-editor"
                      >
                        <Github className="text-slate-50"></Github>
                      </motion.a>
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        target="_blank"
                        className="flex items-start "
                        href="https://code-editor-cfd80.web.app/"
                      >
                        <ExternalLink className="text-slate-50"></ExternalLink>
                      </motion.a>
                    </div>
                  </div>
                  <img
                    className="rounded-md my-3"
                    src="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/collabcode.png?alt=media&token=d546044e-1b2c-42bb-83e6-f0d50509f755"
                    alt=""
                  />
                  <div className="text-sm text-portfolio-lighter">
                    Developed CollabCode, that enables real-time multi-user
                    editing in dedicated rooms, facilitating seamless remote
                    collaboration. Engineered using React for the frontend,
                    Express.js for the backend, and integrated Socket.io for
                    real-time updates. Utilized Google Firebase for database
                    management and a custom REST API for room management. App
                    allows streamlined collaborative coding by allowing teams to
                    work on the same file simultaneously, enhancing efficiency
                    in remote environments.
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.1 },
                }}
                className={
                  "card bg-white/5 p-2 ring-1 ring-portfolio-light group rounded-sm shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10"
                }
              >
                <div className="flex flex-col justify-center">
                  <div className="flex  justify-between">
                    <div className="text-portfolio-lightest font-semibold mb-2">
                      PureNote: Comprehensive Notes Management Web Application
                    </div>
                    <div className="flex items-center space-x-5">
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        href="https://github.com/OmPrakashSahoo416/PureNotes"
                      >
                        <Github className="text-slate-50"></Github>
                      </motion.a>
                      <motion.a
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                        target="_blank"
                        className="flex items-start "
                        href="https://notes-app-185ca.web.app/"
                      >
                        <ExternalLink className="text-slate-50"></ExternalLink>
                      </motion.a>
                    </div>
                  </div>
                  <img
                    className="rounded-md my-3"
                    src="https://firebasestorage.googleapis.com/v0/b/notes-app-185ca.appspot.com/o/purenotes.png?alt=media&token=5b0470b7-5361-483b-8bdd-b530d6c0dccd"
                    alt=""
                  />
                  <div className="text-sm text-portfolio-lighter">
                    Developed Pure Note, a comprehensive notes management web
                    application with features like note creation, reminders,
                    canvas drawing, file storage, and focus timers. Built using
                    React, Redux, and Firebase, with additional tools like
                    Framer Motion for animations and Tailwind CSS for responsive
                    design. Implemented user authentication via Google and
                    integrated a focus time leader board. Successfully deployed
                    Pure Note, providing users with a versatile and interactive
                    platform for managing their tasks and notes.
                  </div>
                </div>
              </motion.div>

              <motion.button
                whileTap={{ scale: 0.8 }}
                className="p-3 rounded-md hover:bg-portfolio-lightest hover:text-portfolio-bg border-2 border-portfolio-lightest mb-32 text-portfolio-lightest"
                onClick={() =>
                  (window.location.href = "mailto:omprakashsahoo1234@gmail.com")
                }
              >{`Let's connect`}</motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
