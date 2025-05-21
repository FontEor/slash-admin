import { Typography } from "antd";

import Card from "@/components/card";
import Chart from "@/components/chart/chart";
import useChart from "@/components/chart/useChart";

export default function CurrentDownload() {
	return (
		<Card className="flex-col">
			<header className="self-start">
				<Typography.Title level={5}>Current Download</Typography.Title>
			</header>
			<main>
				<ChartDonut labels={labels} series={series} />
			</main>
		</Card>
	);
}
type Props = {
	labels:string[]
	series:number[]
}
const series = [44, 55, 13, 43];
const labels = ["Mac", "Window", "IOS", "Android"]
function ChartDonut({ labels, series }:Props) {
	const chartOptions = useChart({
		labels,
		stroke: {
			show: false,
		},
		legend: {
			position: "bottom",
			horizontalAlign: "center",
		},
		tooltip: {
			fillSeriesColor: false,
		},
		chart: {
			width: 240,
		},
		plotOptions: {
			pie: {
				donut: {
					size: "90%",
					labels: {
						total: {
							fontSize: "12px",
						},
						value: {
							fontSize: "18px",
							fontWeight: 700,
						},
					},
				},
			},
		},
	});
	return (
		<Chart type="donut" series={series} options={chartOptions} height={360} />
	);
}
