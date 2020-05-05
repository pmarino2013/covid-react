import React from "react";
import "../css/estilo.css";

function CovidTableHook(props) {
  const datos = props.datos;
  console.log(datos);

  return (
    <React.Fragment>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> Pais </th>
            <th scope="col"> Confirmados</th>
            <th scope="col"> Muertes </th>
            <th scope="col"> Recuperados </th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item) => (
            <tr key={item.CountryCode}>
              <td> {item.Country} </td>
              <td> {item.TotalConfirmed} </td>
              <td> {item.TotalDeaths} </td>
              <td> {item.TotalRecovered} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default CovidTableHook;
