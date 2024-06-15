import Layout from '../layout'
import { Box, Button, Checkbox, Input } from '@chakra-ui/react'

interface Props{
    children: React.ReactNode
}

export default function TableFeita({children}: Props){
    return(
        <Layout>
           <Box position='relative' padding='2px' >
                <h2>Inserir nova tarefa</h2>
                <Box w={{base:'100%', sm:'100%', md: '50%'}} display='flex' justifyContent='space-between'>
                    <Input placeholder='Digite um título da task' w='50%'/>
                    <Checkbox>Realizada?</Checkbox>
                    <Button bg='darkblue' color='white'>Inserir</Button>
                </Box>
                {children}
           </Box>
        </Layout>
        
    )
}