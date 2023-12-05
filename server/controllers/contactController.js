import { StatusCodes } from "http-status-codes";
import Contact from "../models/Contact.js";

export const createMessage = async (req, res) => {
    try {
        const newPost = await Contact.create({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        });
        return res.status(StatusCodes.CREATED).json({message:"Message added!",newPost})

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};