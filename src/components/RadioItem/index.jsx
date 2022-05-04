import React, { Component } from 'react';
import "../RadioItem/style.css";

 class RadioItem extends Component {
    constructor(props){
        super(props);
        this.data ={};
    }
    sendData=(e)=>{
        const value = e.target.value;
        const key = e.target.name;
        this.data[key] = value;
        this.props.takeData(this.data);
    }
  
    render() {
    return (
        <section className='radioSection'>
            <input value={this.props.radVal} id='join' type="radio" name={this.props.name} onChange={this.sendData}/>
            
            <label htmlFor="join">
                <h6>{this.props.labelH6}</h6>
                <span>{this.props.labelSpan}</span>
            </label>
        </section>
    )
  }
}

export default RadioItem;