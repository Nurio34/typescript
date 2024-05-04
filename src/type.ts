import { z } from "zod";

export const todoSchema = z.object({
    id: z.number(),
    todo: z.string(),
    completed: z.boolean(),
});

export type Todo = z.infer<typeof todoSchema>;
