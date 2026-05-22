import type { Request, Response } from "express";
import prisma from "../prisma/client.js";

export const getSpeakers = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.speaker.findMany();

  res.json(data);
};

export const createSpeaker = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.speaker.create({
    data: req.body,
  });

  res.json(data);
};

export const updateSpeaker = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const data = await prisma.speaker.update({
    where: { id },
    data: req.body,
  });

  res.json(data);
};

export const deleteSpeaker = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  await prisma.speaker.delete({
    where: { id },
  });

  res.json({
    message: "Berhasil dihapus",
  });
};