const Socialblock = ({ type, color }) => {
  let icon, text, link;
  if (type === "linkedin") {
    icon = "fa fa-linkedin";
    text = "Linkedin";
    link = "https://www.linkedin.com/in/chandu-dsc-385086236/";
  } else if (type === "github") {
    icon = "fa fa-github";
    text = "Github";
    link = "https://github.com/chandu0077";
  } else if (type === "contact") {
    icon = "fa fa-envelope";
    text = "Contact me";
    link = "mailto:chandu.dsc77@gmail.com";
  }

  return (
    <div
      className={
        type === "contact"
          ? "border-double border-[#70ff00] border-2 px-3 py-1 rounded-lg"
          : "border-collapse"
      }
      style={{
        borderColor: `oklch(0.75 0.14 ${color})`,
      }}
    >
      <button type="button" class="text-white font-medium">
        <a
          href={link}
          target="__blank"
          className={type === "contact" ? "text-xs" : "text-lg"}
        >
          {type === "contact" ? text : null}{" "}
          <i className={`${icon} text-white mr-2`}></i>
        </a>
      </button>
    </div>
  );
};
export default Socialblock;
