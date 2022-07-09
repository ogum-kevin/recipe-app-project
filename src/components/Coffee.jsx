import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Coffee() {
  let params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);
  return (
    <>
      <h1>This is the coffee page</h1>
    </>
  );
}
