import { useState } from "react";
import { Container, Box, VStack, Input, Button, Text, Image, useToast } from "@chakra-ui/react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected.",
        description: "Please select an image or video to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Implement the upload logic here
    toast({
      title: "Upload successful.",
      description: "Your file has been uploaded.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold">Upload Image or Video</Text>
        <Input type="file" accept="image/*,video/*" onChange={handleFileChange} />
        {preview && (
          <Box>
            <Text mt={2}>Preview:</Text>
            {selectedFile.type.startsWith("image/") ? (
              <Image src={preview} alt="Preview" maxH="300px" />
            ) : (
              <video controls src={preview} style={{ maxHeight: "300px" }} />
            )}
          </Box>
        )}
        <Button colorScheme="blue" onClick={handleUpload}>Upload</Button>
      </VStack>
    </Container>
  );
};

export default Upload;