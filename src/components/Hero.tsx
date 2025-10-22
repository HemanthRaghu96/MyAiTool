import { useNavigate } from "react-router-dom";
import groupImage from "../assets/user_group.png";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  relative flex flex-col  justify-center items-center bg-[url(assets\gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      <h1 className="w-[873px] h-[176px] text-[74px] font-semibold text-center">
        Create amazing content with{" "}
        <span className="text-[#5044E5]">AI tools</span>
      </h1>
      <p className="my-10 w-[628px]  text-[16px] text-[#606060] ">
        Transform your content creation with our suite of premium AI tools.
        Write articles, generate images, and enhance your workflow.
      </p>
      <div className="flex justify-around items-center w-[379px]">
        <button
          onClick={() => navigate("/ai")}
          className="flex items-center gap-2 rounded-md text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          start creating now
        </button>
        <button
          // onClick={() => openSignIn()}
          className="flex items-center gap-2 rounded-md text-sm cursor-pointer border  px-10 py-2.5"
        >
          watch demo
        </button>
      </div>
      <div className="flex justify-around items-center mt-5 w-[292px]">
        <img src={groupImage} alt="groupIcon" className=" h-6" />
        <p>Trusted by 10k+ people</p>
      </div>
    </div>
  );
};

export default Hero;
