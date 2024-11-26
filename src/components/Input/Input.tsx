import { FC } from "react";

type Props = {
  text: string;
};

export const Input: FC<Props> = () => {
  return <input type="text" />;
};
