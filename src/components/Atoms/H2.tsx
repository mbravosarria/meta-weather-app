import React from "react";
import { TextProps } from "@/interfaces/interfaces";

function H2({ children, ...rest }: TextProps) {
  return <h2 {...rest}>{children}</h2>;
}

export default H2;
