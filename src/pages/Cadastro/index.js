import {useState} from 'react';
import ModalCadastro from '../../components/Modal';
import Logout from '../../components/Logout';
import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Box,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,

} from "@chakra-ui/react";

const Cadastro = () => {
    const [input_school, setInputSchool] = useState('')
    const [input_principal, setInputPrincipal] = useState('')
    const [success, setData] = useState(false)
    const [location, setLocation] = useState(0)
    
    const [checkedTurnosIds, setCheckedTurnosIds] = useState([]);
    const checkboxes = [-1,-1 ,-1,-1]

    const handleInputChangeSchool = (e) => setInputSchool(e.target.value)
    const handleInputChangePrincipal = (e) => setInputPrincipal(e.target.value)

    const handleSubmit = (e) => {
      const escola = {
        escola: input_school,
        diretor: input_principal,
        localizacao: location,
        turnos: checkedTurnosIds
      }
        console.log(escola)
        e.preventDefault();
        setData(true);
    }

    const PushArray = (e) => {
      setCheckedTurnosIds(Turnos => [...Turnos, e.target.value]);
      checkboxes[parseInt(e.target.id)] = parseInt(e.target.id);
    }
    
    const PopArray = (e) => {
      setCheckedTurnosIds(checkedTurnosIds.filter(turno => turno !== e.target.value));
      checkboxes[parseInt(e.target.id)] = -1;

    }

  return (
    <Stack 
    width="100wh"
    height="100vh"
    backgroundColor="gray.100">
      <Logout/>
      
    <Flex
      flexDirection="column"
      width="100wh"
      height="70vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
    
    <Stack 
    flexDir="column"
    mb="2"
    justifyContent="center"
    alignItems="center">
        
        <Heading color="blue.400" mb={'30px'}>Cadastro</Heading>
        
        <Box minW={{base: "90%", md: "468px", }}>
            
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius='5px'
            >
            <FormControl isRequired={!(input_school)}>
                <FormLabel htmlFor='name'>Nome da escola</FormLabel>
                <Input
                    id='name_school'
                    type='name'
                    value={input_school}
                    onChange={handleInputChangeSchool}
                    placeholder='Ex: Unidade Escolar Professor Darcy Araújo'
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='name'>Nome do diretor</FormLabel>
                <Input
                    id='name'
                    type='name'
                    value={input_principal}
                    onChange={handleInputChangePrincipal}
                    placeholder='Ex: Renato Félix'
                />
                
            </FormControl>
            <FormControl isRequired={(location === 0)}>
                <FormLabel htmlFor='name'>Localização da escola</FormLabel>
                <RadioGroup onChange={setLocation} value={location}>
                  <Stack spacing={[1, 4]} 
            direction={['column', 'row']} 
            >
                    <Radio value='1'>Urbano</Radio>
                    <Radio value='2'>Rural</Radio>
                  </Stack>
              </RadioGroup>
            </FormControl>
            
            <FormControl isRequired={!(checkedTurnosIds.length)}>
            <FormLabel>Turnos</FormLabel>
            
            <Stack spacing={[1, 4]} 
            direction={['column', 'row']} 
            >
                <CheckboxGroup>
                    <Checkbox onChange={checkboxes[0] !== -1 ? PopArray : PushArray} value='M' id='0'>Manhã</Checkbox>
                    <Checkbox onChange={checkboxes[1] !== -1 ? PopArray : PushArray} value='T' id='1'>Tarde</Checkbox>
                    <Checkbox onChange={checkboxes[2] !== -1 ? PopArray : PushArray} value='N' id='2'>Noite</Checkbox>
                    <Checkbox onChange={checkboxes[3] !== -1 ? PopArray : PushArray} value='I' id='3'>Integral</Checkbox>
                </CheckboxGroup>
            </Stack>
           
            
            </FormControl>
        
            <Button
            borderRadius={0}
            type="submit"
            variant="solid"
            colorScheme="blue"
            width="full"
            >
            Cadastrar
            </Button>
            </Stack>
          </form>
        </Box>
        {success ? <ModalCadastro/> : <></>}
    </Stack>
    </Flex>
    </Stack>
  );
};

export default Cadastro;
