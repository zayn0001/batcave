import React, { useEffect, useState } from "react";

import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";

import client from "./client";



export default function Dashboard({togglePopup, data}) {
  
  

  return (
    <div className="z-0 p-10 h-fit max-h-[100vh] gap-5 max-[500px]:w-full md:gap-20 grid max-[767px]:w-8/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-9/12 overflow-auto">
      {data?.map((item, index) => (
        <Card className="py-4 h-fit z-1" onClick={()=>{togglePopup(index)}} isPressable>
        <CardHeader className="pb-0 pt-2 px-4 flex-col h-2/6 items-start">
          <p className="text-tiny uppercase font-bold">{item.name}</p>
          <small className="text-default-500 underline"><a href={item.sitelink}>Visit</a></small>
          <h4 className="font-bold text-large"></h4>
        </CardHeader>
        <CardBody className="overflow-visible h-4/6 py-2 h-full">
          <div className="relative shadow-black/5 shadow-none rounded-large" style={{maxWidth:"100%", height:"100%"}}> 
            <img src={item.thumbnail} className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover rounded-xl"
            alt="Card background" width="100%" height="100%" style={{height:"100%"}} data-loaded="true"/>
          </div>
        </CardBody>
      </Card>
      ))}
    </div>
  );
}
