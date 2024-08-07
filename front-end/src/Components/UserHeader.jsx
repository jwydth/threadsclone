import React from "react";
import {
  Box,
  VStack,
  Flex,
  Avatar,
  Text,
  Link,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = () => {
  const toast = useToast();
  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Coppied.",
        description: "Profile link coppied.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };
  return (
    <VStack gap={"4"} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zuckerberg
          </Text>
          <Flex gap={"2"} alignItems={"center"}>
            <Text fontSize={"sm"}>markzuckerberg</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={"1"}
              borderRadius={"full"}
            >
              thread.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>

      <Text>Co-founder, executive chairman and CEO of Meta platform</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w={"1"} h={"1"} bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={"24"} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={"24"} cursor={"pointer"} />
                <Portal>
                  <MenuList bg={"gray.dark"}>
                    <MenuItem bg={"gray.dark"} onClick={copyUrl}>
                      Copy link
                    </MenuItem>
                  </MenuList>
                </Portal>
              </MenuButton>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={"1"}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb={"3"}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex
          flex={"1"}
          borderBottom={"1px solid gray"}
          color={"gray.light"}
          justifyContent={"center"}
          pb={"3"}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
