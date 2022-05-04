import React, { Component } from 'react';
import '../checkBoxComponent/style.css';

 class CheckBoxComponent extends Component {
     constructor(props){
         super(props);
         this.data ={}
     }

     fixedChange = (e) =>{
        const value = e.target.checked;
        const key = e.target.name;
        this.data[key] = value;
        this.props.sendData(this.data);
     }

  render() {
    return (
      <section className='checkBoxBlock'>
          <input name={this.props.name} id='check' type="checkbox" onChange={this.fixedChange}/>
          <label className='checkboxLabel' htmlFor="check">{this.props.CheckboxContent}</label>
      </section>
    )
  }
}

export default CheckBoxComponent;