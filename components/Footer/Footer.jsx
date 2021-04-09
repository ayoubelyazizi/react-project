import { Flex, Text, Spacer, color, Link, Image } from '@chakra-ui/react';

const Footer = () => {
    return(
        <>
            <Flex w='100wv' h='350px' bg='blackAlpha.900' padding='10px' fontSize='30px'>

                <Flex justifyContent='center' alignItems='center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.406051030357!2d4.693262015739562!3d50.675287479507084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17be4c369657d%3A0x4022e3e753c03b96!2sChemin%20des%20Cressonni%C3%A8res%203%2C%201325%20Chaumont-Gistoux!5e0!3m2!1sfr!2sbe!4v1616424679495!5m2!1sfr!2sbe" width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy">
                    </iframe>
                </Flex>

                <Spacer/>

                <Flex color="whiteAlpha.900" flexDirection='column' fontFamily='dincond' textTransform='uppercase'>
                    <Text color='#E60003' fontWeight='bold'>Almalux S.A.</Text>
                    <Text>Chemin des Cressonnières 3</Text>
                    <Text fontWeight='bold'>Chaumont-Gistoux 1325, Belgium</Text>
                </Flex>

                <Spacer/>

                <Flex color="whiteAlpha.900" flexDirection='column' fontFamily='dincond' textTransform='uppercase' >
                    <Text fontWeight='bold'>+ 32 10 45 45 63</Text>
                    <Link href='mailto:info@almalux.com'>info@almalux.com</Link>
                    <Text></Text>
                </Flex>

                <Spacer/>

                <Flex color="whiteAlpha.900" flexDirection='column' fontFamily='dincond' textTransform='uppercase'>
                    <Text fontWeight='bold'>Monday-Friday: 9am to 5pm</Text>
                    <Text>Saturday / Sunday: Closed</Text>
                    <Text></Text>
                </Flex>

            </Flex>
        </>
    )
}

export default Footer