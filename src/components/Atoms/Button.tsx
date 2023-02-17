import React from "react";
import { ButtonProps } from "@/configurations/interfaces";

function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}

export default Button;
