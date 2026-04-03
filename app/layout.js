import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Saburi Nikam - Portfolio",
//   description:
//     "Saburi Nikam's portfolio showcasing projects, skills, and hands-on experience as a BTech student in Artificial Intelligence and Data Science.",
// };

export const metadata = {
  title: "Saburi Nikam - Portfolio",
  description:
    "Portfolio of Saburi Nikam, a BTech student in Artificial Intelligence and Data Science.",

  openGraph: {
    title: "Saburi Nikam Portfolio",
    description:
      "Explore projects and skills of Saburi Nikam, BTech AIDS student.",
    url: "https://saburinikam.in/",
    siteName: "Saburi Nikam - Portfolio",
    images: [
      {
        url: "/og-image.jpg", // put this in public folder
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect first (NO rel="stylesheet" here) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Load Google Fonts stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Glegoo:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
