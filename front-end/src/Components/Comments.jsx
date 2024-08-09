import React from "react";
import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const Comments = () => {
  // const [liked, setLiked] = React.useState(false);
  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src="/zuck-avatar.png" size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold">
              Winter
            </Text>
          </Flex>
          <Text>This is great</Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comments;
