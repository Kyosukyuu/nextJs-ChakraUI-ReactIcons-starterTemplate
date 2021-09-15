import { Box } from "@chakra-ui/react";
import PageHead from "../components/PageHead";

export default function Home() {
  return (
    <Box>
      <PageHead hasManifest />

      <Box as="main"></Box>
    </Box>
  );
}
