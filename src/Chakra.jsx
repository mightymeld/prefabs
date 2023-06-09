import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Square,
  Stack,
  Text,
  VStack,
  Spacer,
  Container,
  Grid,
  SimpleGrid,
  AspectRatio,
  Wrap,
  Input,
  NumberInput,
  RadioGroup,
  Select,
  Textarea,
  Tabs,
  Accordion,
  Link,
  Icon,
  GridItem,
  Radio,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  AccordionIcon,
  WrapItem,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/react'

export function _Box() {
  return (
    <Box bg="tomato" w="100%" p={4} color="white">
      This is the Box
    </Box>
  )
}

export function _Stack() {
  return (
    <Stack direction={['column', 'row']} spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </Stack>
  )
}

export function _HStack() {
  return (
    <HStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
  )
}

export function _VStack() {
  return (
    <VStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </VStack>
  )
}

export function _Flex() {
  return (
    <Flex color="white">
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      <Box flex="1" bg="tomato">
        <Text>Box 3</Text>
      </Box>
    </Flex>
  )
}

export function _Center() {
  return (
    <Center bg="tomato" h="100px" color="white">
      This is the Center
    </Center>
  )
}

export function _Text() {
  return <Text>Text</Text>
}

export function _Heading() {
  return <Heading>Heading</Heading>
}

export function _Button() {
  return <Button variant="primary">Button</Button>
}

export function _Image() {
  return <Image src="https://picsum.photos/300/200" alt="Sample Image" />
}

export function _Divider() {
  return <Divider orientation="horizontal" />
}

export function _Spacer() {
  return <Spacer />
}

export function _Container() {
  return (
    <Container maxW="2xl" bg="blue.600" centerContent>
      <Box padding="4" bg="blue.400" color="black" maxW="md">
        There are many benefits to a joint design and development system. Not only does it bring
        benefits to the design team, but it also brings benefits to engineering teams. It makes sure
        that our experiences have a consistent look and feel, not just in our design specs, but in
        production.
      </Box>
    </Container>
  )
}

export function _Grid() {
  return (
    <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem rowSpan={2} colSpan={1} bg="tomato" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  )
}

export function _SimpleGrid() {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  )
}

export function _AspectRatio() {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  )
}

export function _Wrap() {
  return (
    <Wrap>
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  )
}

export function _Input() {
  return <Input placeholder="Basic usage" />
}

export function _NumberInput() {
  return (
    <NumberInput defaultValue={15} min={10} max={20}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export function _RadioGroup() {
  return (
    <RadioGroup defaultValue="1">
      <Stack>
        <Radio value="1" isDisabled>
          Checked
        </Radio>
        <Radio value="2">Unchecked</Radio>
        <Radio value="3">Unchecked</Radio>
      </Stack>
    </RadioGroup>
  )
}

export function _Select() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  )
}

export function _Textarea() {
  return <Textarea placeholder="Here is a sample placeholder" />
}

export function _Tabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export function _Accordion() {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export function _Link() {
  return (
    <Link href="https://chakra-ui.com" isExternal>
      Chakra Design system
    </Link>
  )
}

export function _Icon() {
  return (
    <Icon viewBox="0 0 200 200" color="red.500">
      <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  )
}
