import {
    Box,
    chakra,
    Heading,
    Flex,
    Text,
    UnorderedList,
    ListItem ,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Features from '../Features';

  
  export default function Projeto() {
    return (
      <Box  background='#4ca1d9' >
      
      <Flex
        p={16}
        paddingBottom={0}
        style={{textAlign:"center",scrollMarginTop:50}} id="token" pt={2}
        w="full"
        justifyContent="center"
        alignItems="center"
        
      >
        <Box   
          px={8}
          py={8}
          mx="auto"
        >
            <Box >
            <Heading
        fontWeight={600}
        paddingBottom={5}
        fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
        <Text
          fontWeight={'extrabold'}
          color='white'
          >
          Sobre o projeto...
        </Text>
                    
      </Heading> 
            </Box>
            <Box order={{ base: 0, md: 2 }}>            
              <chakra.p
                mb={1}
                textAlign={{ base: "justify", sm: "justify" }}
                color='white'
                fontSize={{ md: "md" }}
              >
              O "MobiT" é um aplicativo Web totalmente responsivo, feito para se conter os requisitos necessários para o teste seletivo da empresa Mobieduca.me.
              </chakra.p>
  
              
            <UnorderedList paddingLeft="3rem">
                <ListItem fontSize="md" textAlign={"left"} color='white'> O aplicativo possui quatro telas no total: "/login", "/listar", "/sobre" e "/cadastro".</ListItem>
                <ListItem fontSize="md" textAlign={"left"} color='white'> O aplicativo faz comunicação com uma API Rest.</ListItem>
                <ListItem fontSize="md" textAlign={"left"} color='white'> O sistema possui uma funcionalidade de autenticação por token de usuário.</ListItem>
            </UnorderedList>
  
              <chakra.p
                mb={5}
                textAlign={{ base: "justify", sm: "justify" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
              </chakra.p>
 
            </Box>
            
                <Features/>
                
            </Box>
      </Flex>
      </Box>
    );


    
  }