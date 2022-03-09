import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Link,
    Image,
    Flex,
    ButtonGroup,
    IconButton,
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub } from 'react-icons/fa';
  import Blur from '../Blur';
  import homeImg from '../../assets/eu_azul.svg';
  import {motion} from 'framer-motion';

  
const Intro = () => {
    return (
        <Box id="intro">
          <Container
            as={SimpleGrid}
            maxW={'7xl'}
            maxH={'3x1'}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, lg: 16 }}
            py={'6rem'}
            
            background={'white.900'}
          >
            <Stack spacing={{ base: 5, md: 10 }} ml={'2rem'}>
              <Heading
                lineHeight={1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text mb="2" fontSize="md" fontWeight="bold" letterSpacing="wide">
                  Oi, meu nome é
                </Text>
                <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .2,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  
                },
              }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.3 },
              }}>
                <Text
                  mb="2"
                  w="full"
                  paddingBottom="5px"
                  bgClip="text"
                  bgGradient="linear(to-r,#5299D3,#C0FDFB)"
                  fontWeight="extrabold"
                  bgSize="200% auto"
                >
                  Pedro Lucca.
                </Text>
                </motion.div>
                <Text fontSize="md" lineHeight={1.1} letterSpacing="wider">
                  Eu sou aluno de ciência da computação na Universidade Federal do Píauí, e estou atualmente no meu sétimo período.
                  Gosto bastante de programar e sempre tento aprender sobre novas tecnologias. Atuo como desenvolvedor Fullstack,
                  e o que mais gosto de usar atualmente é ReactJS, NodeJS, NextJS e Python.
                </Text>
              </Heading>
              <Stack direction={{ base: 'row', sm: 'row' }} spacing={4}>
                
                <Link
                  target="_blank"
                  rel="noopener"
                  href={
                    'https://drive.google.com/file/d/1aCIQV_ypczstZO8xOA_fWxqnnlvhO02d/view?usp=sharing'
                  }
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button variant="solid" size="md">
                    Currículo
                  </Button>
                </Link>
              </Stack>
              <ButtonGroup spacing="6">
                <Link href={'https://github.com/PedroLucca'}>
                  <IconButton
                    variant="outline"
                    aria-label="Go to Github Profile"
                    fontSize="20px"
                    icon={<FaGithub />}
                    isRound="true"
                  ></IconButton>
                </Link>
                <Link
                  rel="noopener"
                  href={'https://www.linkedin.com/in/pedro-lucca-dev'}
                >
                  <IconButton
                    variant="outline"
                    aria-label="Ir para o perfil do LinkedIn"
                    fontSize="20px"
                    isRound="true"
                    icon={<FaLinkedin />}
                  ></IconButton>
                </Link>
              </ButtonGroup>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Box
                position={'relative'}
                height={'380px'}
                // rounded={'2xl'}
                // boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}
              >
                <Image
                  htmlWidth="494px"
                  htmlHeight="521px"
                  alt={'Pedro_Lucca'}
                  w={'100%'}
                  h={'100%'}
                  align={'center'}
                  src={homeImg}
                />
              </Box>
            </Flex>
          </Container>
          <Blur
            position={'absolute'}
            top={-10}
            left={-10}
            style={{ filter: 'blur(70px)' }}
            zIndex={-2}
          />
        </Box>
      );
  };

  export default Intro;