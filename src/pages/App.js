import './App.css';
import PDFController from "../controller/pdfController"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", address: "", tel: "" }
  }

  clearInput = () => {
    this.setState({ name: "", address: "", tel: "" })
  }

  render() {
    return (
      <div className="App">
        <div>
          Give A Gift Admin
        </div>

        <div>Name:</div>
        <input
          value={this.state.name}
          onChange={(e) => {
            this.setState({ ...this.state, name: e.target.value })
          }}
          required
        />

        <div>Address:</div>
        <input
          value={this.state.address}
          onChange={(e) => {
            this.setState({ ...this.state, address: e.target.value })
          }}
          required
        />

        <div>Telephone number: </div>
        <input
          value={this.state.tel}
          onChange={(e) => {
            this.setState({ ...this.state, tel: e.target.value })
          }}
          required
        />
        <div>

          <button onClick={(e) => { e.preventDefault(); PDFController.printPDF(this.state); }}> Create</button>
          <button onClick={() => this.clearInput()}> Reset</button>
        </div>
      </div>
    )
  }
}

export default App;
