import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(image => {return <img src={images} />});
  return images;
}

export default ImageList;