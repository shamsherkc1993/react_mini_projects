import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

const Error = (props)=> {
  const res = props.sendID;
  console.log(res)

  return (
    <div>
        <Header />
        <h1 style={{textAlign:"center", padding: "19% 10%", color: "#012c5f", fontSize: "50px", fontWeight: "900"}}>OOPS!!  Page Not Found !!</h1>
        <Footer />
        
    </div>
  )
}

export default Error