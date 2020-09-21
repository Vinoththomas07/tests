import React, { Component } from "react";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import Foreground from './header/foreground';
import ListBody from './components/ListBody';

export default class Task2b extends Component {

  render() {
    return (
      <StickyParallaxHeader
        headerType="AvatarHeader"
        title={"Linkercoin"}
        subtitle={"Top 100 Crypto currency list"}
        parallaxHeight={250}
        image={require('./../assets/linker.png')}
        renderBody={()=><ListBody/>}
        foreground={()=>{return <Foreground/>}}
        backgroundColor={'#4B4BC9'}
        rightTopIcon={null}
        leftTopIcon={null}
        bounces={true}
      />
    );
  }
}
