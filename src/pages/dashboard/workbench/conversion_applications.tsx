import { Iconify } from "@/components/icon";
import { themeVars } from "@/theme/theme.css";
import { Progress } from "antd";
type PropsType = {
	count: string;
	percent: number;
};
export function Conversion({ count, percent }:PropsType) {
	return (
		<Basic
			percent={percent}
			title={count}
			subtitle="Conversion"
			iconify="tabler:user-filled"
			bg={themeVars.colors.palette.primary.default}
			strokeColor={themeVars.colors.palette.primary.light}
		/>
	);
}
export function Applications({ count, percent }:PropsType) {
	return (
		<Basic
			percent={percent}
			title={count}
			subtitle="Applications"
			iconify="ic:round-email"
			bg={themeVars.colors.palette.info.default}
			strokeColor={themeVars.colors.palette.info.light}
		/>
	);
}

type Props = {
	percent: number;
	title: string;
	subtitle: string;
	iconify: string;
	bg?: string;
	strokeColor?: string;
};
function Basic({ percent, title, subtitle, iconify, bg, strokeColor }: Props) {
	const format = (val?: number) => <span style={{ color: themeVars.colors.background.default }}>{val}%</span>;
	return (
		<div
			className="relative flex items-center rounded-2xl p-6"
			style={{ background: bg, color: themeVars.colors.background.default }}
		>
			<Progress type="circle" size={70} percent={percent} format={format} strokeColor={strokeColor} />
			<div className="ml-2 flex flex-col">
				<span className="text-2xl font-bold">{title}</span>
				<span className="opacity-50">{subtitle}</span>
			</div>
			<div className="absolute right-0">
				<Iconify icon={iconify} style={{ opacity: 0.08 }} size={100} />
			</div>
		</div>
	);
}
