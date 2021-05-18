import PDFController from "../controller/pdfController"
import React from "react"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", address: "", tel: "", code: "" }
  }

  clearInput = () => {
    this.setState({ name: "", address: "", tel: "", code: "" })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Give A Gift Admin</h1>
        </div>

        <div><h2>Name:</h2></div>
        <input
          className="textField"
          value={this.state.name}
          placeholder="Name"
          onChange={(e) => {
            this.setState({ ...this.state, name: e.target.value })
          }}
          required
        />

        <div><h2>Address:</h2></div>
        <input
          className="textField"
          value={this.state.address}
          placeholder="Address"
          onChange={(e) => {
            this.setState({ ...this.state, address: e.target.value })
          }}
          required
        />

        <div><h2>Telephone number:</h2></div>
        <input
          className="textField"
          value={this.state.tel}
          placeholder="Telephone number"
          onChange={(e) => {
            this.setState({ ...this.state, tel: e.target.value })
          }}
          required
        />

        <div><h2>Invited Code:</h2></div>
        <input
          className="textField"
          value={this.state.code}
          placeholder="Invited Code"
          onChange={(e) => {
            this.setState({ ...this.state, code: e.target.value })
          }}
          required
        />

        <div className="btns">
          <button
            onClick={(e) => { e.preventDefault(); PDFController.printPDF(this.state); }}
            className="btn"> Create</button>
          <button
            onClick={() => this.clearInput()}
            className="btn"
          > Reset</button>
        </div>
      </div>
    )
  }
}

export default App;
