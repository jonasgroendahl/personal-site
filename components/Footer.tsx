import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <Box bgcolor="white" mt={3}>
        <Container>
          <Box py={5}>
            <Typography color="textSecondary" align="center">
              jonasgroendahl.dev @ 2021
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
