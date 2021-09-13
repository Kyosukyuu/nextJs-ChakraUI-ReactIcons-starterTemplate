import Head from "next/head";
import { Box } from "@chakra-ui/react";
import ChakraLink from "../components/ChakraLink";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main"></Box>
    </Box>
  );
}
