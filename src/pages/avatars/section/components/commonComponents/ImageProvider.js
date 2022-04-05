import { useReducer } from 'react';
import ImageContext from './image-context'

const BodyReducer = (state, action) => {
    const updatedImages = action.image
    return {
      bodyImages: updatedImages
    }
}
const HeadReducer = (state, action) => {
  const updatedImages = action.image
  return {
    headImages: updatedImages
  }
}

const ImageProvider = props => {

  const [bodyState, dispatchBodyImage] = useReducer(BodyReducer, {
    bodyImages: {}
  })
  const [headState, dispatchHaedImage] = useReducer(HeadReducer, {
    headImages: {}
  })

  const addImageToImageHolder = (image) => {
    if(image.alt === 'body') {
    dispatchBodyImage({image: image})
    } else if(image.alt === 'head') {
    dispatchHaedImage({image: image})
    }
  };

  const imageContext = {
    bodyImages: bodyState.bodyImages,
    headImages: headState.headImages,
    addImage: addImageToImageHolder
  }


  return (
  <ImageContext.Provider value={imageContext}>
    {props.children}
  </ImageContext.Provider>
  )
}

export default ImageProvider