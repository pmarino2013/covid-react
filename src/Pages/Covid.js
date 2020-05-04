import React from "react";

import CovidTable from "../component/CovidTable";

import "../css/estilo.css";

class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: {},
      error: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  //funcion asincrona donde traigo la info usando axios
  async getData() {
    const axios = require("axios");
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const response = await axios.get("https://api.covid19api.com/summary");
      this.setState({
        loading: false,
        items: response.data.Countries,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-md-8 offser-md-2">
              <h1>Covid-19: Lista de paises</h1>
            </div>
          </div>
          <div className="row">
            <div className="col col-md-8 offset-md-2">
              <CovidTable datos={this.state.items} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Covid;
