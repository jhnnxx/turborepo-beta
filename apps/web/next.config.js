/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/docs/:path*",
				destination: "http://localhost:3001/docs/:path*",
			},
			{
				source: "/react-vite/:path*",
				destination: "http://localhost:5173/react-vite/:path*",
			},
			{
				source: "/react-app/:path*",
				destination: "http://localhost:4000/react-app/:path*",
			}
		];
	},
};

export default nextConfig;
