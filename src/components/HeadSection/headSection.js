import HeroAbout from "../HeroAbout/heroAbout";
import ImageAbout from "../ImageAbout/imageAbout";

const headSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full lg:w-4/5 mx-auto mt-24 lg:mt-12 ">
      <HeroAbout />
      <ImageAbout />
    </div>
  );
};
export default headSection;
