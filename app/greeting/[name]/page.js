import React from "react";

const page = ({ params }) => {
  return <h1>Very pleased to meet you, {params.name}!</h1>;
};

export default page;