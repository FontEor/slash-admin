import { Card } from "antd";
import CountUp from "react-countup";
export default function EditorPage() {
	return (
		<>
			<Card title="Editor Simple">
				<CountUp
					start={-875.039}
					end={160527.012}
					duration={2.75}
					separator=" "
					decimals={4}
					decimal=","
					prefix="$"
					suffix=""
					onEnd={() => console.log("Ended! 👏")}
					onStart={() => console.log("Started! 💨")}
				>
					{({ countUpRef }) => (
						<div>
							<span className="text-[#d71a1a]" ref={countUpRef} />
						</div>
					)}
				</CountUp>
			</Card>
		</>
	);
}
