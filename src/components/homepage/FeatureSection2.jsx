import React from "react";
import Title from "../ui/buttons/Title";
import SmallHead from "../ui/headings/SmallHead";
import ParaText from "../ui/headings/ParaText";
import helloImg from "../../assets/photos/f2.png";
import StatImg from "../../assets/photos/image2.png";

const FeatureSection2 = () => {
  return (
    <div className="flex items-center justify-center w-[1200px] gap-5">
      <div className="flex justify-center items-center">
        <div className="">
          <img src={StatImg} alt="stati image" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-8  ">
        <Title text={"Seamless Scheduling"} bgClr="#cceafd" />
        <SmallHead text={"Focus on what matters most for you"} />
        <ParaText
          text={
            "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks."
          }
        />

        <div className="flex justify-end w-full ">
          <div className="flex gap-3 pt-14 w-20">
            <img src={helloImg} alt="hello image" />
          </div>
          <div className="flex flex-col items-start p-4 bg-mine-shaft  gap-3 h-min w-min rounded-tl-lg rounded-r-lg text-left ">
            <p className="flex items-start w-80 flex-wrap font-bold leading-6 text-soapstone">
              I've tried a lot of calendar apps, but this one is by far the
              best! It's so intuitive and customizable, and it has all the
              features I need.
            </p>

            <p className="font-semibold text-boulder leading-4 text-left">
              Annie, Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;
