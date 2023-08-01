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
  AccordionPanel,
  Switch,
} from "@chakra-ui/react";

export function _AspectRatio() {
  return <AspectRatio maxW="400px" ratio={4 / 3} />;
}

export function _Box() {
  return <Box w="100%" />;
}

export function _Button() {
  return <Button variant="primary">Button</Button>;
}

export function _Center() {
  return <Center />;
}

export function _Container() {
  return <Container maxW="2xl" bg="blue.600" centerContent />;
}

export function _Divider() {
  return <Divider orientation="horizontal" />;
}

export function _Flex() {
  return <Flex />;
}

export function _Grid() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    />
  );
}

export function _Heading() {
  return <Heading>Heading</Heading>;
}

export function _HStack() {
  return <HStack spacing="24px" />;
}

export function _Icon() {
  return (
    <Icon viewBox="0 0 200 200" color="red.500">
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
}

export function _Image() {
  return <Image src="https://picsum.photos/300/200" alt="Sample Image" />;
}

export function _Input() {
  return <Input placeholder="Basic usage" />;
}

export function _Link() {
  return (
    <Link href="https://chakra-ui.com" isExternal>
      Chakra Design system
    </Link>
  );
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
  );
}

export function _Radio() {
  return <Radio value="1" isDisabled />;
}

export function _RadioGroup() {
  return (
    <RadioGroup defaultValue="1">
      <Radio value="1" isDisabled />
    </RadioGroup>
  );
}

export function _Select() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
    </Select>
  );
}

export function _SimpleGrid() {
  return <SimpleGrid columns={[2, null, 3]} spacing="40px" />;
}

export function _Spacer() {
  return <Spacer />;
}

export function _Stack() {
  return <Stack direction={["column", "row"]} spacing="24px" />;
}

export function _Switch() {
  return <Switch />;
}

export function _Textarea() {
  return <Textarea placeholder="Here is a sample placeholder" />;
}

export function _Text() {
  return <Text>Text</Text>;
}

export function _VStack() {
  return <VStack spacing="24px" />;
}

export function _Wrap() {
  return (
    <Wrap>
      <WrapItem></WrapItem>
    </Wrap>
  );
}

export function __WrapItem() {
  return (
    <Wrap>
      <WrapItem></WrapItem>
    </Wrap>
  );
}
