import React, {Fragment, useState, useReducer} from "react";
import Navbar from "../navbar/Navbar";
import MainContainer from './section/MainContainer'
import AddingPost from "./section/AddingPost";

const addPostReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newArray = [...state, action]
    return newArray
  }
  return ([
    {
    name: 'Parham',
    logo: 'P',
    context: 'Welcome to Zouth!',
    src: ''
  }
  ])
}

const Timeline = () => {
  const [showCartValid, setShowCartValid] = useState(false)
  const [colorTheme, setColorTheme] = useState('#EA1A7F')
  const [colorThemeForHover, setColorThemeForHover] = useState('red')
  const [addPostState, dispatchAddPost] = useReducer(addPostReducer, [{
    name: 'Parham',
    logo: 'P',
    context: 'Welcome to Zouth!',
    src: ''
  }])

  const ShowingCartHandler = () => {
    setShowCartValid(true)
  }
  const HidingCartHandler = () => {
    setShowCartValid(false)
  }
  const colorChangeHandler = (event) => {
    const id = event.target.id
    if (id === 'color1') {
      setColorTheme('#fec603')
      setColorThemeForHover('yellow')
    } else if (id === 'color2') {
      setColorTheme('#a8f387')
      setColorThemeForHover('green')
    } else if (id === 'color3') {
      setColorTheme('#EA1A7F')
      setColorThemeForHover('red')
    } else if (id === 'color4') {
      setColorTheme('#af87ce')
      setColorThemeForHover('purple')
    } else if (id === 'color5') {
      setColorTheme('#16d6fa')
      setColorThemeForHover('blue')
    }
  }
  const onSubmitTextHandler = (text, imageUrl) => {
    if(text.trim()) {
      dispatchAddPost({type: 'ADD',name: 'Parham', logo: 'P', context: text, src: imageUrl})
      setShowCartValid(false)
    }
  }

  return (
    <Fragment>
      {showCartValid && <AddingPost onHideAddPost={HidingCartHandler} onSubmitHandler={onSubmitTextHandler} colorTheme={colorTheme} colorThemeForHover={colorThemeForHover}/>}
      <Navbar
        colorTheme={colorTheme}
        onShowAddPost={ShowingCartHandler}
        onGetColor={colorChangeHandler}
      />
      <MainContainer
        colorTheme={colorTheme}
        colorThemeForHover={colorThemeForHover}
        addPostState={addPostState}
      />
    </Fragment>
  )
}

export default Timeline;