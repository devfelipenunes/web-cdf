import { TextAtom } from "../atomos/TextAtom";

import Link from "next/link";

type Props = {
  text: string;
  to: string;
  className?: string;
  textClassName?: string;
};

export function TextButtonMolecule({
  text,
  to,
  className,
  textClassName,
}: Props) {
  return (
    <Link
      href={to}
      className={className}
      onClick={() => {
        console.log(to);
        to.includes("#") && window.location.replace(to);
      }}
    >
      <TextAtom children className={textClassName} text={text} />
    </Link>
  );
}
