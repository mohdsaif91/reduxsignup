import React from "react";
const appdata = {
  signup: [
    { name: "jack", id: 112, title: "Khar" },
    { name: "jill", id: 113, title: "Sion" },
    { name: "frost", id: 114, title: "Mahim" },
    { name: "sparow", id: 115, title: "Bandra" }
  ]
};
export const rootReducer = (state = appdata, action) => {
  return state;
};
