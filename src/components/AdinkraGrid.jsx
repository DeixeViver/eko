import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Theme from '../../config/theme';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import first from "../../static/adrinkas/1.png";
import AdinkraItemGrid from './AdinkraItemGrid';

import ad1 from '../../static/adrinkas/1.png';
import ad1a from '../../static/adrinkas/1a.png';
import ad2a from '../../static/adrinkas/2a.png';
import ad2 from '../../static/adrinkas/2.png';
import ad3 from '../../static/adrinkas/3.png';
import ad3a from '../../static/adrinkas/3a.png';
import ad4a from '../../static/adrinkas/4a.png';
import ad4 from '../../static/adrinkas/4.png';

export const adinkraDataExample = {
  id: 1,
  text: "Este adinkra significa isso muito importe, pois o significado esta descrito aqui.",
  title: "Esperança (okuara)"
}


export default class ScrollBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: 1000

    };
    this.widthCalculation = this.widthCalculation.bind(this);

    this.populateAdinkraGrid = this.populateAdinkraGrid.bind(this);
    this.returnAdinkraItem = this.returnAdinkraItem.bind(this);
    this.chooseAdinkra = this.chooseAdinkra.bind(this);
  }

  componentDidMount() {
    this.widthCalculation();
  }

  widthCalculation() {
    let bodyElement = document.getElementById('___gatsby');//B1
    let rect = bodyElement.getBoundingClientRect();//B2
    //console.log(rect);
    let width = rect.width; //B3   
    this.setState({
      innerWidth: window.innerWidth
    });
  }

 
  populateAdinkraGrid = (rowLevel, opacity) => {
    let baseCalc = 0
    //console.log("this.state.innerWidth");
    //console.log(this.state.innerWidth);
    if(this.state.innerWidth <= 425)
      baseCalc = 12;
    else if(this.state.innerWidth >= 1024)
      baseCalc = 10;
    else
      baseCalc = 10;
    
      //console.log("inner width")
      //console.log(this.state.innerWidth)

    let rowCount = Math.floor(100 / baseCalc);
  
    /*console.log(baseCalc)
    console.log("rowCount")
    console.log("rowCount")
    console.log("rowCount")
    console.log("rowCount")
    console.log("rowCount")
  */
    let arrayCount = new Array(rowCount);
    //console.log(arrayCount)

    arrayCount.map((e, i) => i + 1);
    let arrayReturn = [];
    for(var i = 0; i < arrayCount.length; i++){
      //console.log(i);
  
      arrayReturn.push(this.returnAdinkraItem(rowLevel, baseCalc, i+1, opacity));
    }
    return arrayReturn.map(e => e);
    /*return (
      <div>
      {arrayCount.map( (e, i) => 
      <AdinkraItemGrid top={rowLevel * baseCalc + "%"} left ={(e + 1) * baseCalc + "%"} adinkra={chooseAdinkra(e)} />)}
      </div>
    )*/
    //return (<AdinkraItemGrid top={rowLevel * baseCalc + "%"} left ={(arrayCount.length) * baseCalc + "%"} adinkra={chooseAdinkra()} />)
  
  }
  
  returnAdinkraItem = (level, baseCalc, pos, opacity) => {
    //console.log("top " + level * baseCalc + "%");
    //console.log("left " + pos * baseCalc + "%");
    return (<AdinkraItemGrid  title={adinkraDataExample.title} text={adinkraDataExample.text} 
                              key={(pos - 1) * baseCalc + level} 
                              opacity={opacity} 
                              top={level * baseCalc + "%"} 
                              left ={(pos - 1) * baseCalc + 0 + "%"} 
                              adinkra={this.chooseAdinkra()} />);
  }
  
  chooseAdinkra = (e) => {
    let adinkraArray = [ad1, ad2, ad3, ad4, ad1a, ad2a, ad3a, ad4a];
    let number = Math.floor(Math.random() * Math.floor(7));
    //console.log(number);
    return adinkraArray[number];
  }




    render() {
      const {level, opacity} = this.props;
      return (
          this.populateAdinkraGrid(level, opacity)
      );
    }
  }
  ScrollBar.propTypes = {
    //width: PropTypes.number.isRequired,
    //height: PropTypes.numberisRequired
  };
  
  ScrollBar.defaultProps = {
    level: 0,
    opacity: 0.5
  };