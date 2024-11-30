import { FC } from "react";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => {
  return (
    <button
      data-testid="root-button"
      className="bg-orange-700 p-2 text-white font-bold rounded-md"
    >
      {text}
    </button>
  );
};
