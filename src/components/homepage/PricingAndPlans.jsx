import React from "react";
import Title from "../ui/buttons/Title";
import HeadText from "../ui/headings/HeadText";

const PricingAndPlans = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col">
        <div className="flex flex-col pt-52 pb-20 px-10">
          <Title text={"Pricing and plans 💰"} />
          <HeadText text={"Find the best plan for your needs"} />
        </div>
        {/* faq question and answers */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default PricingAndPlans;
