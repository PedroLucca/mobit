import {useState} from 'react';
import Logout from '../../components/Logout';
import Card from '../../components/Card';
import CardAPI from '../../components/CardApi';
import {
  Flex,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid, 
  FormControl,
  FormLabel,
  Select
} from "@chakra-ui/react";

import { AiOutlineSearch } from 'react-icons/ai';

const Listagem = () => {

    const [DataType, setDataType] = useState(2);

    const handleType = (e) => {
      setDataType(parseInt(e.target.value));
    }

    const [searchValue, SetInputValue] = useState('');

    const handleSearch = (e) => SetInputValue(e.target.value);

    let data_api = [
      {
        anoCenso: 2013,
        cod: 33062501,
        nome: "0101001 ESCOLA MUNICIPAL VICENTE LICINIO CARDOSO",
        codCidade: 3304557,
        "cidade": "RIO DE JANEIRO",
        "estado": "RJ",
        "regiao": "Sudeste",
        "situacaoFuncionamento": 1,
        "dependenciaAdministrativa": 3,
        "idebAI": 0.0,
        "idebAF": 4.900000095367432,
        "enemMediaGeral": 0.0,
        "situacaoFuncionamentoTxt": "Em atividade",
        "dependenciaAdministrativaTxt": "Municipal"
      },
      {
        anoCenso: 2013,
        cod: 33062439,
        nome: "0101003 ESCOLA MUNICIPAL DARCY VARGAS",
        codCidade: 3304557,
        "cidade": "RIO DE JANEIRO",
        "estado": "RJ",
        "regiao": "Sudeste",
        "situacaoFuncionamento": 1,
        "dependenciaAdministrativa": 3,
        "idebAI": 4.300000190734863,
        "idebAF": 0.0,
        "enemMediaGeral": 0.0,
        "situacaoFuncionamentoTxt": "Em atividade",
        "dependenciaAdministrativaTxt": "Municipal"
      },
      {
        anoCenso: 2013,
        cod: 33062420,
        nome: "0101004 ESCOLA MUNICIPAL BENJAMIN CONSTANT",
        codCidade: 3304557,
        "cidade": "RIO DE JANEIRO",
        "estado": "RJ",
        "regiao": "Sudeste",
        "situacaoFuncionamento": 1,
        "dependenciaAdministrativa": 3,
        "idebAI": 4.300000190734863,
        "idebAF": 4.099999904632568,
        "enemMediaGeral": 0.0,
        "situacaoFuncionamentoTxt": "Em atividade",
        "dependenciaAdministrativaTxt": "Municipal"
      },
      {
        anoCenso: 2013,
        cod: 33062455,
        nome: "0101005 ESCOLA MUNICIPAL GENERAL MITRE",
        codCidade: 3304557,
        "cidade": "RIO DE JANEIRO",
        "estado": "RJ",
        "regiao": "Sudeste",
        "situacaoFuncionamento": 1,
        "dependenciaAdministrativa": 3,
        "idebAI": 6.0,
        "idebAF": 0.0,
        "enemMediaGeral": 0.0,
        "situacaoFuncionamentoTxt": "Em atividade",
        "dependenciaAdministrativaTxt": "Municipal"
      },
      {
        anoCenso: 2013,
        cod: 33062447,
        nome: "0101006 ESCOLA MUNICIPAL FRANCISCO BENJAMIM GALLOTI",
        codCidade: 3304557,
        "cidade": "RIO DE JANEIRO",
        "estado": "RJ",
        "regiao": "Sudeste",
        "situacaoFuncionamento": 1,
        "dependenciaAdministrativa": 3,
        "idebAI": 5.199999809265137,
        "idebAF": 0.0,
        "enemMediaGeral": 0.0,
        "situacaoFuncionamentoTxt": "Em atividade",
        "dependenciaAdministrativaTxt": "Municipal"
      }
    ];

    

    const dataList = [
        {
          nome: "Unidade Escolar Professor Darcy Araújo",
          diretor: "Ana Célia",
          localizacao: "Urbano",
          turnos: ['M', 'T']
        },
        {
          nome: "Unidade Escolar Professor Darcy Araújo",
          diretor: "Francisca Domingas",
          localizacao: "Rural",
          turnos: ['I']
        },
        {
          nome: "Unidade Petrônio Portella",
          diretor: "Morgana Ribeiro",
          localizacao: "Rural",
          turnos: ['T', 'N']
        }
      ];

      

  return (
    <Stack 
    width="100wh"
    height="100vh"
    backgroundColor="gray.100">
      <Logout/>
      
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
        direction={'row'} 
        minWidth={'100%'} 
        alignItems={'top'}>

        <Stack maxH={'50%'} minW={'20%'} mr={'2rem'} ml={'1.5rem'}>
          <Stack>
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
          
        </Stack>

          <SimpleGrid columns={[1, 3, 1, 3]} spacing='10px'  maxH={'100%'} maxW={'70%'}>
            {(DataType===2) ? 
                    dataList.map(function (data) {
                      
                      const { nome, diretor, localizacao, turnos } = data;
                      if(nome.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))){
                        
                          return (
                            <Card
                              nome={nome}
                              diretor={diretor}
                              localizacao={localizacao}
                              turnos={turnos}
                            />
                          );
                      }
                      return <></>})
                  : data_api.map(function (data) {
                    
                    const { nome, anoCenso, cod, codCidade, cidade,  estado, regiao, situacaoFuncionamento, dependenciaAdministrativa, situacaoFuncionamentoTxt, dependenciaAdministrativaTxt } = data;
                    if(nome.toLowerCase().normalize("NFD").includes(searchValue.toLowerCase().normalize("NFD"))){
                        
                        return (
                          <CardAPI
                          nome={nome}
                          anoCenso={anoCenso}
                          cod={cod}
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
          </SimpleGrid>

          
        </Stack>
      
    
    </Flex>
    </Stack>
  );
};

export default Listagem;
