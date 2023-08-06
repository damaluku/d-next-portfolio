// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/db/data.json";
import { ProjectData } from ".";

export async function getProjectById(projectId: any) {
  const project = data.find((item) => item.id === projectId);
  return project;
}

interface RespTypes {
  message?: string;
  project?: ProjectData | undefined;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RespTypes>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const project = await getProjectById(req.query.category);
    res.status(200).json({ project });
  }
}
