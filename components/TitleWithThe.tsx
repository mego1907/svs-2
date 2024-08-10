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
  return (
    <div className="relative flex">
      <p
        className={classNames(
          `md:text-5xl text-2xl font-bold text-white translate-x-5 -rotate-90 ${theClassName}`
        )}
      >
        the
      </p>
      <h5
        className={classNames(
          `md:text-8xl text-5xl font-bold text-[#FFBD59] ${titleClassName}`
        )}
      >
        {title}
      </h5>
    </div>
  );
};

export default TitleWithThe;
