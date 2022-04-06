import React from "react";

const ImageContext = React.createContext({
  bodyImages: [{}],
  headImages: [{}],
  earImages: [{}],
  eyeBrowImages: [{}],
  eyeImages: [{}],
  lipImages: [{}],
  noseImages: [{}],
  addImage: (image) => {}
});

export default ImageContext;