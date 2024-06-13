import { Container, Box, VStack, HStack, Image, Text, Button } from "@chakra-ui/react";

const user = {
  username: "john_doe",
  userImage: "https://via.placeholder.com/150",
  bio: "Just a regular guy who loves coding and coffee.",
  posts: [
    {
      id: 1,
      postImage: "https://via.placeholder.com/500",
      caption: "Enjoying the sunny day!",
      likes: 120,
      comments: 45,
    },
    {
      id: 2,
      postImage: "https://via.placeholder.com/500",
      caption: "Had a great time at the beach.",
      likes: 200,
      comments: 60,
    },
  ],
};

const UserProfile = () => {
  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4} align="center">
        <Image borderRadius="full" boxSize="150px" src={user.userImage} alt={user.username} />
        <Text fontWeight="bold" fontSize="2xl">{user.username}</Text>
        <Text>{user.bio}</Text>
        <Button colorScheme="blue">Follow</Button>
      </VStack>
      <VStack spacing={8} mt={8}>
        {user.posts.map((post) => (
          <Box key={post.id} w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={post.postImage} alt="Post image" />
            <Box p={4}>
              <Text mt={2} fontWeight="bold">{post.likes} likes</Text>
              <Text mt={2}><span style={{ fontWeight: "bold" }}>{user.username}</span> {post.caption}</Text>
              <Button variant="link" mt={2}>View all {post.comments} comments</Button>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default UserProfile;