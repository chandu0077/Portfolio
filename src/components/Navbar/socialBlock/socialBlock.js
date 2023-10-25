const Socialblock = ({ type }) => {
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
      class={
        type === "contact"
          ? "border-double border-green-300 border-2 px-3 py-1 rounded-lg"
          : "border-collapse mt-1"
      }
    >
      <i class={`${icon} text-white mr-2`}></i>
      <button type="button" class="text-white font-medium">
        <a
          href={link}
          target="__blank"
          class={type === "contact" ? "text-xs" : "text-lg"}
        >
          {text}
        </a>
      </button>
    </div>
  );
};
export default Socialblock;
