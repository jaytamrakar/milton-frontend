import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";

const FAQ = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pt-52 pb-20 px-10">
        <Title text={"Relevant stuff, bla bla 📣"} />
        <HeadText text={"Frequently asked questions"} />
      </div>
      {/* faq question and answers */}
      <div className=""></div>
    </div>
  );
};

export default FAQ;
