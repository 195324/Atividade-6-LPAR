import { Link } from "react-router-dom"
import Layout from "../../components/layout"


export default function Home() {
    return(
        <Layout>
            <h1>Página inicial</h1>
            <p>Olá tudo bem? </p>
            <p>Aqui está um projeto com React, estamos realizando um trabalho com 4 página segue abaixo:</p>
            <br />
            <hr />
            <Link to='Tarefas'>Tarefas</Link>
            <br />
            <Link to='Contato'>Contato</Link>
            <br />
            <Link to='Sobre'>Sobre</Link>
            <br />
            <Link to="TarefasUsestate">Tarefas usando UseState</Link>
        </Layout>
    )
}