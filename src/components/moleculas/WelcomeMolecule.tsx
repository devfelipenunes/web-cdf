import { TextAtom } from "../atomos/TextAtom";
import { VideoAtom } from "../atomos/VideoAtom";

import { CardMolecule } from "../moleculas/CardMolecule";

import { SlideShowWelcomeAtom } from "../atomos/SlideShowWelcomeAtom";
import { Link } from "react-router-dom";
import { TbPig } from "react-icons/tb";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineMonetizationOn } from "react-icons/md";

type Props = {
  className: string;
  data: any;
};

export function WelcomeMolecule({ className, data }: Props) {
  const cards = [
    {
      id: 1,
      icon: TbPig,
      content: data?.data?.paulo?.text_square?.text_1,
    },
    {
      id: 2,
      icon: HiOutlineBadgeCheck,
      content: data?.data?.paulo?.text_square?.text_2,
    },
    {
      id: 3,
      icon: FaRegComments,
      content: data?.data?.paulo?.text_square?.text_3,
    },
    {
      id: 4,
      icon: MdOutlineMonetizationOn,
      content: data?.data?.paulo?.text_square?.text_4,
    },
  ];

  return (
    <div className={`${className}`}>
      <div className="sm:pt-36 pt-24 flex flex-col sm:flex-row sm:h-80 h-full justify-center">
        <div className="flex flex-col sm:mr-24 items-center sm:items-start sm:text-start justify-between sm:w-108 w-full px-10 sm:px-0">
          <TextAtom
            children
            text={data?.data?.paulo?.home?.title}
            className="mb-4 sm:mb-4 font-medium text-white sm:text-5xl text-2xl"
          />

          <TextAtom
            children
            text={data?.data?.paulo?.home?.content}
            className="mb-4 sm:my-4 font-medium text-white text-sm"
          />

          {/* <Link
            className="flex hidden text-white font-bold rounded-xl items-center mb-10 sm:mb-0 mt-6 sm:mt-0 justify-center w-48 bg-[#F20F0F]"
            to="/sobre"
          >
            Ler Mais
          </Link> */}
        </div>
        <VideoAtom
          className="rounded-xl flex items-center justify-center sm:w-108 w-[80%] h-64 sm:h-80 mx-auto sm:mx-0"
          videoLink={data?.data?.paulo?.home?.video}
          videoImage={data?.data?.paulo?.home?.image_video}
        />
        <div className="flex sm:hidden justify-center mt-[20px]">
          {/* <Link
            className="text-white font-bold rounded-xl mb-10 sm:mb-0 mt-6 sm:mt-0 justify-center w-[222px] h-[53px] flex items-center bg-[#F20F0F]"
            to="/sobre"
          >
            <p className="text-[20px]">Ler Mais</p>
          </Link> */}
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center justify-center mt-16 sm:mt-80">
        {cards?.map((element, index) => (
          <CardMolecule
            color="red"
            className="flex justify-center flex-col h-52 rounded-2xl mx-[20px] bg-white hidden sm:flex block shadow-md w-52 text-black"
            key={index}
            icon={element.icon}
            text={element.content}
          />
        ))}

        <SlideShowWelcomeAtom cards={cards} className="w-full mt-[55px]" />
      </div>
    </div>
  );
}
