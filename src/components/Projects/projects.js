import ProjectSlider from "../ProjectSlider/projectSlider";
const Projects = ({ globalColor }) => {
  return (
    <div>
      <div
        class="bg-[#212121] py-10"
        id="projects"
        style={{
          backgroundColor: `oklch(0.23 0.015 ${globalColor})`,
        }}
      >
        <h2
          class="text-[#70ff00] text-2xl lg:text-3xl font-medium w-4/5 mx-0 lg:mx-auto px-2 lg:px-6"
          style={{
            color: `oklch(0.75 0.14 ${globalColor})`,
          }}
        >
          projects<span className="text-white text-md">( )</span>
        </h2>

        <ProjectSlider globalColor={globalColor} />
      </div>
    </div>
  );
};
export default Projects;
