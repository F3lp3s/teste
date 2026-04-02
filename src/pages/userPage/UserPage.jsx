import style from "./Style.module.css";
import { useState } from "react";

import GetPais from "../../components/getPais/GetPais"

import loadingGif from "../../assets/loading.gif"

const UserPage = () => {

  const [form, setForm] = useState({
    nome: "",
    idade: 0,
    email: "",
    pais: ""
  });
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [showPais, setShowPais] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function checkStatus() {
    
    if(nome === "" || idade <= 0 || email === "" || pais === "") {
      setErrorMsg("Please fill all inputs!");
      return
    }
    
    if(email.indexOf("@") < 0) {
      console.log(email.indexOf("@"))
      setErrorMsg("Please insert a valid email!")
      return
    }
    
    setLoading(true);
    setErrorMsg("");
    setTimeout(() => {
      setLoading(false);
      setShowPais(true);
      setForm({ nome, idade, email, pais })
    }, 2000)
  }

   return (
    <main className={ style.main }>
      <div className={ style.form }>
        <h2>User Register</h2>
        <label>
          <p>Name:</p>
          <input 
            type="text" 
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Age:</p>
          <input 
            type="number"
            value={idade}
            onChange={(e) => {
              setIdade(e.target.value);
            }}  
          />
        </label>
        <label>
          <p>Email:</p>
          <input 
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <p>Country of Origin:</p>
          <input 
            type="text" 
            value={pais}
            onChange={(e) => {
              setPais(e.target.value)
            }}
          />
        </label>
        {errorMsg && 
        <div>
          <p>{ errorMsg }</p>
        </div>
        }
        <button
          onClick={() => checkStatus()}
        >
          Register
        </button>
        {loading && 
          <img className={ style.gif } src={ loadingGif } alt="" />
        }
      </div>
      {showPais && 
        <GetPais 
          form={form}
        />
      }
    </main>
   )
}

export default UserPage