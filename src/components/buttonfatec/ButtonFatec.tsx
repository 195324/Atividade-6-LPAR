import './ButtonFatec.css' 
import { Button } from '@chakra-ui/react'


interface Props{
    type: 'submit' | 'button' | 'reset'
    label: string
}

function ButtonFatec({type,label}:Props){


    return(
        <Button
        colorScheme='red' size='lg'
        type={type}> 
            {label} 
        </Button>
    )
}

export default ButtonFatec