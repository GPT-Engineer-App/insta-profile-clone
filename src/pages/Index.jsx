import { Container, Box, VStack, HStack, Image, Text, Button, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const posts = [
  {
    id: 1,
    username: "john_doe",
    userImage: "https://via.placeholder.com/50",
    postImage: "https://via.placeholder.com/500",
    caption: "Enjoying the sunny day!",
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    username: "jane_smith",
    userImage: "https://via.placeholder.com/50",
    postImage: "https://via.placeholder.com/500",
    caption: "Had a great time at the beach.",
    likes: 200,
    comments: 60,
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={8}>
        {posts.map((post) => (
          <Box key={post.id} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <HStack p={4} alignItems="center">
              <Image borderRadius="full" boxSize="50px" src={post.userImage} alt={post.username} />
              <Text fontWeight="bold">{post.username}</Text>
            </HStack>
            <Image src={post.postImage} alt="Post image" />
            <Box p={4}>
              <HStack spacing={4}>
                <IconButton aria-label="Like" icon={<FaHeart />} />
                <IconButton aria-label="Comment" icon={<FaComment />} />
                <IconButton aria-label="Share" icon={<FaShare />} />
              </HStack>
              <Text mt={2} fontWeight="bold">{post.likes} likes</Text>
              <Text mt={2}><span style={{ fontWeight: "bold" }}>{post.username}</span> {post.caption}</Text>
              <Button variant="link" mt={2}>View all {post.comments} comments</Button>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;