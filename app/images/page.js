import React from "react";
import hike_w_family from "../../assets/hike_w_family.jpeg";
import Image from "next/image";

const page = () => {
  return (
    <div>
      We will show the image here
      <Image src={hike_w_family} alt="nature" />
      <Image src={hike_w_family} alt="nature" width={500} />
    </div>
  );
};

export default page;
