/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: false,
	async rewrites() {
		return [
			{
				source: "/docs/:path*",
				destination: "https://turborepo-next-docs.vercel.app/:path*",
			},
			{
				source: "/react-app/:path*",
				destination: "https://turborepo-react-app.vercel.app/:path*",
			},
			{
				source: "/react-vite/:path*",
				destination: "http://localhost:5173/react-vite/:path*",
			}
		];
	},
};

export default nextConfig;
