import classNames from "classnames";
import React from "react";

type TitleWithTheProps = {
  title: string | React.ReactNode;
  theClassName?: string;
  titleClassName?: string;
};

const TitleWithThe = ({
  title,
  theClassName,
  titleClassName,
}: TitleWithTheProps) => {
  const defaultTheClassName =
    "-:md:text-5xl -:text-2xl -:font-bold -:text-white -:translate-x-5 -:-rotate-90";
  const defaultTitleClassName =
    "-:md:text-8xl -:text-5xl -:font-bold -:text-[#FFBD59]";

  return (
    <div className="relative flex">
      <p className={`${defaultTheClassName} ${theClassName}`}>the</p>
      <h5 className={`${defaultTitleClassName} ${titleClassName}`}>{title}</h5>
    </div>
  );
};

export default TitleWithThe;
