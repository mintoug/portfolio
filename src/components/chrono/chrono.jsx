import React from "react"
import { Chrono } from "react-chrono";
import {items} from "../../assets/datas/data"

const Home = () => {

  return (
    <div style={{ width: '70vw', height: '80vh', margin:'0 auto' }}>
  <Chrono items={items} mode="VERTICAL" enableOutline />
</div>
  )
}
export default Home