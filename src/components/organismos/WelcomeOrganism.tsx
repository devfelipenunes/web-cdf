import { home } from "../../constants/Home";
import { BackgroundImageAtom } from "../atomos/BackgroundImageAtom";
import { WelcomeMolecule } from "../moleculas/WelcomeMolecule";

type Props = {
  data?: any;
};

export function WelcomeOrganism({ data }: Props) {
  console.log("to aqui ", data);
  return (
    <>
      <BackgroundImageAtom
        image={data?.data?.paulo?.home?.image}
        className={`h-128 sm:max-w-7xl`}
      >
        <WelcomeMolecule data={data} className="w-full" />
      </BackgroundImageAtom>
    </>
  );
}
