const HeroAbout = ({ globalColor }) => {
  return (
    <div className="flex lg:w-4/5 lg:mx-auto mt-2 lg:mt-12">
      <div className="w-4/5 mx-auto lg:mx-0 lg:w-6/12 flex flex-col justify-start mt-4 lg:mt-0 lg:justify-center items-start h-[300px] lg:h-[450px]">
        <h2 class="text-white text-xl font-semibold ">Hello, i am</h2>
        <p class="mt-5 font-bold">
          <p
            class={`text-[#70ff00] text-3xl lg:text-4xl tracking-widest`}
            style={{
              color: `oklch(0.75 0.14 ${globalColor})`,
            }}
          >
            {" "}
            <i
              class={`fa fa-angle-left text-[${globalColor}] text-3xl lg:text-4xl`}
              style={{
                color: `oklch(0.75 0.14 ${globalColor})`,
              }}
            ></i>
            {" Sai  "}{" "}
          </p>
          <p
            class={`mt-4 text-[${globalColor}] text-3xl lg:text-4xl tracking-widest`}
            style={{
              color: `oklch(0.75 0.14 ${globalColor})`,
            }}
          >
            {"Chandu /"}
            <i
              class={`fa fa-angle-right text-[${globalColor}] text-3xl lg:text-4xl`}
              style={{
                color: `oklch(0.75 0.14 ${globalColor})`,
              }}
            ></i>{" "}
          </p>
        </p>

        <h2 class="text-2xl lg:text-3xl text-white mt-8 font-bold">
          Web Developer
        </h2>
        <div class="w-full flex flex-row lg:flex-row mt-8">
          <p class="text-[#4f4f4f] text-sm lg:text-sm mr-4">5+ PROJECTS</p>
          <p class="text-[#4f4f4f] text-sm lg:text-sm mr-4">SELF TAUGHT DEV</p>
        </div>
      </div>
    </div>
  );
};
export default HeroAbout;
