import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const response = await fetch(`${BASE_URL}/api/events/${slug}`);
  const { event } = await response.json();

  if (!event) {
    return notFound();
  }

  return <section id="event">EventDetailsPage {slug}</section>;
};

export default EventDetailsPage;
