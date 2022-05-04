import React from "react";
import RadioItem from "../RadioItem/index";


class RadioList extends React.Component{
    constructor(props){
        super(props);

        this.currentItem = {}
    }

    takeData = (param) =>{
        this.currentItem = {...param};
        this.props.takeDataRadio(this.currentItem);
    }

    render(){
        return <section>
                <RadioItem radVal="1" takeData={this.takeData} 
                labelH6="Join As a Buyer" 
                labelSpan="I am looking for a Name, Logo or Tagline for my bussiness, brand or product." name={this.props.name}/>
                <RadioItem radVal="2" takeData={this.takeData} 
                labelH6="Join As a Creative or Marcketplace Seller" 
                labelSpan="I plan to submit name ideas, Logo designs or sell names in Domain Marketplace." name={this.props.name}/>
            </section>
    }
}

export default RadioList;