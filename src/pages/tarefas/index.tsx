import { Link } from "react-router-dom";
import TableFeita from "../../components/tableFeita";
import ItemTarefa from "../../components/itenTarefa";

export default function Tarefas(){

    return(
        <>
            <h1>Tarefas a fazer</h1>
            <hr />
                <TableFeita>
                    <ItemTarefa />
                </TableFeita>
            <hr />
            <Link to="/">Home</Link>
            <br />
            <Link to="/Sobre">Sobre</Link>
            <br />
            <Link to="/Contato">Contato</Link>
        </>
    )
}



{/* <ul>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
                <li>Tarefa 3</li>
                <li>Tarefa 4</li>
            </ul> */}