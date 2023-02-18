import React from "react";

// Atoms Components Props

export interface TextProps {
  children: React.ReactNode;
  [x: string]: any;
}

export interface SkeletonProps {
  variant: "text" | "rectangular" | "rounded" | "circular" | undefined;
  width: number;
  height: number;
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

export interface WeekWeatherItemProps {
  loading: boolean;
}

export interface SearchItemProps {
  text: string;
}

export interface TodayWeatherInfoProps {
  loading: boolean;
  data: any;
}

export interface SearchFormProps {
  setSearching: Function;
  setCities: Function;
  setLoading: Function;
}

export interface CommonHighlightItemProps {
  title: string;
  value: string;
  unit: string;
  loading: boolean;
}
export interface HumidityProps {
  loading: boolean;
  data: any;
}
export interface WindStatusProps {
  loading: boolean;
  data: any;
}

// Organisms Components Props

export interface MenuWeatherInfoProps {
  setSearching: Function;
  loading: boolean;
  data: any;
}

export interface TodayHighlightsProps {
  loading: boolean;
  data: any;
}

export interface WeekWeatherProps {
  loading: boolean;
}

export interface MenuSearchPlaceProps {
  setSearching: Function;
}

// Templates Components Props

export interface MenuProps {
  loading: boolean;
  data: any;
}

export interface MainContextProps {
  loading: boolean;
  todayData: any;
}

// Data Model

// Helpers

export interface WorldCity {
  city_id: string;
  city_name: string;
  country_code: string;
  country_full: string;
}
