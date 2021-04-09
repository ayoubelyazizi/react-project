import {Flex, Text, Image, Center, Box, Heading} from '@chakra-ui/react'

const Overlay = () => {
    return (
        <>
            <Flex className='overlay' w='100%' bg='blackAlpha.800' color='whiteAlpha.900' textTransform='uppercase' position='absolute' top='30%' flexDirection='column'>
                <Center>
                    <Image src='./facom.png' h='95px' w='250px'/>
                </Center>
                <Center>
                    <Box textAlign='center' fontSize='30px' fontFamily='dincond' >
                        <Heading as='h1' fontFamily='dincond' fontSize='50px'>GIVING THE WORLD THE BEST TOOLS TO PROGRESS</Heading> 
                        <Text>Whatever your job is, FACOM designs and develops the most</Text>
                        <Text> effective tools solutions to support your productivity and safety at work.</Text> 
                        <Text>From Automotive to Aeronautics, in every industrial sectors, FACOM</Text>
                        <Text> participates in each technological evolution by providing you the best tool</Text>
                    </Box>
                </Center>
            </Flex>
        </>
    )
}

export default Overlay