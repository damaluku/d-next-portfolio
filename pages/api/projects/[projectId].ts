// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/db/data.json";

export function getProjectById(projectId: any) {
  const project = data.find((item) => item.id === projectId);
  return project;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const project = getProjectById(req.query.category);
    res.status(200).json(project);
  }
}
