import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormTarefas from "../../components/formTarefas";

interface Tarefa{
    id: number
    title: string
    completed: boolean
}


export default function TarefasUsestate(){
    // const[contador, setContador] = useState(0)
    const[tarefas, setTarefas] = useState<Tarefa[]>([])

    function atualizarTarefa(){
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task')
        .then((dados) => dados.json())
        .then((tarefas) => setTarefas(tarefas))
    }
    
        useEffect(()=>{
            atualizarTarefa()
        },[])

    return(
        <>
            <h1>Tarefas a fazer com UseState</h1>
            <FormTarefas atualizarTarefas={atualizarTarefa} />
            <ul>
                {
                    tarefas.map(tarefa => (
                        <li key={tarefa.id}>{tarefa.id}° {tarefa.title} {tarefa.completed ? 'Sim' : 'Não'}</li>
                    ))
                }
            </ul>


            <Link to="/">Home</Link>
            <br />
            <Link to="/Sobre">Sobre</Link>
            <br />
            <Link to="/Contato">Contato</Link>
            <br />
            <Link to="/Tarefas">Tarefas</Link>
        </>
    )
}