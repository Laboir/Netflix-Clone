/* eslint-disable react/prop-types */
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "./TitleCards";
import Header from "../Header/Header";

export default function Hero() {
  return (
    <div className="  ">
      <Header />
      <Banner />

      <div className="hero-main-child mt-[230px]  ml-44  flex relative flex-col  justify-between gap-y-12">
        <BannerTitle />
        <Description />
        <div className="flex gap-x-6">
          <Button
            button={play_icon}
            text="Play"
            bgColor="#D1D5DB"
            color="#000"
          />
          <Button
            button={info_icon}
            text={"More info"}
            bgColor={"rgba(75, 85, 99, 0.8)"}
            color={"#fff"}
          />
        </div>
      </div>

      <div className="more-cards  mb-16">
        <TitleCards titleHeading=" Blockbuster of Netflix" />
        <TitleCards
          titleHeading="Top Rated Movies on Netflix"
          category={"top_rated"}
        />
        <TitleCards titleHeading="Popular Movies" category={"popular"} />

        <TitleCards titleHeading=" Upcoming of Netflix" category={"upcoming"} />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className=" absolute top-0 left-0 banner w-full ">
      <img className="w-full" src={hero_banner} alt="" />
    </div>
  );
}

function BannerTitle() {
  return (
    <div className=" flex flex-col w-[1100px] justify-end    items-start gap-y-10  ">
      <div className="w-[500px]">
        <img className="w-full" src={hero_title} alt="" />
      </div>
    </div>
  );
}

function Description() {
  return (
    <p className="text-2xl w-[600px]   leading-10 ">
      {" "}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ea iste
      eaque itaque natus distinctio id molestias commodi, est atque aspernatur
    </p>
  );
}

function Button({ button, text, bgColor, color }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="  rounded-md cursor-pointer flex gap-4 items-center px-4 py-1  text-3xl  w-fit"
    >
      <a href="">
        <img className="w-12" src={button} alt="" />
      </a>

      <span style={{ color: color }} className="text-3xl">
        {text}{" "}
      </span>
    </div>
  );
}
