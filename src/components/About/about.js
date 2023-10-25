const About = () => {
  return (
    <div class="w-full bg-[#212121] px-2 lg:px-6 py-12" id="about">
      <div class="w-full lg:w-4/5 mx-auto h-[auto]">
        <div class="flex justify-between flex-col lg:flex-row ">
          <div class="w-full lg:w-6/12 h-[200px]">
            <h2 class="text-[#70ff00] text-2xl lg:text-3xl font-medium">
              aboutMe<span className="text-white text-md">( )</span>
            </h2>
            <div class="text-white mt-5 text-md lg:text-lg">
              <p>
                I'm a Sai chandu looking for a opportunity as a front-end
                developer to prove myself as an intern & continue to be a full
                time employee.
              </p>
            </div>
          </div>
          <div class="w-full lg:w-4/12 h-[200px]">
            <div class="w-full h-[80px] bg-[#4f4f4f] p-5 rounded-md shadow-xl">
              <div class="flex justify-between">
                <p class="text-white text-lg font-[BioRhyme]">
                  Front End developer{" "}
                </p>
                <i class="fa fa-code text-[#70ff00] text-xl"></i>
              </div>
              <a
                href="#projects"
                class="text-[#69d510] tracking-widest text-sm underline underline-offset-1 font-[BioRhyme]"
              >
                Projects
              </a>
            </div>
            <div class="w-full h-[80px] bg-[#4f4f4f] p-5 mt-3 rounded-md shadow-xl">
              <div class="flex justify-between ">
                <p class="text-white text-lg font-serif">Web developer </p>
                <i class="fa fa-globe text-[#70ff00] text-xl"></i>
              </div>
              <a
                href="https://www.linkedin.com/in/chandu-dsc-385086236/"
                target="__blank"
                class="text-[#69d510] text-sm tracking-widest underline underline-offset-1 font-[BioRhyme]"
              >
                Hire me!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
