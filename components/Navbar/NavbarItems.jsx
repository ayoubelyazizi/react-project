import {Link, Image, Spacer} from "@chakra-ui/react"


const Links = () => {
    return (
        <>
            <Link px='3' h="100%" textAlign='center' pt='12px' textDecoration='none' _hover={{background: "red", color: "white"}}>
                <i class="fas fa-home"></i> HOME</Link>
            <Link px='3' h="100%" textAlign='center' pt='12px' textDecoration='none' _hover={{background: "red", color: "white"}}>
                <i class="fas fa-clipboard-list"></i> CATALOGUE</Link>
            <Spacer />
            <Link px='3' h="100%" textAlign='center' pt='12px' color='whiteAlpha.900' background='red' textDecoration='none' _hover={{background: "red", color: "white"}}>
                <i class="far fa-address-book"></i> CONTACTS</Link>
        </>
    )
}

const Logo = () => {
    return(
        <>
            <Image src='/logo-almalux.png'></Image>
        </>
    )
}

export {
    Links,
    Logo
}