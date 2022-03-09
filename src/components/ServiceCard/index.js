import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";

export const ServiceCard = () => {
  return (
    <Flex
      flexDirection="column"
      bg="yellow.50"
      p="40px"
      w="full"
      height="380px"
      justifyContent="space-between"
    >
      {//AQUI FALTA BOTAR UMA TAG ICON
      }
      <Box>
        <Heading color="blue.900" fontSize={28} letterSpacing="3px" pb="20px">
          oi
        </Heading>
        <Text color="blue.700">oi</Text>
      </Box>
      <Link color="blue.800">
        Explore more
        <Icon as={FiArrowUpRight} ml="10px" h={5} w={5} />
      </Link>
    </Flex>
  );
};