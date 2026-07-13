"use server";

import { Event } from "@/database";
import connectDB from "../mongodb";

// export const getSimilarEventsBySlug = async (slug: string) => {
//   try {
//     await connectDB();
//     const event = await Event.findOne({ slug }).lean();

//     return await Event.find({
//       _id: { $ne: event?._id },
//       tags: { $in: event?.tags },
//     }).lean();
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug }).lean();

    if (!event) return [];

    const similarEvents = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();

    // ✅ Convert _id to string for every event
    return similarEvents.map((ev) => ({
      ...ev,
      _id: ev._id.toString(), // 👈 Convert ObjectId to string
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
};
