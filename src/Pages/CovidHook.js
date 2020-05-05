import React from "react";
import CovidTableHook from "../component/CovidTableHook";

function CovidHook() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const axios = require("axios");

  // React.useEffect(() => {
  //   setError(null);
  //   setLoading(true);

  //   fetch("https://api.covid19api.com/summary")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setLoading(false);
  //         setItems(result);
  //         // console.log(result.Countries);
  //       },

  //       (error) => {
  //         setError(error);
  //         setLoading(false);
  //       }
  //     );
  // }, []);

  React.useEffect(() => {
    async function FechData() {
      setError(null);
      setLoading(true);

      try {
        const response = await axios.get("https://api.covid19api.com/summary");
        console.log(response);
        setLoading(false);
        setItems(response.data.Countries);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    FechData();
  }, []);

  // console.log(items.data);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  // console.log(items);
  return (
    // loading ? <h1>Loading...</h1>
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-md-8 offser-md-2">
            <h1>Covid-19: Lista de paises</h1>
          </div>
        </div>
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
