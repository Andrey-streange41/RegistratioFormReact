import React from "react";
import "../inputField/InputEl.css"

class InputField extends React.Component{
    constructor(props){
        super(props);
        this.data ={};
        this.isSelect = false;
    }

    onChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const key = e.target.name;
        this.data[key] = value;
        this.props.sendDataToParrent(this.data);
    }
    
    onSelect = () =>{
            this.isSelect = true;
    }

    onMouseLeave = (e) =>{
        if(this.isSelect){
            if(e.target.value===""){
                 e.target.className = "textField addRedBorder";
                 this.props.activeNoneBlock();
            }
            else{
                e.target.className = "textField";
                this.props.deactiveNoneBlock();
            }   
        }
    }

    render(){
        return  <input onMouseLeave={this.onMouseLeave} onSelect={this.onSelect} className="textField" value={this.props.value} placeholder={this.props.placeholder} 
        type={this.props.type} name={this.props.name} onChange={this.onChange}/>
    }
}

export default InputField;