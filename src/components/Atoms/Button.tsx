import React from "react";
import { ButtonProps } from "@/interfaces/interfaces";

function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}

export default Button;
