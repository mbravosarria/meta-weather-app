import React from "react";

// Atoms Components Props

export interface TextProps {
  children: React.ReactNode;
  [x: string]: any;
}

export interface ButtonProps {
  children: React.ReactNode;
  [x: string]: any;
}

export interface ImgProps {
  src: string;
  alt: string;
  [x: string]: any;
}

export interface InputProps {
  type: string;
  [x: string]: any;
}

export interface PercentBarProps {
  percent: number;
}

// Molecules Components Props

export interface SearchPlaceActionsProps {
  setSearching: Function;
}

export interface SearchFormProps {
  setSearching: Function;
}

export interface CommonHighlightItemProps {
  title: string;
  value: string;
  unit: string;
}

// Organisms Components Props

export interface MenuWeatherInfoProps {
  setSearching: Function;
}

export interface MenuSearchPlaceProps {
  setSearching: Function;
}

// Templates Components Props

// Data Model
