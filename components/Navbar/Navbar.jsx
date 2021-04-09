import {Flex} from "@chakra-ui/react"
import {Links, Logo} from './NavbarItems'


const Navbar = () => {
    return (

        <Flex className='navbar' w='100wv' h='70px' bg='transparent'>
            <Logo />
            <Links />
        </Flex>

    )
}

export default Navbar
