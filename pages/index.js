import { motion } from "framer-motion"
import Head from 'next/head'
import {
  Flex,
  Heading,
  Text,
  Link,
  Box
} from '@chakra-ui/react'
import { FiYoutube, FiCoffee } from "react-icons/fi"

// Components
import BoxComponent from '../components/BoxComponent'
import { IconOne, IconTwo, IconThree } from '../components/CustomSvg'

// lib
import year from '../lib/current_date'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlson Technologies LLC</title>
        <meta name="description" content="Programming educations and solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex pos="fixed" top={30} left={200} zIndex="-1">
        <motion.div
          initial={{ scale: 15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <IconOne />
        </motion.div>
      </Flex>
      <Flex pos="fixed" bottom={40} right={310} zIndex="-1">
        <motion.div
          initial={{ scale: 15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <IconTwo />
        </motion.div>
      </Flex>
      <Flex pos="fixed" left={10} bottom={30} zIndex="-1">
        <motion.div
          initial={{ scale: 15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <IconThree />
        </motion.div>
      </Flex>

      <Flex
        h="100vh"
        flexDir="column"
        align="center"
        id="page"
      >
        <Flex as="header" flexDir="column" my={10} align="center" mx={2}>
          <Heading as="h1" size="2xl" textAlign="center">Carlson Technologies LLC</Heading>
          <Heading as="h2" size="md" mt={4} color="gray.600" textAlign="center">Programming education and solutions.</Heading>
        </Flex>

        <Flex
          as="main"
          justify="space-around"
          w="100%"
          maxW={1000}
          flexDir={["column", "column", "column", "row"]}
        >
          <BoxComponent icon={FiYoutube} title="Benjamin Carlson" description="Learn to code through tutorial videos on this YouTube channel." href="https://youtube.com/benjamincarlson" />
          <BoxComponent icon={FiCoffee} title="coffeeclass.io" description="Learn to program by following project tutorials or working through Coffeeclass Learn." href="https://coffeeclass.io" />
        </Flex>

        <Flex
          as="footer"
          id="footer"
          pos="absolute"
          bottom="5px"
          flexDir="column"
          align="center"
        >
          <Text as="small" textAlign="center">&copy; Copyright {year}, Carlson Technologies LLC. All Rights Reserved.</Text>
          <Flex id="footer-items">
            <Link href="https://github.com/carlson-technologies" isExternal><Text>GitHub</Text></Link>
            <Link href="mailto:ben@carlsontechnologies.dev"><Text>Contact</Text></Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}