import { useNavigate } from 'react-router';
import { logout } from "../../services/auth";

import {
    Button,
    Stack,
    Text,
    Flex
  
  } from "@chakra-ui/react";
  
  const Logout = () => {

    const navigate = useNavigate();

  
      const handleLogout = () => {
        logout();
        navigate('/login');
      }
  
      return (
        <Stack maxW={'6rem'} p={'0.8rem'} alignSelf='self-end' >
        <Button colorScheme='blue' onClick={handleLogout} >
          <Flex spacing={'1rem'} ><Text fontSize={'15px'}>Logout</Text></Flex>
        </Button>
        
      </Stack>
      )
    }
  
    export default Logout;