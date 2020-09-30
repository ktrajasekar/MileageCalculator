import React from "react";

class mileage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speedometervalue: null,
      totalKms: null,
      petrolPrice: null,
      result: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("---------------------- xxxxxxxx -------------------");
  }
  handleChange(event) {
    let name = event.target.name;
    let value = Number(event.target.value);
    if (
      name === "totalKms" ||
      name === "speedometervalue" ||
      name === "petrolPrice"
    ) {
      if (!Number(value)) {
      }
    }
    this.setState({ [name]: value });
  }
  handleSubmit() {
    if (
      this.state.totalKms &&
      this.state.speedometervalue &&
      this.state.petrolPrice
    ) {
      let noOFLitreFeul = this.state.totalKms / this.state.speedometervalue;
      let FuelExpense =
        "Rs." + (noOFLitreFeul * this.state.petrolPrice).toFixed(2);
      this.setState({ result: FuelExpense });
    } else {
      this.setState({ result: "Check Values" });
    }
  }
  render() {
    return (
      <div className="mileage__container">
        <form autoComplete="off">
          <div className="mileage__form">
            <label>Total Kms Travelled </label>
            <input type="number" name="totalKms" onChange={this.handleChange} />
            <label>Speed O Meter kms / Per Litre</label>
            <input
              type="number"
              name="speedometervalue"
              onChange={this.handleChange}
            />

            <label>Petrol / Diesel Price Today </label>
            <input
              type="number"
              name="petrolPrice"
              onChange={this.handleChange}
            />
          </div>
          <input
            type="button"
            onClick={this.handleSubmit}
            value="Calculate Mileage"
            className="mileage__calcultion-btn"
          />
        </form>
        <div className="mileage__results">{this.state.result}</div>
        <div className="release__notes">
          <p></p>
        </div>
      </div>
    );
  }
}
export default mileage;
