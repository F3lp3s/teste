import axios from "axios";
import { useState, useEffect } from "react";

import style from "./Style.module.css";

const GetPais = ({ form }) => {

  const [pais, setPais] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${form.pais}?fields=capital,name,region,continents,population,currencies,languages,flags`)
      .then(response => {
        setErrorMsg(false)
        setPais(response.data[0]);
        console.log(response.data)
      })
      .catch(error => {
        setErrorMsg(true)
        setPais(null);
        console.log(error);
      })
  }, [form]);

  return (
    <>
      {pais && 
        <div className={ style.main }>
          <div className={ style.infos }>
            <h2>Obrigado por se registrar { form.nome }!</h2> 
            <p>Aqui estão as informações de seu país</p>
            <p>Nome: {pais.name.common}</p>
            <p>Capital: {pais.capital[0]}</p>
            <p>População: {pais.population}</p>
            <p>Continente: {pais.continents[0]}</p>
          </div>
          <div className={ style.containerImg }>
            <img src={pais.flags.png} alt="" />
          </div>
        </div>
      }
      {errorMsg &&
        <div className={ style.main }>
          <h2>Please insert a valid country!</h2>
        </div>
      }
    </>
  )
};

export default GetPais;