import {
    Button,
    Stack,
    Text
  
  } from "@chakra-ui/react";

  import { useNavigate } from 'react-router';
  import { BiLogOut } from "react-icons/bi";
  
  const Logout = () => {

    const navigate = useNavigate();
  
      function Deslogar(e){
        navigate('/login');
      }
  
      return (
        <Stack maxW={'8rem'} p={'0.8rem'} alignSelf='end'>
        <Button colorScheme='blue' onClick={Deslogar}>
          <Stack spacing={'5px'} direction='row'><BiLogOut/><Text fontSize={'15px'}>Logout</Text></Stack>
        </Button>
        
      </Stack>
      )
    }
  
    export default Logout;