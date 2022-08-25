import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import Slideshow from 'react-native-image-slider-show';


const dataSource = [
  {
    url:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/Goodnight.jpg"
  },
  {

    url:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/Comfort.jpg"
  },
  {
    url:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-08/ITC-personal-care.jpg"
  },
  {
    url:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=450/layout-engine/2022-04/kids-zone_zomato.jpg"
  }
];

const ImageSlider = () => {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === dataSource.length - 1 ? 0 : position + 1);
    }, 4000);

    return () => clearInterval(toggle);
  })

  return (
    <View style={{width:'90%', alignSelf:'center', height:'100%', borderRadius:10,marginTop:10}}>
      <Slideshow position={position} dataSource={dataSource} arrowSize={0} height={200}/>
    </View>


  );
};

export default ImageSlider;