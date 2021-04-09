import {Flex, Text, Image, Center, Box, Heading, Spacer} from '@chakra-ui/react'

const About = () => {
    return (
        <Flex flexDirection='column' paddingTop='40px' paddingBottom='40px' backgroundColor='#E8E9ED'>

            <Heading textAlign='center' as='h2' fontFamily='dincond' fontSize='100px'>ABOUT US</Heading>
            <Center>
                <Flex flexDirection='row' flexWrap='wrap' fontFamily='dincond' textTransform='uppercase' >

                    <Flex flexDirection='column' textAlign='center' paddingRight='60px'>
                        <Image src='./anonymity.png' w='240px' h='240px' paddingBottom='10px' />
                        <Heading fontFamily='dincond'>Who We Are ?</Heading>
                        <Text>ALMALUX S.A. , located in Belgium,</Text>
                        <Text>distributes a complete range of electrical</Text> 
                        <Text>and hand tools and industrial equipment.</Text> 
                    </Flex>

                    <Flex flexDirection='column' textAlign='center'>
                        <Image src='./travel.png' w='240px' h='240px' paddingBottom='10px' />
                        <Heading fontFamily='dincond'>Why Choose Us ?</Heading>
                        <Text>We are one of the most responsive</Text>
                        <Text>FACOM distributor in Europe</Text>
                    </Flex>

                    <Flex flexDirection='column' textAlign='center' paddingLeft='60px'>
                        <Image src='./target.png' w='240px' h='240px' paddingBottom='10px' />
                        <Heading fontFamily='dincond'>Our Mission</Heading>
                        <Text>To provide quality products and services</Text>
                        <Text>across the world</Text>
                    </Flex>


                </Flex>
            </Center>
        </Flex>
    )
}

export default About