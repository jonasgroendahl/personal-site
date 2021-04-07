import { Chip } from "@material-ui/core";
import { Android, Apple, Apps, Language } from "@material-ui/icons";
import React from "react";

type Props = {
  label: string;
};

const getProps = (label: string) => {
  switch (label) {
    case "iOS":
      return {
        sx: {
          backgroundColor: "white",
          color: "black",
          border: "solid 1px #eee",
        },
        icon: <Apple />,
      };
    case "Android":
      return {
        icon: <Android />,
        sx: {
          backgroundColor: "#66bb6a",
        },
      };
    case "Web":
      return {
        icon: <Language />,
        sx: {
          backgroundColor: "#b2ebf2",
        },
      };
    case "Web App":
      return {
        icon: <Apps />,
        sx: {
          backgroundColor: "#ffb74dbd",
        },
      };
    default:
      return {
        sx: {
          backgroundColor: "#ffb74d",
        },
      };
  }
};

const MmmChip: React.FC<Props> = ({ label }) => {
  const props = getProps(label);

  return (
    <Chip
      label={label}
      size="small"
      icon={props.icon}
      sx={{
        backgroundColor: props.sx.backgroundColor,
        border: props.sx.border,
        color: props.sx.color,
      }}
    />
  );
};

export default MmmChip;
