import React from "react";
import styled from "styled-components";
import DefaultLayout from "../layouts/DefaultLayout";
import { Spacer } from "../components/utils/Spacer";
import { MainBanner } from "../features/landing/frames/MainBanner";

const IndexPage = () => {
  console.log("loaded")
  return <DefaultLayout>
    <Spacer height={140}/>
    <MainBanner/>
  </DefaultLayout>
}

export default IndexPage