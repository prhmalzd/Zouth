import React from "react";
import styles from './allCities.module.css'
import OneCity from "./OneCity";
import aot1 from '../../../stuff/images/aot1.jpg'
import op1 from '../../../stuff/images/op1.webp'
import op2 from '../../../stuff/images/op2.webp'



const cityInfos = [
  {
    id: 1,
    image: aot1,
    text: 'Shiganshina'
  },
  {
    id: 2,
    image: op1,
    text: 'Skypiea'
  },
  {
    id: 3,
    image: op2,
    text: 'Alabasta'
  },
  {
    id: 4,
    image: aot1,
    text: 'Shiganshina'
  },
  {
    id: 5,
    image: op1,
    text: 'Skypiea'
  },
  {
    id: 6,
    image: op2,
    text: 'Alabasta'
  },
]



const AllCities = () => {
  return (
    <div className={styles.allCities}>
      {
      cityInfos.map((cityInfo, i) => {
      return (
      <OneCity
      key={i}
      id={cityInfos[i].id}
      image={cityInfos[i].image}
      text={cityInfos[i].text}
      />
      );
      })
      }
    </div>
  )
}

export default AllCities