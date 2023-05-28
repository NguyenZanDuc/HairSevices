import * as yub from 'yup';
export const guestSchema = yub.object({
    name: yub.string().required("Name is required"),
    phone: yub.string().required().length(10, "Phone number must be 10 digits"),
    email: yub.string().email().required().email("Email is invalid"),
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
    name: yub.string().required("Name is required"),
    price: yub.number().required("Price is required"),
    time: yub.number().required("Time is required"),
    image: yub.string().required("Image is required"),
    description: yub.string().required("Description is required"),
});
export type HairStyle = yub.InferType<typeof hairStyleSchema>;
