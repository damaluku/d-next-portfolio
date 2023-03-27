import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Link from "next/link";

import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  title: string;
  route: string;
  description: string;
  image: string;
}

type Props = {
  project: Project;
};

const ProfileCard = ({ project }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Card sx={{ maxWidth: 345, justifySelf: "center" }} data-aos="flip-left">
      <CardContent
        sx={{
          height: "200px",
          position: "relative",
          img: {
            objectFit: "cover",
          },
        }}
      >
        <Image src={project.image} alt={project.title} fill priority />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link
          href={project.route}
          passHref
          style={{
            textDecoration: "none",
          }}
        >
          <Button size="small" color="primary">
            View Live
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
