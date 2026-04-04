import "./globals.css";

const BASE_URL = "https://saburinikam.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Saburi Nikam | Full-Stack Developer & AI/DS Engineer",
    template: "%s | Saburi Nikam",
  },
  description:
    "Saburi Nikam is a Full-Stack Developer and BTech student specialising in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology. Explore projects in MERN stack, Next.js, Python AI integration, and more.",
  keywords: [
    "Saburi Nikam",
    "Full Stack Developer",
    "AI Developer",
    "Data Science",
    "MERN Stack",
    "Next.js Developer",
    "React Developer",
    "BTech AI DS",
    "Vishwakarma Institute of Technology",
    "Web Developer India",
    "Portfolio",
    "JavaScript Developer",
    "Python Developer",
  ],
  authors: [{ name: "Saburi Nikam", url: BASE_URL }],
  creator: "Saburi Nikam",
  publisher: "Saburi Nikam",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Saburi Nikam | Full-Stack Developer & AI/DS Engineer",
    description:
      "Explore Saburi Nikam's portfolio — a Full-Stack Developer & AI/DS student building impactful web apps with MERN, Next.js, Python, and modern cloud tools.",
    url: BASE_URL,
    siteName: "Saburi Nikam Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saburi Nikam – Full-Stack Developer & AI/DS Engineer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saburi Nikam | Full-Stack Developer & AI/DS Engineer",
    description:
      "Explore Saburi Nikam's portfolio — MERN stack, Next.js, Python AI projects and more.",
    images: ["/og-image.jpg"],
    creator: "@saburinikam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saburi Nikam",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,
  sameAs: [
    "https://github.com/saburi004",
    "https://www.linkedin.com/in/saburi-nikam/",
  ],
  jobTitle: "Full-Stack Developer",
  description:
    "BTech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Technology, specialising in MERN stack, Next.js, Python, and AI-driven web applications.",
  knowsAbout: [
    "Full-Stack Web Development",
    "Artificial Intelligence",
    "Data Science",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "Firebase",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Vishwakarma Institute of Technology",
      url: "https://www.vit.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Government Polytechnic Nashik",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical */}
        <link rel="canonical" href={BASE_URL} />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Glegoo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Raleway:wght@300;400&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
