import type { Request, Response } from "express";
import prisma from "../prisma/client.js";

export const getEvents = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.event.findMany({
    include: {
      category: true,
      speaker: true,
    },
  });

  res.json(data);
};

export const createEvent = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.event.create({
    data: req.body,
  });

  res.json(data);
};

export const updateEvent = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const data = await prisma.event.update({
    where: { id },
    data: req.body,
  });

  res.json(data);
};

export const deleteEvent = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  await prisma.event.delete({
    where: { id },
  });

  res.json({
    message: "Berhasil dihapus",
  });
};