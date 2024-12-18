import React from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (!sort) return up;
  if (sort === up) return down;
  if (sort === down) return "";
  return down; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  // const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span
      id={id + "-sort-" + value}
      onClick={onChangeCallback}
      style={{ display: "flex", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BiChevronUp
          style={{
            opacity: sort === up ? 1 : 0.5,
            color: sort === up ? "blue" : "inherit",
            transition: "all 0.3s ease",
          }}
        />
        <BiChevronDown
          style={{
            opacity: sort === down ? 1 : 0.5,
            color: sort === down ? "blue" : "inherit",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </span>
  );
};

export default SuperSort;
