import React from "react";
import { TextProps } from "@/interfaces/interfaces";
import { Acme } from "@next/font/google";

function H1({ children, ...rest }: TextProps) {
  return <h1 {...rest}>{children}</h1>;
}

export default H1;
