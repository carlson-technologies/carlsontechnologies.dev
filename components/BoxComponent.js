import { motion } from "framer-motion"
import { useState } from 'react'
import {
    Flex,
    Heading,
    Text,
    Box,
    Link,
    Icon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function BoxComponent({ icon, title, description, href }) {
    const [opacity, changeOpacity] = useState(0)
    return (
        <motion.div
            style={{ marginLeft: 4, marginRight: 4, marginBottom: 8 }}
            animate={{ x: 0, y: 0 }}
            initial={{ x: '100vw', y: '100vh' }}
            transition={{ duration: 1, delay: 1 }}
        >
            <Link
                href={href}
                isExternal
                _hover={{ textDecor: "none" }}
            >
                <Box
                    border="2px solid #CBD5E0"
                    backgroundColor="#CBD5E0"
                    borderRadius={20}
                    p={[5, 10, 25]}
                    w={["100%", "100%", "100%", 475]}
                    transition=".5s ease"
                    display="flex"
                    boxShadow="0px 8px 26px rgba(0, 0, 0, 0.2)"
                    _hover={{
                        backgroundColor: "transparent",
                        border: "2px solid #CBD5E0",
                        boxShadow: "0px 8px 26px rgba(0, 0, 0, 0.3)"
                    }}
                    onMouseOver={() => changeOpacity(1)}
                    onMouseLeave={() => changeOpacity(0)}
                >
                    <Icon as={icon} alignSelf="center" fontSize="3xl" mr={5} />
                    <Flex flexDir="column" w="100%">
                        <Flex justify="space-between" w="100%">
                            <Heading as="h2">{title}</Heading>
                            <Icon as={ExternalLinkIcon} opacity={opacity} />
                        </Flex>
                        <Text color="gray.600">{description}</Text>
                    </Flex>
                </Box>
            </Link>
        </motion.div>
    )
}
