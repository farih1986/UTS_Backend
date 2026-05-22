import type { Request, Response } from "express";
import prisma from "../prisma/client.js";

export const getCategories = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.category.findMany();

  res.json(data);
};

export const createCategory = async (
  req: Request,
  res: Response
) => {
  const data = await prisma.category.create({
    data: req.body,
  });

  res.json(data);
};

export const updateCategory = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  const data = await prisma.category.update({
    where: { id },
    data: req.body,
  });

  res.json(data);
};

export const deleteCategory = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  await prisma.category.delete({
    where: { id },
  });

  res.json({
    message: "Berhasil dihapus",
  });
};