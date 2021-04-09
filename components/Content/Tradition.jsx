import {Flex, Text, Image, Center, Box, Heading, Spacer} from '@chakra-ui/react'

const Tradition = () => {
    return (
        <Flex flexDirection='column' paddingTop='40px' paddingBottom='40px'>
            <Heading textAlign='center' as='h2' fontFamily='dincond' fontSize='100px'>A TRADITION OF</Heading>
            <Center>
                <Flex flexDirection='row' w='50vw' paddingTop='50px'>
                    <Image src='./excellence.jpg' h="300px" w="600px" paddingRight='20px' />
                    <Text fontFamily='dincond' textTransform='uppercase' fontSize='1.2rem'>

                        <Heading color='#E60003' fontFamily='dincond' fontSize='4xl'>EXCELLENCE</Heading>

                        ON NE FABRIQUE LES MEILLEURS OUTILS QU'AVEC LES MEILLEURES USINES
                        Quel que soit leur domaine d'expertise, nos centres de production mettent en oeuvre les technologies les plus avancées.
                        Cette excellence garantit la fiabilité de vos outils FACOM à chaque instant.
                        La flexibilité de nos usines européennes nous permet de vous apporter des solutions de proximité dans des délais courts.</Text>
                </Flex>
            </Center>

            <Center>
                <Flex flexDirection='row' w='50vw' paddingTop='50px'>
                    <Text fontFamily='dincond' textTransform='uppercase' fontSize='1.2rem'>

                        <Heading color='#E60003' fontFamily='dincond' fontSize='4xl'>INNOVATION</Heading>

                        Vos univers de travail évoluent chaque jour. Les technologies nouvelles transforment vos métiers. Les centres de recherche FACOM anticipent en permanence l'émergence de ces technologies et les outils dont vous aurez besoin demain.
                        Nouveaux concepts, science des matériaux, process innovants, progrès dans les méthodes... tout est mis en oeuvre pour vous proposer les outils les mieux adaptés et répondant au plus haut niveau d'exigence professionnelle.</Text>

                    <Image src='./innovation.jpg' h="300px" w="600px" paddingLeft='20px' />
                </Flex>
            </Center>

            <Center>
                <Flex flexDirection='row' w='50vw' paddingTop='50px'>
                    <Image src='./quality.jpg' h="300px" w="600px" paddingRight='20px' />
                    <Text fontFamily='dincond' textTransform='uppercase' fontSize='1.2rem'>

                        <Heading color='#E60003' fontFamily='dincond' fontSize='4xl'>QUALITY</Heading>

                        Testés dans des conditions extrêmes, les outils FACOM bénéficient d'une garantie d'échange ou de réparation gratuite, sans limitation dans le temps. Le réseau de distributeurs FACOM est chargé d'appliquer cette garantie pour vous, principalement par échange standard immédiat.</Text>

                </Flex>
            </Center>
        </Flex>
    )
}

export default Tradition