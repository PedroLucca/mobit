import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Text,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { login } from "../../services/auth";
import users from '../../data/users.json';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [inputUser, setUser] = useState('');
  const [inputPassword, setUPassword] = useState('');
  const [errorLogin, setError] = useState(false);

  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setUPassword(e.target.value);
  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputUser,inputPassword);
      users.forEach((user) => {
        const { username, password } = user;
        if((username===inputUser)&&(password===inputPassword)){
            login();
            navigate('/listar');
        }
      setError(true);
      
      });
      
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Heading color="blue.400" mb={'30px'}>MobiT</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {errorLogin ? <Text textAlign="center" color={'red'} fontSize={'sm'}>
                   Nome de usuário ou senha inválidos, tente novamente...
                </Text> : <></>
                }
              <FormControl>
              
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="name" placeholder="Usuário" onChange={handleUserChange}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    onChange={handlePasswordChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? <AiOutlineEyeInvisible size={17}/> : <AiOutlineEye size={17}/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                   Esqueceu sua senha?
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
