import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, MenuItem} from "@nextui-org/react";

export default function Sidebar({data}) {
  return (
    <Card className=" max-[767px]:w-8/12 w-3/12 h-full max-[500px]:w-4/12 max-[500px]:hidden" isPressable>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={data?.thumbnail}
          width={40}
        />
        <div className="flex flex-col flex-start">
          <a className="text-md underline" href={data?.sitelink}>{data?.name}</a>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className="overflow-auto">
        {data?.description.split("\n").filter(element => element).map((para,index)=>(
          <><p>{para}</p><br></br></>
        ))}
      </CardBody>
      <Divider/>
      <CardFooter>
        {data && (
          <Link
          isExternal
          showAnchorIcon
          href={data?.githublink}
        >
          {"Browse source code on Github"}
        </Link>
        )}
      {!data && (
        <Link
        isExternal
        href={data?.githublink}
      >
         &nbsp;
      </Link>
      )}
      
      </CardFooter>
    </Card>
  );
}
