import { SkeletonProps } from "@/interfaces/interfaces";
import Skeleton from "@mui/material/Skeleton";
import React from "react";

function SkeletonMui({ variant, width, height, ...rest }: SkeletonProps) {
  return <Skeleton variant={variant} width={width} height={height} {...rest} />;
}

export default SkeletonMui;
