import React from "react"
import { Chrono } from "react-chrono";
import {items} from "../../assets/datas/data";
import "./Chrono.css";

const Home = () => {

  return (
    <div className="chrono">
   
   <div className="professionnel">Parcours Professionnel</div>

    <div style={{ width: '90vw', height: '100%', margin:'0 auto' }}>
  <Chrono items={items} mode="VERTICAL" />
</div>

</div>

)
}
export default Home