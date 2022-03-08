import React from "react";
import {
  Box,
  Text,
  Stack,
  Center,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function Card(props) {
  const { nome, diretor, localizacao, turnos } = props;

  return (
    <Center py={6} maxW={{base: 'sm', large: 'md'}}>
      <Box
        maxW={'100%'}
        p={6}
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
            CADASTRADO
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1.2rem'}
            fontFamily={'body'}
            minH={'5.5rem'}
            noOfLines={3}
            textTransform="uppercase"
            >
            {nome}
          </Heading>
          <Text color={'gray.500'}
          noOfLines={1}>
            Diretor(a): {diretor}
          </Text>
        </Stack>
        <Stack direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={300}>Localização {localizacao}</Text>
            <Text color={'gray.500'}>Turnos: <Stack direction={'row'}>{turnos.map((turno) => <Text color={'gray.500'}>{turno}</Text> )}</Stack></Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Card;
