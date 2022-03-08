import React from "react";
import {
  Box,
  Text,
  Stack,
  Center,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function CardAPI(props) {
  const { nome, cidade,  estado, situacaoFuncionamentoTxt, dependenciaAdministrativaTxt} = props;

  return (
    <Center py={6} maxW={{base: 'sm', large: 'md'}}>
      <Box
        maxW={'100%'}
        p={4}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        >
        
        <Stack minH={'10rem'} maxH={'10rem'}>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            API
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1.2rem'}
            fontFamily={'body'}
            minH={'5.5rem'}
            noOfLines={3}
            textAlign={'left'}>
            
            {nome}
          </Heading>
          <Text color={'gray.500'}>
            Situação: {situacaoFuncionamentoTxt}
          </Text>
        </Stack>
        <Stack direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={300}>Localização: {cidade} - {estado}</Text>
            <Text color={'gray.500'}>Administração: {dependenciaAdministrativaTxt}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default CardAPI;
