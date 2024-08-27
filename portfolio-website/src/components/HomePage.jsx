function HomePage() {
  return (
    <>
      <div className="w-screen px-36 pt-24 h-screen bg-portfolio-bg font-['Roboto']">
        <div className="w-full h-full flex justify-start">
          {/* Left half introduction */}
          <div className="w-1/2">
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
          <div className="w-1/2">
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
              Let’s connect and discuss anything about technology!
            </div>

            {/* Experience */}
            <div className="">
              {/* card kind of thing for each experience */}
              <div className="flex items-start space-x-16">
                <div className="text-portfolio-lighter mt-1 text-xs font-bold">2023 - PRESENT</div>
                <div>
                  <div className="text-portfolio-lightest">Software Engineer (T0) | <span className="hover:cursor-pointer hover:underline text-portfolio-lightest font-semibold"><a href="https://www.hsc.com/">Hughes Systique Corporation</a> </span></div>
                </div>
              </div>


            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
