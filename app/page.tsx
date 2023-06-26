"use client";

import Homepage from "./components/organisms/Homepage";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Homepage></Homepage>
      <h1>Hello Haier + Chakra UI + NextJS</h1>
      <Button colorScheme={"blue"}>CLICK ME</Button>
    </div>
  );
}