import React from "react";
import { AppComponents } from "../ComponentsRepos/AppComponents";


// make this in other files

export const Makeblock = (block: any) => {
  console.log("block log :", JSON.stringify(block));

  if (typeof AppComponents[block.component] !== "undefined") {
    return React.createElement(AppComponents[block.component], {
      key: block.id,
      this: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.id }
  );
};
