import {
    Text,
    Stack,
    Heading,
    Image,
    CardBody,
    Card,
    Center,
    CardFooter,
    Button,
    ButtonGroup,
    Flex,
    Input
} from "@chakra-ui/react";

import './style.css'


export function RedefinirSenhaCard() {
    return (
        <Card className="cadastro_card" backdropFilter='auto' backdropBlur='40px' ml='2%' mr='2%' border='1px' borderStartRadius='20px' borderEndRadius='20px' variant='outline'>
            <Center>
                <Heading size="md" fontSize="3.5rem" mt='10' color="white">
                    Redefinir Senha
                    <br /> <br />
                </Heading>
            </Center>

            <Center>

                <Stack className="stack" spacing={3} width='50%'>
                    <Input placeholder='Nova Senha' type='email' width='50%' />
                    <Input placeholder='Repetir Nova Senha' type='email' width='50%' />
                    <Button className="btn" colorScheme='green' bg='white' width='20%'>Enviar</Button>
                </Stack>

            </Center>
        </Card>
    )
}
