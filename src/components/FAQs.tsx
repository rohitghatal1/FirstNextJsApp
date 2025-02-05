import { Collapse, CollapseProps } from "antd";
import FAQImg from "../../public/assets/images/FAQs.png";
import Image from "next/image";

const FAQs: React.FC = () => {
  const frequentQuestions: CollapseProps["items"] = [
    {
      key: "1",
      label: "How will I manage my business with you",
      children: (
        <p>
          You can create an professiona account to connect with us or contact us
          using details provided
        </p>
      ),
    },
    {
      key: "2",
      label: "Is it safe to hire MSME from this website?",
      children: (
        <p>
          Yes it is Totally safe as we garantee for genuine MSME and their work
        </p>
      ),
    },
    {
      key: "3",
      label: "Who will be responsibe if I get frauded",
      children: (
        <p>
          As we provide you the guanratee for best MSMEs we will be responsible
          any type of fraud
        </p>
      ),
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-8 mb-4">
      <h2 className="font-semibold text-green-600 py-4 text-center text-2xl sm:text-3xl">
        Frequently Asked Questions
      </h2>

      <div className="block sm:flex gap-4">
        <div className="flex items-center justify-center p-1 sm:p-4 w-full sm:w-[60%]">
          <Collapse
            accordion
            items={frequentQuestions}
            className="w-[50rem] h-auto"
          />
        </div>

        <div className="w-[40%] hidden sm:block">
          <Image src={FAQImg} alt="FaQ image" className="w-[32rem] h-[28rem]" />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
