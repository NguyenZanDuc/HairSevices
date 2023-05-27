import * as yub from 'yup';
export const guestSchema = yub.object({
    name: yub.string().required(),
    phone: yub.string().required(),
    email: yub.string().email().required(),
    avatar: yub.string().nullable(),
});
export type Guest = yub.InferType<typeof guestSchema>;

export const scheduleSchema = yub.object({
    startTime: yub.date().required(),
    endTime: yub.date().required(),
    hairStyleId: yub.string().required(),
    guestId: yub.string().required(),
});
export type Schedule = yub.InferType<typeof scheduleSchema>;
 
export const hairStyleSchema = yub.object({
    name: yub.string().required(),
    price: yub.number().required(),
    time: yub.number().required(),
    image: yub.string().required(),
    description: yub.string().required(),
});
export type HairStyle = yub.InferType<typeof hairStyleSchema>;
