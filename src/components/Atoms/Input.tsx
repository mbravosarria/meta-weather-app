import React from "react";
import { InputProps } from "@/interfaces/interfaces";

function Input({ type, ...rest }: InputProps) {
  return <input type={type} {...rest} />;
}

export default Input;
