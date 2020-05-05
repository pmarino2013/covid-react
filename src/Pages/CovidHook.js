import React from "react";
import CovidTableHook from "../component/CovidTableHook";

//Funcion de React con Hooks
function CovidHook() {
  //utilizo Hook useState para inicializar valores
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  //importo axios para peticiones
  const axios = require("axios");

  //Hooks useEffect en ves de usar componenteDidMont
  React.useEffect(() => {
    async function FechData() {
      //funcion asincrona
      //setear variable error y loading
      setError(null);
      setLoading(true);

      try {
        const response = await axios.get("https://api.covid19api.com/summary"); //llamada a API

        setLoading(false); //seteo loading
        setItems(response.data.Countries); //asigno a items el valor de la respuesta asincrona
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    FechData(); //ejecuto la funcion asincrona
  }, []);

  //si loading esta ejecutandose
  if (loading) {
    return <h1>Loading...</h1>;
  }
  //si hay un error
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 offser-md-2">
            <h1>Covid-19: Lista de paises</h1>
          </div>
        </div>
        {/* Consulto si el array de items tiene valores y recien allí mando props al componente y lo renderizo */}
        {items.length > 0 && (
          <div className="row">
            <div className="col col-md-8 offset-md-2">
              <CovidTableHook datos={items} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CovidHook;
