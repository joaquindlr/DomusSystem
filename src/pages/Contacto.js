import React, {useState} from 'react'
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import {AiFillPhone, 
    AiFillMail, AiOutlineInstagram,
    AiFillFacebook,AiFillYoutube, AiFillInstagram } from "react-icons/ai"

function Contacto() {
    const { register, handleSubmit } = useForm();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errortext, setErrortext] = useState(false);
  const [errorRetext, setErrorRetext] = useState(false);

  const history = useHistory();

  const onSubmit = (data) => {
    validar(data);
    console.log(data);
  };

  const validar = (data) => {

    if (data.email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  return (
    <div
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f2f2f2",
        paddingTop: "2rem",
      }}
    >
      <div
        className="rounded-3 py-5 shadow "
        style={{
          width: "80%",
          display: "flex",
          flexDirection:"column",
          alignItems:"center",
          backgroundColor: "white",
        }}
      >

        <div style={{marginLeft:"1rem", width:"80%"}}>
        <h2 className="mb-5 text-center ">Contacto</h2>
        <div className="mb-4">
            <AiFillPhone/>
            <div style={{display:"inline-block" ,marginLeft:"5px"}}>   <p>+54 1234 5678</p></div><br />
            <AiFillMail/>
            <div style={{display:"inline-block" ,marginLeft:"5px"}}>   <p>domusnmobiliaria@mail.com</p></div><br />
            <AiFillInstagram/>
            <div style={{display:"inline-block" ,marginLeft:"5px"}}>   <p>@domus.inmobiliaria</p></div><br />
            <AiFillFacebook/>
            <div style={{display:"inline-block" ,marginLeft:"5px"}}>   <p>Domus Inmobiliaria</p></div><br />
            <AiFillYoutube/>
            <div style={{display:"inline-block" ,marginLeft:"5px"}}>   <p>youtube.com/DomusInmobiliaria</p></div><br />
        </div>

        
          <h2 className="mb-4 text-left">Dejanos un mensaje</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label for="email" class="form-label">
                Tu E-mail
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"/>

            </div>
            <div class="mb-3">
              <label for="Nombre" className="form-label">
                Tu Nombre
              </label>
              <input
                type="text"
                class="form-control"
                name="Nombre"
                id="Nombre"  />

            </div>
            <div class="mb-3 ">
              <label for="Nombre" class="form-label" >
                Tu mensaje
              </label>
              <textarea class="form-control" aria-label="With textarea"  style={{height:"10rem"}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>)
}

export default Contacto
