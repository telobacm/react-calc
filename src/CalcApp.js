import React, { Component } from "react";
import "./CalcApp.css";
import { Penjumlahan, Pengurangan, Perkalian, Pembagian } from "./InputButtons";
import ResultPlace from "./ResultPlace";

export default class CalcApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: "",
      //di bawah ini biar pas komponennya dirender, dia kenal fungsi click
      array: [
        null,
        <Penjumlahan click={this.click} />,
        <Pengurangan click={this.click} />,
        <Perkalian click={this.click} />,
        <Pembagian click={this.click} />,
      ],
      urutan: 0,
    };
  }

  click = (klik) => {
    if (klik === "=") {
      this.hitung();
    } else {
      this.setState({
        hasil: this.state.hasil + klik,
      });
    }
  };

  hitung = () => {
    let masihkah = "";
    if (this.state.hasil.includes("")) {
      masihkah = this.state.hasil.replace("", "+");
    } else {
      masihkah = this.state.hasil;
    }
    try {
      this.setState({
        hasil: (eval(masihkah) || "") + "",
      });
    } catch {
      alert("Lengkapi dulu baru klik =");
    }
  };

  mulai = (e) => {
    if (e.target.innerHTML === "+") {
      this.setState({ urutan: 1 });
    } else if (e.target.innerHTML === "-") {
      this.setState({ urutan: 2 });
    } else if (e.target.innerHTML === "*") {
      this.setState({ urutan: 3 });
    } else if (e.target.innerHTML === "/") {
      this.setState({ urutan: 4 });
    } else {
      this.setState({ urutan: 0 });
    }
  };

  render() {
    return (
      <div className="konten">
        <div>
          <p className="pilih">PILIH SALAH SATU !</p>
          <button className="pilihan" onClick={this.mulai}>
            +
          </button>
          <button className="pilihan" onClick={this.mulai}>
            -
          </button>
          <button className="pilihan" onClick={this.mulai}>
            *
          </button>
          <button className="pilihan" onClick={this.mulai}>
            /
          </button>
        </div>
        <div className="result">
          <ResultPlace hasil={this.state.hasil} />
        </div>
        <div>{this.state.array[this.state.urutan]}</div>
      </div>
    );
  }
}
