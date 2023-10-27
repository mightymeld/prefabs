import {
    AspectRatio,
    Avatar,
    Badge,
    Blockquote,
    Box,
    Button,
    Card,
    Checkbox,
    Code,
    Container,
    Em,
    Flex,
    Grid,
    Heading,
    Kbd,
    Link,
    Quote,
    RadioGroup,
    Section,
    Separator,
    Slider,
    Strong,
    Switch,
    Table,
    Tabs,
    Text,
    TextArea,
} from "@radix-ui/themes";

export function Aspect_Ratio() {
    return (
        <AspectRatio ratio={16 / 8}>
            <img
                src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                alt="A house in a forest"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--radius-2)',
                }}
            />
        </AspectRatio>
    )
}

export function _Avatar() {
    return (
        <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
        />
    )
}

export function _Badge() {
    return <Badge color="orange">In progress</Badge>
}

export function _Blockquote() {
    return <Blockquote>Blockquote</Blockquote>
}

export function _Box() {
    return <Box />
}

export function _Button() {
    return <Button variant="solid">Edit profile</Button>
}

export function _Card() {
    return (
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                />
                <Box>
                    <Text as="div" size="2" weight="bold">
                        Teodros Girmay
                    </Text>
                    <Text as="div" size="2" color="gray">
                        Engineering
                    </Text>
                </Box>
            </Flex>
        </Card>

    )
}

export function _Checkbox() {
    return <Checkbox defaultChecked />
}

export function _Code() {
    return <Code>Code</Code>
}

export function _Container() {
    <Container size="1" />
}

export function _Em() {
    return <Em>EM</Em>
}

export function _Flex() {
    return <Flex gap="3" />
}

export function _Grid() {
    return <Grid columns="3" gap="3" width="auto" />
}

export function _Heading() {
    return <Heading>Heading</Heading>
}

export function _Kbd() {
    return <Kbd>Shift + Tab</Kbd>
}

export function _Link() {
    return <Link>This is a link</Link>
}

export function _Quote() {
    return <Quote>Styles come and go. Good design is a language, not a style.</Quote>
}

export function _RadioGroup() {
    return (
        <RadioGroup.Root defaultValue="1">
            <Flex gap="2" direction="column">
                <Text as="label" size="2">
                    <Flex gap="2">
                        <RadioGroup.Item value="1" /> Default
                    </Flex>
                </Text>
                <Text as="label" size="2">
                    <Flex gap="2">
                        <RadioGroup.Item value="2" /> Comfortable
                    </Flex>
                </Text>
                <Text as="label" size="2">
                    <Flex gap="2">
                        <RadioGroup.Item value="3" /> Compact
                    </Flex>
                </Text>
            </Flex>
        </RadioGroup.Root>

    )
}

export function _Section() {
    return <Section />
}

export function _Separator() {
    return <Separator orientation="vertical" />
}

export function _Slider() {
    return <Slider defaultValue={[50]} />
}

export function _Strong() {
    return <Strong>stay positive</Strong>
}

export function _Switch() {
    return <Switch defaultChecked />
}

export function _Table() {
    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                    <Table.Cell>danilo@example.com</Table.Cell>
                    <Table.Cell>Developer</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>

    )
}

export function _Tabs() {
    return (
        <Tabs.Root defaultValue="account">
            <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <Box px="4" pt="3" pb="2">
                <Tabs.Content value="account">
                    <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>

                <Tabs.Content value="documents">
                    <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>

                <Tabs.Content value="settings">
                    <Text size="2">Edit your profile or update contact information.</Text>
                </Tabs.Content>
            </Box>
        </Tabs.Root>

    )
}

export function _Text() {
    return <Text>Text</Text>
}

export function _Textarea() {
    return <TextArea placeholder="Reply to comment…" />
}