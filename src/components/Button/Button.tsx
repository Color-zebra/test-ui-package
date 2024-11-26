import { FC } from "react";

import "./button.css";

type Props = {
  text: string;
};

export const Button: FC<Props> = ({ text }) => {
  return <button className="">{text}</button>;
};
