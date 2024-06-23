
import React from "react"
import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Reducer";

const Store=configureStore(
    {
       reducer:{
          data:Slice
       }
    }
)

export default Store