import Carousel from "react-elastic-carousel";
// import React, { useState,useEffect } from "react";
import Item from "./Item";
import React from 'react'

function carose() {
  return (
    <div>
      <Carousel >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
        </Carousel>
    </div>
  )
}

export default carose