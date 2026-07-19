export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=https%3A%2F%2Fcoruscating-bienenstitch-df3a93.netlify.app%2F_next%2Fimage%3Furl%3D%252Fimages%252Fevent5.png%26w%3D640%26q%3D75&w=640&q=75",
    title: "React Summit US 2025",
    slug: "react-summit-us-2025",
    location: "San Francisco, CA, USA",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent2.png&w=640&q=75",
    //http://localhost:3000/_next/image?url=%2Fimages%2Fevent2.png&w=640&q=75
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-cloudnativecon-eu-2026",
    location: "Vienna, Austria",
    date: "2026-03-18",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent5.png&w=640&q=75",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "2025-12-01",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent5.png&w=640&q=75",
    title: "Next.js Conf 2025",
    slug: "nextjs-conf-2025",
    location: "Los Angeles, CA, USA (Hybrid)",
    date: "2025-11-12",
    time: "09:30 AM",
  },
  {
    // https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340
    image: "/images/event5.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent5.png&w=640&q=75",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "San Jose, CA, USA",
    date: "2026-04-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    // image:
    //   "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent5.png&w=640&q=75",
    title: "ETHGlobal Hackathon: Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "2026-07-10",
    time: "10:00 AM",
  },
  {
    image: "/images/event-full.png",
    // image:
    // "https://coruscating-bienenstitch-df3a93.netlify.app/_next/image?url=%2Fimages%2Fevent5.png&w=640&q=75",
    title: "Open Source Summit North America 2026",
    slug: "oss-na-2026",
    location: "Vancouver, Canada",
    date: "2026-06-22",
    time: "09:00 AM",
  },
];

export default events;
