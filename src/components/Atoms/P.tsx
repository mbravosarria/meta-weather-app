import React from "react";
import { TextProps } from "@/interfaces/interfaces";

function P({ children, ...rest }: TextProps) {
  return <p {...rest}>{children}</p>;
}

export default P;
