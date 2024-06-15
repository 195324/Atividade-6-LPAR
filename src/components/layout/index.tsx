import { Flex } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode
}


export default function Layout(props: Props){
    const {children} = props
    return(
        <Flex flexDirection='column' w='100%' m='auto'>
            <div>Topo</div>
            {children}
            <div>Rodapé</div>
        </Flex>
    )
}