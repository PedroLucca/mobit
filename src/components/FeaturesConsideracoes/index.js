import { Box, 
    SimpleGrid, 
    Icon, 
    Text, 
    Stack, 
    Flex,
    useColorModeValue } from '@chakra-ui/react';

import { MdOutlineReportProblem } from 'react-icons/md';
import { BsHandThumbsUp } from 'react-icons/bs';


const FeatureConsideracao = (props) => {
  return (
    <Stack alignItems="center" bg={useColorModeValue('white', 'gray.200')} p={{base: 0, md: 8}} rounded={'md'} overflow={'hidden'}>
      <Flex
        
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'white'}
        mb={1}>
        {props.icon}
      </Flex>
      <Text fontWeight={600} color={'black'}>{props.title}</Text>
      <Text color={'black'}>{props.text}</Text>
    </Stack>
  );
};

export default function FeaturesConsideracoes() {
  return (
    <Box p={{base:0, md:4}} justifyContent={'center'} alignItems={'center'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignContent='center' justifyContent={'center'}>
        <FeatureConsideracao 
          icon={<Icon as={MdOutlineReportProblem} w={10} h={10} color={'#801733'}/>}
          title={'Dificuldades'}
          text={<Text textAlign='justify' letterSpacing="tight">
            {"Dentre os problemas encontrados na implementação cabe ressaltar a dificuldade em retirar alguns warnings que aparecem no console, referentes á biblioteca react-router-dom. Além disso, criar a estilização completamente responsiva foi um pouco desafiador, pesquisei bastante por novas configurações e propriedades de componentes que não conhecia e ajudaram bastante."}
        </Text>
          }
          
        />
        <FeatureConsideracao
          icon={<Icon as={BsHandThumbsUp} w={10} h={10} color={'#3e7332'}/>}
          title={"Sugestões"}
          text={<Text textAlign='justify' letterSpacing="tight">
                {"Com relação á conexão da API acredito que seria melhor fazer o projeto com uma API que não possua bloqueio do CORS para aplicações que rodam localmente (Ex: https://reqres.in/api/users)."}
            </Text>
          }
        />

      </SimpleGrid>
    </Box>
  );
}