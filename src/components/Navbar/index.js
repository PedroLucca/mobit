import React from "react";
import { logout } from "../../services/auth";
import { useNavigate } from 'react-router';

import {
  chakra,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
} from "@chakra-ui/react";


export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  const handleSobre = () => {
    navigate('/sobre');
  }

  const handleList = () => {
    navigate('/listar');
  }
  const handleRegister = () => {
    navigate('/cadastro');
  }

  return (
    <React.Fragment>
      <chakra.header
        bg={useColorModeValue("white", "gray.800")}
        w="100%"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        background={'#5e8cd1'}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/listar"
              title="Mobit listar"
              display="flex"
              alignItems="center"
            >
              
              <VisuallyHidden color={'blue.800'}>Mobit</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" color={'white'} display={{base:'none', md:'flex'}}>
                MobiT
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={"inline-flex"}
            >
              
              <Button  onClick={handleList} variant='ghost' color={'white'}>Listar</Button>
              <Button  onClick={handleRegister}  variant='ghost' color={'white'}>Cadastrar</Button>
              <Button  onClick={handleSobre} variant='ghost' color={'white'}>Sobre</Button>
            </HStack>
            <Button onClick={handleLogout} variant='outline' color={'white'}>
              Logout
            </Button>
            
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}