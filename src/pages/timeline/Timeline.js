import React, {Fragment, useState} from "react";
import Navbar from "../navbar/Navbar";
import MainContainer from './section/MainContainer'
import AddingPost from "./section/AddingPost";

const Timeline = () => {
  const [showCartValid, setShowCartValid] = useState(false)

  const ShowingCartHandler = () => {
    setShowCartValid(true)
  }
  const HidingCartHandler = () => {
    setShowCartValid(false)
  }

  return (
    <Fragment>
      {showCartValid && <AddingPost onHideAddPost={HidingCartHandler}/>}
      <Navbar onShowAddPost={ShowingCartHandler}/>
      <MainContainer/>
    </Fragment>
  )
}

export default Timeline;