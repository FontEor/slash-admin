import { Carousel } from "antd";
import { themeVars } from "@/theme/theme.css";

const carouselItems = [
	{
		id: 1,
		title: "Dashboard Analytics",
		svg: (
			<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor={themeVars.colors.palette.primary.light} />
						<stop offset="100%" stopColor={themeVars.colors.palette.primary.dark} />
					</linearGradient>
				</defs>
				<rect width="400" height="200" fill="url(#grad1)" rx="12" />
				<circle cx="100" cy="100" r="30" fill="#fff" opacity="0.3" />
				<circle cx="200" cy="100" r="40" fill="#fff" opacity="0.4" />
				<circle cx="300" cy="100" r="35" fill="#fff" opacity="0.35" />
				<path
					d="M 50 150 Q 100 100, 150 120 T 250 110 T 350 130"
					stroke="#fff"
					strokeWidth="3"
					fill="none"
					opacity="0.6"
				/>
				<text x="200" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">
					Analytics Overview
				</text>
			</svg>
		),
	},
	{
		id: 2,
		title: "Data Visualization",
		svg: (
			<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#667eea" />
						<stop offset="100%" stopColor="#764ba2" />
					</linearGradient>
				</defs>
				<rect width="400" height="200" fill="url(#grad2)" rx="12" />
				<rect x="80" y="120" width="40" height="60" fill="#fff" opacity="0.7" rx="4" />
				<rect x="140" y="100" width="40" height="80" fill="#fff" opacity="0.7" rx="4" />
				<rect x="200" y="80" width="40" height="100" fill="#fff" opacity="0.7" rx="4" />
				<rect x="260" y="110" width="40" height="70" fill="#fff" opacity="0.7" rx="4" />
				<text x="200" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">
					Data Charts
				</text>
			</svg>
		),
	},
	{
		id: 3,
		title: "Performance Metrics",
		svg: (
			<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#f093fb" />
						<stop offset="100%" stopColor="#f5576c" />
					</linearGradient>
				</defs>
				<rect width="400" height="200" fill="url(#grad3)" rx="12" />
				<polygon
					points="100,150 150,80 200,120 250,60 300,100"
					fill="#fff"
					opacity="0.3"
					stroke="#fff"
					strokeWidth="2"
				/>
				<circle cx="100" cy="150" r="5" fill="#fff" />
				<circle cx="150" cy="80" r="5" fill="#fff" />
				<circle cx="200" cy="120" r="5" fill="#fff" />
				<circle cx="250" cy="60" r="5" fill="#fff" />
				<circle cx="300" cy="100" r="5" fill="#fff" />
				<text x="200" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">
					Performance Metrics
				</text>
			</svg>
		),
	},
	{
		id: 4,
		title: "System Status",
		svg: (
			<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#4facfe" />
						<stop offset="100%" stopColor="#00f2fe" />
					</linearGradient>
				</defs>
				<rect width="400" height="200" fill="url(#grad4)" rx="12" />
				<circle cx="200" cy="100" r="50" fill="none" stroke="#fff" strokeWidth="4" opacity="0.5" />
				<circle cx="200" cy="100" r="35" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" />
				<circle cx="200" cy="100" r="20" fill="#fff" opacity="0.8" />
				<path
					d="M 120 100 L 185 100 L 200 85"
					stroke="#fff"
					strokeWidth="3"
					fill="none"
					strokeLinecap="round"
				/>
				<text x="200" y="180" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">
					System Status
				</text>
			</svg>
		),
	},
];

export default function CarouselCard() {
	return (
		<Carousel autoplay>
			{carouselItems.map((item) => (
				<div key={item.id} className="flex items-center justify-center">
					<div className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
						{item.svg}
					</div>
				</div>
			))}
		</Carousel>
	);
}
