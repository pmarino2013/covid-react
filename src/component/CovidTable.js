import React from "react";
import "../css/estilo.css";

class CovidTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Pais</th>
                <th scope="col">Confirmados</th>
                <th scope="col"> Muertes </th>
                <th scope="col"> Recuperados </th>
              </tr>
            </thead>
            <tbody>
              {this.props.datos.map((item) => (
                <tr key={item.CountryCode}>
                  <td> {item.Country}</td>
                  <td> {item.TotalConfirmed}</td>
                  <td> {item.TotalDeaths}</td>
                  <td> {item.TotalRecovered}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default CovidTable;
