import React from 'react';

import Carousel from '../carousel/carousel.js';
import Frame from '../frame/frame.js';
import Nav from '../NavComp/nav.js';
import Slide from '../slide/slide.js';

import pic1 from './images/1.jpg';
import pic2 from './images/2.jpg';
import pic3 from './images/3.jpg';
import pic4 from './images/4.jpg';
import pic5 from './images/5.jpg';
import pic6 from './images/6.jpg';
import css from './style.css';

export default class DriftApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickPrevious = this.handleClickPrevious.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
    this.state = {
      showIndex: 0,
      numSlides: 6
    }
  }
  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    })
  }
  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    })
  }
  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    )
  }
  render() {
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={640}
        >
          <Slide image={pic1} title="New Home Construction">
            We know what makes a home dazzle and we specialize in desiging homes. 
            In the process, we take inspiration from having built homes from the ground up.
          </Slide>
          <Slide image={pic2} title="Home Additions">
          We know home decor can turn your home into a space that reflects your style and makes you happy. 
          Let us help you get inspired by our on-trend and affordable home Additions.
          </Slide>
          <Slide
            image={pic3}
            title="Bathroom Remodels"
          >
            Your bathroom is just for you. 
            Get inspired with our bathroom ideas and let us help you turn the space into an oasis from daily stresses. 
            We offer a wide variety of bathroom solutions.
          </Slide>
          <Slide image={pic4} title="Kitchen Remodels">
          Remodeling the kitchen is one of the most rewarding and complex home improvement projects you can undertake. 
          A new kitchen leaves you with endless choices and decisions to make.
          </Slide>
          <Slide
            image={pic5}
            title="Windows and Doors"
          >
            New windows and doors offer you a chance to update your look and increase home security. 
            We offer all the doors you need. You can even special order or even custom design your own for a perfect fit. 
           
          </Slide>
          <Slide
            image={pic6}
            title="Decks and Porches"
          >
            Fix up your existing deck or start from scratch – either way, you’ll be enjoying your outdoor deck destination. You’ll find decking materials you need to build a new deck or spruce up deck you have.
          </Slide>
        </Carousel>
      </Frame>
    )
  }
}