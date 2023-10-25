import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { useNavigate } from "react-dom";

import { useRef } from "react";
const ProjectSlider = () => {
  const projects = [
    {
      title: "HotStar-Clone",
      backgroundImg: "./img/hotstar.png",
      link: "https://chandu0077.github.io/Hotstar-Clone/",
    },
    {
      title: "Joke-Teller",
      backgroundImg: "/img/Joke-Teller.png",
      link: "https://chandu0077.github.io/Joke-Teller/",
    },
    {
      title: "Whatsapp",
      backgroundImg: "/img/Whatsapp.png",
      link: "https://chandu0077.github.io/whatsapp/",
    },
    {
      title: "Pizza Restaurant",
      backgroundImg: "/img/Pizza-template.png",
      link: "https://chandu0077.github.io/Pizza-Restaurant-Template/",
    },
    {
      title: "Music Band",
      backgroundImg: "/img/band.png",
      link: "https://chandu0077.github.io/band/",
    },
    {
      title: "Quote Generator",
      backgroundImg: "/img/quote.png",
      link: "https://chandu0077.github.io/quote-generator/",
    },
  ];

  var settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const sliderRef = useRef();
  //   const navigate = useNavigate();
  function projectClickHandler(l) {
    window.open(l);
  }
  return (
    <div className="mt-14" id="popularMovies">
      <div className="h-40 xl:h-64">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative p-1 mx-5 rounded-lg hover:bg-[#70ff00]"
            >
              <div
                onClick={() => projectClickHandler(project.link)}
                className="relative h-32 xl:h-60 cursor-pointer "
                style={{
                  backgroundImage: `url(${project.backgroundImg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <a href={project.link} target="__blank"></a>
                <div className="absolute w-full bottom-0 left-0 p-5 bg-zinc-400 opacity-80 text-white h-14 lg:h-auto">
                  <h2 className="text-white text-md xl:text-2xl">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ProjectSlider;
