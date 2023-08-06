// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/db/data.json";

export type ProjectData = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  image: string;
  route: string;
  stack: string[];
  github: string;
};

export function getProjects() {
  return data;
}

interface RespTypes {
  message?: string;
  projects?: ProjectData[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespTypes>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const projects = await getProjects();
    res.status(200).json({ projects });
  }
}
