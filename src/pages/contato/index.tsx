import { Link } from "react-router-dom"
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputDados from "../../components/inputdados/InputDados"

export default function Contato(){
    return(
        <>
        <h1> Entre em contato</h1>
        <hr />
        <form>
        <InputDados label="Nome" type='text'/>
        <InputDados label="email" type='email'/>
        <InputDados label="telefone" type='number'/>
        </form>
        <hr />
        <ButtonFatec label="Fatec: enviar mensagem" type="button" />
        <hr />
        <Link to="/sobre">Sobre</Link>
        <br />
        <Link to="/tarefas">Tarefas</Link>
        <br />
        <Link to="/">Home</Link>
        </>
    )
}