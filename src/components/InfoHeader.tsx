import React from "react";
import { InfosHeader } from "../domain/infoheader/infoheader";

export const InfoHeader = (props: InfosHeader) => {
  return (
    <>
      <h3>There are {props.numberOfBooks} books on the page</h3>
      <h3>The minimum number of pages is {props.minimumPages}</h3>
      <h3>The maximum number of pages is {props.maximumPages}</h3>
      <h3>The max price is {props.maxPrice}</h3>
      <h3>The min price is {props.minPrice}</h3>
    </>
  );
};
