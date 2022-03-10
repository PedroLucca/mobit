import {useState, useEffect} from 'react';
import Card from '../../components/Card';
import CardAPI from '../../components/CardApi';
import axios from '../../services/axios';
import Navbar from '../../components/Navbar';

import {
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid, 
  FormControl,
  FormLabel,
  Select,
  Spinner,
  Center
} from "@chakra-ui/react";

import { AiOutlineSearch } from 'react-icons/ai';


const Listagem = () => {

    const [DataType, setDataType] = useState(2);
    const [Loaded, setLoaded] = useState(false);

    const handleType = (e) => {
      setDataType(parseInt(e.target.value));
    }

    const [searchValue, SetInputValue] = useState('');
    const [apiSchools, setSchools] = useState([]);
    const [dataSchools, setDataSchool] = useState([]);

    const handleSearch = (e) => SetInputValue(e.target.value);

      useEffect(()=>{
        async function getSchools(){

          let data = (localStorage.getItem('Escolas'));

            data = JSON.parse(data);
            
            if(data){
              setDataSchool(data);
            }

            let route = `/api/escolas?nome=aplicacao`;


            try{
              const response = await axios.get(route);
              setSchools(response.data[1]);
              setLoaded(true);
            }catch (e){
              setLoaded(true);
            }
            
        }
        getSchools();
    }, []);

      

  return (

    <Stack 
    width="100wh"
    height="100vh"
    backgroundColor="gray.100">
      <Navbar/>
    <Flex
      flexDirection="column"
      width="100wh"
      
      backgroundColor="gray.100"
      
      alignItems="center"
    >
    
        <Stack >
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<AiOutlineSearch color='gray.300' />}
                />
                <Input type='tel' placeholder='Pesquise a escola' value={searchValue} onChange={handleSearch} />
            </InputGroup>
        </Stack>
        <Stack
          direction={{base: 'column', md:'row'}} 
          minWidth={'100%'} 
          alignItems={{base:'center', md:'flex-start'}}>

        <Stack maxH={'50%'} minW={'20%'} mr={'2rem'} ml={'1.5rem'}>
          
            <FormControl>
                        <FormLabel color="gray.600" fontWeight='bold' style={{textTransform:'uppercase'}}>
                          TIPO
                        </FormLabel>

                        <Select
                          name="options"
                          
                          size="md"
                          onChange={handleType}
                        >
                          <option value="2" >Cadastrado</option>
                          <option value="1">Api</option>
                        </Select>
            </FormControl>
          
        </Stack>
        <Center w='100%'>
        {Loaded ?
          <SimpleGrid columns={[1, 3]} spacing='10px'  maxH={'100%'} maxW={'70%'}>
            {(DataType===2) && (dataSchools!==undefined) ? 
                    dataSchools.map(function (data) {
                      
                      const { escola, diretor, localizacao, turnos } = data;
                      if(escola.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))){
                          return (
                            <Card
                              nome={escola}
                              diretor={diretor}
                              localizacao={localizacao}
                              turnos={turnos}
                            />
                          );
                      }
                      return <></>})
                  : apiSchools.map(function (data) {
                    const { nome, anoCenso, cod, codCidade, cidade,  estado, regiao, situacaoFuncionamento, dependenciaAdministrativa, situacaoFuncionamentoTxt, dependenciaAdministrativaTxt } = data;
                    if(nome.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))){
                        
                        return (
                          <CardAPI
                          key={cod}
                          nome={nome}
                          anoCenso={anoCenso}
                          codCidade={codCidade}
                          cidade={cidade}
                          estado={estado}
                          regiao={regiao}
                          situacaoFuncionamento={situacaoFuncionamento}
                          dependenciaAdministrativa={dependenciaAdministrativa}
                          situacaoFuncionamentoTxt={situacaoFuncionamentoTxt}
                          dependenciaAdministrativaTxt={dependenciaAdministrativaTxt}
                          />
                        );
                      }
                    return <></>})}
          </SimpleGrid> :
          <Stack mt={{base:'1rem', md:'6rem'}} mr={{base: '0rem', md:'2rem'}}>
            <Spinner
              label="Listando..."
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'/>
          </Stack>
          }
          </Center>
        </Stack>
      
    
    </Flex>
    </Stack>
    
  );
};

export default Listagem;
