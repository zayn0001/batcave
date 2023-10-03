import React from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Popup({isVisible, disablePopup, data}) {
  return (
    <Card className="w-[88.5vw] min-[500px]:hidden fixed m-5 h-[96vh] z-10" style={{display: isVisible && window.outerWidth<501 ? 'flex' : 'none'}} isPressable onClick={disablePopup}>
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
      <Link
          isExternal
          showAnchorIcon
          href={data?.githublink}
        >
          { "Browse source code on Github"}
        </Link>
      </CardFooter>
    </Card>
  );
}
