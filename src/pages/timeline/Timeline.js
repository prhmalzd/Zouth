import React, { Fragment, useState, useReducer } from "react";
import Navbar from "../navbar/Navbar";
import MainContainer from "./section/MainContainer";
import AddingPost from "./section/AddingPost";

const addPostReducer = (state, action) => {
  if (action.type === "ADD") {
    const newArray = [...state, action];
    return newArray;
  }
  return [
    {
      name: "Parham",
      logo: "P",
      context: "Welcome to Zouth!",
      src: "",
    },
  ];
};

const Timeline = () => {
  const [showCartValid, setShowCartValid] = useState(false);
  const [addPostState, dispatchAddPost] = useReducer(addPostReducer, [
    {
      name: "Parham",
      logo: "P",
      context: "Welcome to Zouth!",
      src: "",
    },
  ]);

  const ShowingCartHandler = () => {
    setShowCartValid(true);
  };
  const HidingCartHandler = () => {
    setShowCartValid(false);
  };

  const onSubmitTextHandler = (text, imageUrl) => {
    if (text.trim()) {
      dispatchAddPost({
        type: "ADD",
        name: "Parham",
        logo: "P",
        context: text,
        src: imageUrl,
      });
      setShowCartValid(false);
    }
  };

  return (
    <Fragment>
      {showCartValid && (
        <AddingPost
          onHideAddPost={HidingCartHandler}
          onSubmitHandler={onSubmitTextHandler}
        />
      )}
      <Navbar onShowAddPost={ShowingCartHandler} />
      <MainContainer addPostState={addPostState} />
    </Fragment>
  );
};

export default Timeline;
