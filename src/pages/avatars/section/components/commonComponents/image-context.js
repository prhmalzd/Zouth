import React from "react";

const ImageContext = React.createContext({
  bodyImages: [{}],
  headImages: [{}],
  addImage: (image) => {}
});

export default ImageContext;