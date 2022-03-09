import {
    Button,
    Stack,
    Text
  
  } from "@chakra-ui/react";

  import { useNavigate } from 'react-router';
  import { BiLogOut } from "react-icons/bi";
  import { logout } from "../../services/auth";
  
  const Logout = () => {

    const navigate = useNavigate();

  
      const handleLogout = () => {
        logout();
        navigate('/login');
      }
  
      return (
        <Stack maxW={'8rem'} p={'0.8rem'} alignSelf='end'>
        <Button colorScheme='blue' onClick={handleLogout}>
          <Stack spacing={'5px'} direction='row'><BiLogOut/><Text fontSize={'15px'}>Logout</Text></Stack>
        </Button>
        
      </Stack>
      )
    }
  
    export default Logout;