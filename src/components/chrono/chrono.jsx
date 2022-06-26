import React from "react"
import { Chrono } from "react-chrono";
import {items} from "../../assets/datas/data";

const Home = () => {

  return (
    


    <div style={{ width: '98vw', height: '100%', margin:'0 auto' }}>
  <Chrono items={items} mode="VERTICAL" />
</div>

  )
}
export default Home