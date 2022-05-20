import React from "react"
import { Chrono } from "react-chrono";
import {items} from "../../assets/datas/data"

const Home = () => {

  return (
    <div style={{ width: '700px', height: '550px', margin:'0 auto' }}>
  <Chrono items={items} mode="VERTICAL_ALTERNATING" />
</div>
  )
}
export default Home