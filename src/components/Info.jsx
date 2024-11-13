import React from "react";

const Info = () => {
  return (
    <div className="side w-[450px] text-white p-[30px]">
      <h1 className="text-center text-[36px] font-[500] mb-[50px]">Forcast Details</h1>
      <div className="flex flex-col gap-[20px] mb-[50px]">
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Location</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Description</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Humidity</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Wind</p>
          <p>Lagos, NG</p>
        </span>
      </div>

        <div className="border-[1px] border-white"></div>

      <div className="flex flex-col gap-[20px] mt-[50px]">
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Min</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Max</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Feels</p>
          <p>Lagos, NG</p>
        </span>
        <span className="flex justify-between">
          <p className="font-[500] text-[20px]">Pressure</p>
          <p>Lagos, NG</p>
        </span>
      </div>
    </div>
  );
};

export default Info;
