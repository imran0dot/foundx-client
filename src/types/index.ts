import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TPostCard {
  images: string;
  title: string;
  location: string;
  dateFound: Date;
}
