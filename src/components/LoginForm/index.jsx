import React, { Component } from 'react';
import InputField from '../inputField';
import RadioList from '../RadioList';
import CheckBoxComponent from '../checkBoxComponent';
import "../LoginForm/Form.css"


export class LoginForm extends React.Component {

  constructor(props){
    super(props)
    this.state={
      firstname:"",
      lastname:"",
      nickname:"",
      email: "",
      password:"",
      passwordConfirm:"",
      radioChoise:"",
      isAllow:"",
      currentClass : "fieldCantBeEmpty"

    }
    this.isEmptyField = false;
    this.checkOnEmpty()
  }

  checkOnEmpty(){
    if(this.state.firstname===""||this.state.lastname===""||this.state.nickname===""||this.state.email===""
    ||this.state.password===""|| this.state.passwordConfirm===""){
      return false
    }
    return true;
  }

 onSubmit = (event) =>{
      event.preventDefault();
  }

  onChange = (event)=>{
    const value =  event.target.type ="checkbox" ? event.target.cheked : event.target.value;
    const key = event.target.name;

    this .setState((state)=>{
      return{
        ...state,
        [key] : value
      }
    })
  }

  changeState = (data)=>{
      this.setState((state)=>{
        return{
          ...state,
          ...data
        }
      })
  }

  takeDataRadio = (data) =>{
    this.setState((state)=>{
      return{
        ...state,
        ...data
      }
    })
  }

  takeDataCheckbox = (data)=>{
      this.setState((state)=>{
        return{
          ...state,
          ...data
        }
      })
  }

  activeNoneBlock=()=>{
      this.setState((state)=>{
        return {
          ...state ,
          currentClass : "fieldCantBeEmpty fieldCantBeEmptyActive"
        }
      })
  }

  deactiveNoneBlock=()=>{
    this.setState((state)=>{
      return {
        ...state ,
        currentClass : "fieldCantBeEmpty"
      }
    })
  }

  onMouseDown=(e)=>{
      e.target.className ="submitButton onDown";
  }
  onMouseUp=(e)=>{
    e.target.className ="submitButton";
    if(this.state.password === this.state.passwordConfirm && this.state.currentClass === "fieldCantBeEmpty" && this.checkOnEmpty()){
      console.log("Registration okey !");
      this.state.currentClass ="fieldCantBeEmpty";
    }
    else{
      this.state.currentClass = "fieldCantBeEmpty fieldCantBeEmptyActive";
      console.log(this.state);
      console.log("Registration fail :( !");
    }
  }

  render() {
    
    return (
     
      <form on onSubmit={this.onSubmit}>
        <section>
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.firstname} sendDataToParrent={this.changeState} placeholder="First name" 
          name='firstname' type="text" />
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.lastname} sendDataToParrent={this.changeState} placeholder="Last name" 
          name='lastname' type="text"/>
        </section>

        

        <section>
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.nickname} sendDataToParrent={this.changeState} placeholder="Display name" 
          name='nickname' type="text"/>
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.email} sendDataToParrent={this.changeState} placeholder="Email address" 
          name='email' type="email"/>
        </section>
        
        <section>
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.password} sendDataToParrent={this.changeState} placeholder="Password" 
          name='password' type="password"/>
          <InputField deactiveNoneBlock={this.deactiveNoneBlock} activeNoneBlock={this.activeNoneBlock} value={this.state.passwordConfirm} sendDataToParrent={this.changeState} placeholder="Password confirmation" 
          name='passwordConfirm' type="password"/>
        </section>
        <section className={this.state.currentClass}>
            Field can't be empty 
        </section>
          <RadioList takeDataRadio={this.takeDataRadio} name="radioChoise" />
        <CheckBoxComponent name="isAllow" sendData={this.takeDataCheckbox} 
        CheckboxContent="Allow squad help to send marketing/promotional offers from time to time"
        />

        
          <input onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown} className='submitButton' type="submit"  value="Create account"/>
       
        
      </form>
    )
  }
}

export default LoginForm