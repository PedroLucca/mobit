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
    <Stack alignItems="center" bg={useColorModeValue('white', 'gray.200')} p={8} rounded={'md'} overflow={'hidden'}>
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
    <Box p={4} justifyContent={'center'} alignItems='center'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} alignContent='center' justifyContent={'center'}>
        <FeatureConsideracao 
          icon={<Icon as={MdOutlineReportProblem} w={10} h={10} color={'#801733'}/>}
          title={'Dificuldades'}
          text={<Text textAlign='justify' letterSpacing="tight">
            {"O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. O diferencial do React é ser rápida, escalável e simples."}
        </Text>
          }
          
        />
        <FeatureConsideracao
          icon={<Icon as={BsHandThumbsUp} w={10} h={10} color={'#3e7332'}/>}
          title={"Sugestões"}
          text={<Text textAlign='justify' letterSpacing="tight">
                {"O Axios é um pacote para NodeJS, que basicamente possibilita a comunicação entre o MobiT e a API REST que contêm os dados presentes no site."}
            </Text>
          }
        />

      </SimpleGrid>
    </Box>
  );
}