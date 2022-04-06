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
const EarReducer = (state, action) => {
  const updatedImages = action.image
  return {
    earImages: updatedImages
  }
}
const EyeBrowReducer = (state, action) => {
  const updatedImages = action.image
  return {
    eyeBrowImages: updatedImages
  }
}
const EyeReducer = (state, action) => {
  const updatedImages = action.image
  return {
    eyeImages: updatedImages
  }
}
const LipReducer = (state, action) => {
  const updatedImages = action.image
  return {
    lipImages: updatedImages
  }
}
const NoseReducer = (state, action) => {
  const updatedImages = action.image
  return {
    noseImages: updatedImages
  }
}

const ImageProvider = props => {

  const [bodyState, dispatchBodyImage] = useReducer(BodyReducer, {
    bodyImages: {}
  })
  const [headState, dispatchHaedImage] = useReducer(HeadReducer, {
    headImages: {}
  })
  const [earState, dispatchEarImage] = useReducer(EarReducer, {
    earImages: {}
  })
  const [eyeBrowState, dispatchEyeBrowImage] = useReducer(EyeBrowReducer, {
    eyeBrowImages: {}
  })
  const [eyeState, dispatchEyeImage] = useReducer(EyeReducer, {
    eyeImages: {}
  })
  const [lipState, dispatchLipImage] = useReducer(LipReducer, {
    lipImages: {}
  })
  const [noseState, dispatchNoseImage] = useReducer(NoseReducer, {
    noseImages: {}
  })

  const addImageToImageHolder = (image) => {
    if(image.alt === 'body') {
    dispatchBodyImage({image: image})
    } else if(image.alt === 'head') {
    dispatchHaedImage({image: image})
    } else if(image.alt === 'ear') {
      dispatchEarImage({image: image})
    } else if(image.alt === 'eyeBrow') {
      dispatchEyeBrowImage({image: image})
    } else if(image.alt === 'eye') {
      dispatchEyeImage({image: image})
    }
    else if(image.alt === 'lip') {
      dispatchLipImage({image: image})
    }
    else if(image.alt === 'nose') {
      dispatchNoseImage({image: image})
    }
  };

  const imageContext = {
    bodyImages: bodyState.bodyImages,
    headImages: headState.headImages,
    earImages: earState.earImages,
    eyeBrowImages : eyeBrowState.eyeBrowImages,
    eyeImages: eyeState.eyeImages,
    lipImages: lipState.lipImages,
    noseImages: noseState.noseImages,
    addImage: addImageToImageHolder
  }


  return (
  <ImageContext.Provider value={imageContext}>
    {props.children}
  </ImageContext.Provider>
  )
}

export default ImageProvider