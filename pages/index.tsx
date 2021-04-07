import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import { PROJECTS } from "../utils/constants";
import Updates from "../components/Updates";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonas Grøndahl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" gutterBottom>
                Jonas Grøndahl
              </Typography>
              <Typography variant="h5">
                <span style={{ fontWeight: "bold" }}>Software Engineer</span>
                {` `} with expertise within JavaScript, TypeScript, React, React
                Native, Node.js and AWS.
              </Typography>
              <List sx={{ mt: 2 }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png"
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Employed at LEGO"
                    secondary="Senior Software Engineer"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={
                        "https://www.shareicon.net/data/512x512/2016/11/21/854763_ceo_512x780.png"
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText primary="Co founder" secondary="10TEN10" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      src={
                        "data:image/png;base64,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"
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="5-star consultant"
                    secondary="Web and mobile development"
                  />
                </ListItem>
              </List>
              <Typography variant="h6" color="textSecondary" sx={{ mt: 5 }}>
                Inquires?{` `}
                <a href="mailto:" style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                  jonas.groendahlxd@gmail.com
                </a>
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div>
                <Image
                  className="br"
                  src={"/images/MVIMG_20190212_181647.jpg"}
                  alt="Profile picture"
                  height={500}
                  width={600}
                />
              </div>
            </Grid>
          </Grid>
          <Box mb={3} mt={20}>
            <Typography variant="h6">Projects</Typography>
          </Box>
          <Grid container spacing={2} id="projects">
            {PROJECTS.map((project) => (
              <Grid item sm={4} xs={12} key={project.name}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
          <Box mb={3} mt={12}>
            <Typography variant="h6" id="updates">
              Updates
            </Typography>
          </Box>
          <Updates />
          <Box mb={3} mt={12}>
            <Typography variant="h6" id="about">
              About me
            </Typography>
          </Box>
          <Typography paragraph sx={{ fontWeight: "bold" }}>
            More to come...
          </Typography>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
