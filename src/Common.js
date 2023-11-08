import React from 'react'
import { NavLink } from 'react-router-dom'
function Common(props) {
  return (
    <div>
    <section className="section">
    <div className="home-des">
        <h1>{props.name}<br></br><span>HELLO TECH </span> </h1>
        <h3>{props.des}</h3>

        <NavLink to={props.visit}> <button>{props.btname}</button></NavLink>

    </div>
    <div className="pic">
        <img src={props.pic} height={400} width={570}></img>
    </div>

</section>
    </div>
  )
}

export default Common
