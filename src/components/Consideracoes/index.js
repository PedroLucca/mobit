import {
  Box,
  chakra,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import FeaturesConsideracoes from '../FeaturesConsideracoes';
export default function Consideracoes() {

  return (
    <Box  background='white' >
    
    <Flex
      p={16}
      paddingBottom={0}
      style={{textAlign:"center",scrollMarginTop:50}} id="token" pt={2}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
      <Box   
        px={8}
        py={8}
        mx="auto"
      >
          <Box >
          <Heading
      fontWeight={600}
      paddingBottom={5}
      fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
      <Text
        fontWeight={'extrabold'}
        color='black.100'
        >
        Considerações
      </Text>
                  
    </Heading> 
          </Box>
          <Box order={{ base: 0, md: 2 }}>            
            <chakra.p
              mb={1}
              textAlign={{ base: "justify", sm: "justify" }}
              color='black.600'
              fontSize={{ md: "md" }}
            >
            O sistema foi desenvolvido em x dias úteis, e no período de desenvolvimento enfrentei certos momentos onde acredito que o programa poderia ser melhorado,
            e situações que me tiraram da zona de conforto e me fizeram aprender sobre novos assuntos.
            </chakra.p>


            <chakra.p
              mb={5}
              textAlign={{ base: "justify", sm: "justify" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
            </chakra.p>

          </Box>
          
              <FeaturesConsideracoes/>
              
          </Box>
    </Flex>
    </Box>
    
  );
}