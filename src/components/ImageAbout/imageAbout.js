const ImageAbout = () => {
  return (
    <div className="lg:w-6/12 h-auto lg:h-[450px] bg-[#131313] flex items-center justify-center ">
      <div class="w-[300px] h-[300px] bg-[#2D2D2D] rounded-full relative shadow-2xl">
        <div className="w-[15px] h-[15px] bg-[#4f4f4f] rounded-full absolute top-12"></div>
        <div className="w-[25px] h-[25px] bg-[#222222] rounded-full absolute top-[-10px] right-0"></div>
        <div className="w-[6px] h-[6px] bg-[#bcbcbc] rounded-full absolute bottom-14 right-[-8px]"></div>
        <div className="w-[75px] h-[75px] bg-[#333333] p-2 rounded-full absolute top-20 left-[-25px]">
          <img src="img/react-logo.png" alt="react" class="text-lg" />
        </div>
        <div className="w-[55px] h-[55px] bg-[#333333] p-1 rounded-full absolute bottom-2 right-[16px]">
          <img src="img/python-logo.png" alt="python" />
        </div>
        <div className="w-[55px] h-[55px] bg-[#333333] p-2 rounded-full absolute top-14 right-[-8px]">
          <img
            src="img/js-logo.png"
            alt="javascript"
            class="rounded-full shadow-2xl "
          />
        </div>
        <img
          src="img/profile-animoji.png"
          class="w-full h-auto border-dashed shadow-lg shadow-grey-500/50"
          alt="profile"
        />
      </div>
    </div>
  );
};
export default ImageAbout;
