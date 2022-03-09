import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { SiChakraui } from 'react-icons/si';


const Feature = (props) => {
  return (
    <Stack alignItems="center" border='solid' borderColor='white' p={8} borderWidth='2px' borderRadius='5px'>
      <Flex
        
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {props.icon}
      </Flex>
      <Text fontWeight={600} color={'white'}>{props.title}</Text>
      <Text color={'white'}>{props.text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature 
          icon={<Icon as={FaReact} w={10} h={10} color={'#16b9f5'}/>}
          title={'React JS'}
          text={<Text textAlign='justify' letterSpacing="tight">
            {"O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. O diferencial do React é ser rápida, escalável e simples."}
        </Text>
          }
          
        />
        <Feature
          icon={<Icon as={CgArrowsExchangeV} w={10} h={10} color={'#9416f5'}/>}
          title={"Axios"}
          text={<Text textAlign='justify' letterSpacing="tight">
                {"O Axios é um pacote para NodeJS, que basicamente possibilita a comunicação entre o MobiT e a API REST que contêm os dados presentes no site."}
            </Text>
          }
        />
        <Feature
          icon={<Icon as={SiChakraui} w={10} h={10} color={'#15e89b'}/>}
          title={"Chakra UI"}
          text={<Text textAlign='justify' letterSpacing="tight"> 
            {"Chakra UI é uma biblioteca de componentes simples e acessível, ela é utilizada para se facilitar a estilização do site em questão de apelo visual e responsividade."}
        </Text>}
        />
      </SimpleGrid>
    </Box>
  );
}