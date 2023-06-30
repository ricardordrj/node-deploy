import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const homeController = {
    get: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (err: any) {
            console.error(
                `Error while getting programming languages`,
                err.message
            );
            next(err);
        }
    },

    post: async (req: Request, res: Response, next: NextFunction) => {
        const createUserSchema = z.object({
            name: z.string(),
            email: z.string(),
        });
        const { name, email } = createUserSchema.parse(req.body);

        try {
            await prisma.user.create({
                data: {
                    name,
                    email,
                },
            });
            return res.status(201).send("Successfully created");
        } catch (err: any) {
            console.error(
                `Error while getting programming languages`,
                err.message
            );
            next(err);
        }
    },
};

export default homeController;
