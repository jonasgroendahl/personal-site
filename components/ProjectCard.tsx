import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MmmChip from "../components/MmmChip";
import { GitHub, Language } from "@material-ui/icons";
import { IProject } from "../utils/constants";

type Props = {
  project: IProject;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Card>
      <Box position="relative">
        <CardMedia
          component="img"
          src={project.img}
          height={300}
          width="100%"
          sx={{ objectFit: "cover" }}
        />
        {project.gh ? (
          <Box position="absolute" bottom={-20} right={5}>
            <Tooltip title="Open link">
              <IconButton
                onClick={() => window.open(project.gh)}
                sx={{ backgroundColor: "#eee" }}
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
        {project.link ? (
          <Box position="absolute" bottom={-20} right={5}>
            <Tooltip title="Open link">
              <IconButton
                onClick={() => window.open(project.link)}
                sx={{ backgroundColor: "#eee" }}
              >
                <Language />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
      </Box>
      <Divider />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {project.platforms.map((platform, i) => (
            <MmmChip key={`chip_${project.name}_${i}`} label={platform} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
