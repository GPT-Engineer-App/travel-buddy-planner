import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Stack, Grid, Image, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, Select, Textarea, useToast } from "@chakra-ui/react";
import { FaSearch, FaHotel, FaBus, FaUtensils, FaUser, FaUsers, FaCog } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [loginType, setLoginType] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const toast = useToast();

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const handleLogin = () => {
    // TODO: Implement login functionality
    console.log("Login type:", loginType);
    console.log("Email:", email);
    console.log("Password:", password);
    toast({
      title: "Login Successful",
      description: `Logged in as ${loginType}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleReviewSubmit = () => {
    // TODO: Implement review submission
    console.log("Review text:", reviewText);
    console.log("Review rating:", reviewRating);
    toast({
      title: "Review Submitted",
      description: "Thank you for your review!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setReviewText("");
    setReviewRating(0);
  };

  return (
    <Box>
      {/* Header */}
      <Box bg="blue.500" py={8} px={12}>
        <Heading as="h1" size="xl" color="white">
          Travel Planner
        </Heading>
        <Text color="white" mt={2}>
          Plan your dream vacation with ease
        </Text>
        <Stack direction="row" mt={6}>
          <Input placeholder="Search hotels, transport, attractions..." size="lg" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" onClick={handleSearch}>
            Search
          </Button>
        </Stack>
      </Box>

      {/* Main Content */}
      <Grid templateColumns="repeat(3, 1fr)" gap={8} p={12}>
        {/* Hotels */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Hotels
          </Heading>
          <Image src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb218ZW58MHx8fHwxNzEzMjAyNzkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hotel" mb={4} />
          <Text>Discover and book amazing hotels for your stay.</Text>
          <Button leftIcon={<FaHotel />} colorScheme="blue" mt={4}>
            Browse Hotels
          </Button>
        </Box>

        {/* Transport */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Transport
          </Heading>
          <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXN8ZW58MHx8fHwxNzEzMjAyNzkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Transport" mb={4} />
          <Text>Find convenient transportation options for your trip.</Text>
          <Button leftIcon={<FaBus />} colorScheme="green" mt={4}>
            Explore Transport
          </Button>
        </Box>

        {/* Attractions */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Attractions
          </Heading>
          <Image src="https://images.unsplash.com/photo-1564356652943-f241b69e1cc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwYXR0cmFjdGlvbnxlbnwwfHx8fDE3MTMyMDI3OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Attraction" mb={4} />
          <Text>Discover exciting attractions and plan your itinerary.</Text>
          <Button leftIcon={<FaUtensils />} colorScheme="orange" mt={4}>
            Explore Attractions
          </Button>
        </Box>
      </Grid>

      {/* User Section */}
      <Box bg="gray.100" py={12} px={12}>
        <Tabs isFitted variant="enclosed" index={selectedTab} onChange={(index) => setSelectedTab(index)}>
          <TabList>
            <Tab>
              <FaUser /> User Login
            </Tab>
            <Tab>
              <FaUsers /> Business Login
            </Tab>
            <Tab>
              <FaCog /> Admin Login
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading as="h2" size="lg" mb={4}>
                User Login
              </Heading>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
            </TabPanel>
            <TabPanel>
              <Heading as="h2" size="lg" mb={4}>
                Business Login
              </Heading>
              <FormControl id="loginType" mb={4}>
                <FormLabel>Login Type</FormLabel>
                <Select value={loginType} onChange={(e) => setLoginType(e.target.value)}>
                  <option value="hotel">Hotel</option>
                  <option value="transport">Transport Agency</option>
                  <option value="attraction">Attraction</option>
                  <option value="travel-agency">Travel Agency</option>
                </Select>
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
            </TabPanel>
            <TabPanel>
              <Heading as="h2" size="lg" mb={4}>
                Admin Login
              </Heading>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Review Section */}
      <Box py={12} px={12}>
        <Heading as="h2" size="lg" mb={4}>
          Leave a Review
        </Heading>
        <FormControl id="reviewText" mb={4}>
          <FormLabel>Review Text</FormLabel>
          <Textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
        </FormControl>
        <FormControl id="reviewRating" mb={4}>
          <FormLabel>Rating</FormLabel>
          <Select value={reviewRating} onChange={(e) => setReviewRating(parseInt(e.target.value))}>
            <option value={0}>Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handleReviewSubmit}>
          Submit Review
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.200" py={8} px={12} textAlign="center">
        <Text>&copy; 2023 Travel Planner. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
