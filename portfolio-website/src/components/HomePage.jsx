function HomePage() {
  return (
    <>
      <div className=" px-36 pt-24 min-h-screen h-fit bg-portfolio-bg font-['Roboto']">
        <div className="w-full h-full justify-start flex">
          {/* Left half introduction */}
          <div className="w-1/2 fixed">
            {/* name */}
            <div className="text-portfolio-lightest text-5xl mb-3 flex flex-col space-y-3 font-black">
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

            {/* navigations */}
            <div className=" flex flex-col space-y-3">

              {/* about */}

              {/* experience */}

              {/* project */}

              {/* contact */}

              {/* get resume */}

            </div>
          </div>

          {/* right half */}
          <div className="w-1/2 ml-[50%]">
            {/* about description */}
            <div className="text-portfolio-lighter mb-24">
              With over a year of experience, I currently contribute to the
              Center of Excellence (CoE) team at <span className="hover:cursor-pointer hover:underline text-portfolio-lightest font-semibold"><a href="https://www.hsc.com/">Hughes Systique Corporation</a> </span>,
              where we drive innovation through dedicated research and
              development. My expertise lies in <span className=" text-portfolio-lightest font-semibold">full stack development</span> and
              backend technologies like Firebase and NodeJS, enabling me to
              build robust, user-friendly applications. <br></br>
              <br></br>
              Beyond development, I explore <span className=" text-portfolio-lightest font-semibold">deep learning</span> projects, working on
              cutting-edge technologies like depth estimation, neural receivers,
              and creating AI-driven applications such as a ChatGPT-inspired
              tool for wireless knowledge Q&A. This fusion of development and AI
              keeps me at the forefront of technological advancements.<br></br>
              <br></br>I hold a B. Tech in Electrical Engineering from <span className=" text-portfolio-lightest font-semibold">Odisha
              University of Technology and Research</span>, graduating in
              2023. My academic foundation equips me with strong problem-solving
              and technical skills, which I continually apply in my professional
              journey.
              <br></br>
              <br></br>
              
            </div>

            {/* Experience */}
            <div className="  ">
              {/* card kind of thing for each experience */}
              <div className="card hover:bg-white/5 p-2 rounded-sm hover:ring-1 hover:ring-portfolio-light hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10">
              <a target="_blank" className="flex items-start " href="https://www.hsc.com/">
                <div className="text-portfolio-lightest mt-1 min-w-[150px] text-xs font-bold">AUG 2023 - PRESENT</div>
                <div>
                  <div className="text-portfolio-lightest font-semibold mb-2">Software Engineer (T0) | <span className=" text-portfolio-lightest font-semibold">Hughes Systique Corporation </span></div>
                  <div className="text-sm text-portfolio-lighter">
                  Ideated and developed a RAG solution with 3GPP specifications and the front-end UI for an in-house chatbot application. Specifically, responsible for developing the user interface and backend of the application. Successfully implemented the user interface, which is utilized by more than 100 employees. Additionally, and won the bronze medal in a global ITU Competition for the RAG solution.

                  </div>
                </div>
                </a>
              </div>
              <div className="card hover:bg-white/5 p-2 hover:ring-1 hover:ring-portfolio-light rounded-sm  hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10">
              <a target="_blank" className="flex items-start " href="https://www.hsc.com/">
                <div className="text-portfolio-lightest mt-1   min-w-[150px]  text-xs font-bold">JAN 2023 - AUG 2023</div>
                <div>
                  <div className="text-portfolio-lightest font-semibold mb-2">Software Engineer Trainee | <span className="text-portfolio-lightest font-semibold">Hughes Systique Corporation </span></div>
                  <div className="text-sm text-portfolio-lighter">
                  Designed a dynamic web interface using Streamlit to visualize the constellation diagram and real-time plotting of bit error rate with varying channel conditions and SNR values using a neural receiver model.

                  </div>
                </div>
                </a>
              </div>
              <div className="card hover:bg-white/5 p-2 hover:ring-1 hover:ring-portfolio-light rounded-sm hover:shadow-[2px_8px_20px_rgba(255,255,255,0.02)] mb-10">
              <a target="_blank" className="flex items-start " href="https://www.learnemp.in/">
                <div className="text-portfolio-lightest mt-1   min-w-[150px]  text-xs font-bold">JAN 2022 - APR 2022</div>
                <div>
                  <div className="text-portfolio-lightest font-semibold mb-2">Game Design and Development Intern | <span className="text-portfolio-lightest font-semibold">Learn and Empower Private Ltd </span></div>
                  <div className="text-sm text-portfolio-lighter">
                  Worked on game design, development and logic requirements of sub levels in Resonate Learning App using Unity using C#. Ensured the best possible performance, quality, and responsiveness of the game.

                  </div>
                </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
