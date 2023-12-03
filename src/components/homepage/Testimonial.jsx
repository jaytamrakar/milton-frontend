import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";

const Testimonial = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col">
        <div className="flex flex-col pt-52 pb-20 px-10">
          <Title text={"They already love our products 😍"} />
          <HeadText text={"See what our users say about us"} />
        </div>
        {/* faq question and answers */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Testimonial;
