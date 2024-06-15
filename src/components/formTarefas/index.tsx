import { Button, Input, interactivity } from "@chakra-ui/react"
import { useState } from "react"

interface FormTarefasProps {
    atualizarTarefas(): void
}


export default function FormTarefas({atualizarTarefas}:FormTarefasProps){
    const [titulo, setTitulo] = useState("")

    function cadastrar(){
        const novaTarefa = {
            title: titulo,
            completed: false
        }

        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaTarefa)
        })
        .then(() => atualizarTarefas())
    }
    return (
        <>
            <Input onChange={(evento) => {
                setTitulo(evento.target.value)
            }} 
            value={titulo}
            type='text'
            placeholder="titulo da tarefa"
            />
            <Button 
            onClick={cadastrar}
            colorScheme="green">
                Cadastrar
            </Button>
        </>
    )
}