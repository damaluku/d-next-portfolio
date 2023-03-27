import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Stack } from "@mui/material";
import Link from "next/link";

import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  image: string;
  route: string;
  stack: string[];
}

type Props = {
  project: Project;
};

const ProfileCard = ({ project }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Card
      sx={{ maxWidth: 345, justifySelf: "center" }}
      data-aos="fade-up-right"
    >
      <CardContent
        sx={{
          height: "200px",
          position: "relative",
          img: {
            objectFit: "cover",
          },
        }}
      >
        <Image src={project.image} alt={project.name} fill priority />
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ textTransform: "uppercase" }}
        >
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Link
            href={project.route}
            passHref
            style={{
              textDecoration: "none",
            }}
            target="_blank"
          >
            <Button size="small" color="primary">
              View Live
            </Button>
          </Link>

          <Link
            href={`/portfolio/${project.id}`}
            passHref
            style={{
              textDecoration: "none",
            }}
          >
            <Button size="small" color="primary">
              show more
            </Button>
          </Link>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
