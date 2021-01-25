import React, { Component } from "react";
import './CalcApp.css';
import "./InputButtons";

export default class CalcApp extends Component {
  constructor (props) {
    super (props)
    this.state = {
      hasil: " ",
    }
  }
  
  click = klik => {
    if (klik == "=") {
      this.hitung()}
    else {
      this.setState({
        hasil: this.state.hasil + klik
      })
    }
  };

  hitung = () => {
    let masihkah = ""
    if (this.state.hasil.includes("")){
      masihkah = this.state.hasil.replace("","+"
      )
    } else {
      masihkah = this.state.hasil
      }
    try {
      this.setState({
        hasil: (eval(masihkah) || "" ) + ""
      })
    }
    catch (konconetry) {
      this.setState ({
        hasil: "error"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="eksekutor">
          <InputButtons hasil={this.state.hasil}/>

        </div>
      </div>
    )
  }
}