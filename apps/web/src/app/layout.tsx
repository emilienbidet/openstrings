import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css"

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-sans",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "OpenStrings",
	description: "OpenStrings",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				{children}
			</body>
		</html>
	);
}
