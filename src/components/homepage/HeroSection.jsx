import React from "react";
import Title from "../../components/ui/buttons/Title";
import CtaBtn from "../../components/ui/buttons/CtaBtn";
import p1 from "../../assets/photos/p1.png";
import p2 from "../../assets/photos/p2.png";
import p3 from "../../assets/photos/p3.png";
import p4 from "../../assets/photos/p4.png";
import p5 from "../../assets/photos/p5.png";
import HeroImage from "../../assets/photos/image1.png";

const HeroSection = () => {
  return (
    <section className="bg-soapstone">
      <div className="flex flex-col pt-20 gap-20 ">
        <div className="flex justify-center content-center flex-col">
          <Title text="An other way to manage time️" />
          <div className="flex flex-col justify-center gap-8 content-center">
            <p className="text-[80px] font-extrabold text-mine-shaft leading-[80px]">
              Your new favorite <br /> calendar 🗓️ app
            </p>
            <p className="text-xl font-medium text-slate leading-8 text-center">
              Here you should explain how cool your app is. Remember,
              <br /> focus on the benefits for your users, not on the features.{" "}
            </p>
            <div className="flex justify-center content-center flex-col gap-2">
              <CtaBtn text="Get started, it's free" />
              <p className="text-xs font-medium text-slate">
                Free 14 days trials,no credit card needed
              </p>
            </div>
            <div className="flex justify-center content-center">
              <div className="flex gap-3 w-fit">
                {/* icons */}
                <div className="flex -space-x-[14px] overflow-hidden">
                  <img src={p1} alt="p1" />
                  <img src={p2} alt="p2" />
                  <img src={p3} alt="p3" />
                  <img src={p4} alt="p4" />
                  <img src={p5} alt="p5" />
                </div>
                {/* ratings */}
                <div className="flex flex-col space-y-0.5 justify-center">
                  {/* upper */}
                  <div className="flex items-end gap-1.5 -ml-0.5">
                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-[#fec84b]"
                      >
                        <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-[#fec84b]"
                      >
                        <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-[#fec84b]"
                      >
                        <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-[#fec84b]"
                      >
                        <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-[#fec84b]"
                      >
                        <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                      </svg>
                    </div>
                    <p className="text-base font-semibold leading-4 text-[#101828]">
                      5.0
                    </p>
                  </div>
                  {/* lower */}

                  <p className="text-sm font-medium whitespace-nowrap text-subsd">
                    From 200+ happy users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero photo section */}
        <div className="flex justify-center content-center box-border ">
          <div className="rounded-2xl w-[1200px] border border-solid border-[#dfdede] shadow-md">
            <img
              src={HeroImage}
              alt="Homepage of saas"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
