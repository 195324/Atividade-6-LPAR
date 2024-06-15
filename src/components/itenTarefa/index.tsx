import { Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import styles from './inputDados.module.css'

interface ItemTabela{
    id: number
    title: string
    completed: boolean
}


export default function ItemTarefa(){
    const[itemtarefas, setItemTarefas] = useState<ItemTabela[]>([])

    function atualizarTarefa(){
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task')
        .then((dados) => dados.json())
        .then((itemtarefas) => setItemTarefas(itemtarefas))
    }



    useEffect(()=>{
        atualizarTarefa()
    },[])

    return (
                <Box  
                    w={{base:'100%', sm:'100%', md: '50%'}} 
                    mt="7px" mb='7px' p='5px' 
                    borderRadius='lg' borderWidth={'2px'}
                    bg='lightgray'>
                    <ul className={styles.tabelaFormatacao}>
                        {
                            itemtarefas.map(itemtarefas => (
                                <li key={itemtarefas.id}>
                                    <p>{itemtarefas.title}</p> 
                                    <Button bg='red' color='white'>{itemtarefas.completed ? 'Feita' : 'Pendente'}</Button> 
                                    <Button bg='red' color='white'>Excluir</Button>
                                </li>
                            ))
                        }
                    </ul>    
                    
                </Box>
    )
}
