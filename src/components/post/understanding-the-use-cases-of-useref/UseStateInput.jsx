import { useEffect, useRef, useState } from "react";

export default function UseStateInput() {
	// eslint-disable-next-line no-unused-vars
	const [_name, setName] = useState("");
	const renderCount = useRef(1);

	useEffect(() => {
		renderCount.current += 1;
	});

	return (
		<div>
			<input
				className="border bg-transparent"
				onChange={(e) => setName(e.target.value)}
				type="text"
			/>
			<br />
			<p>本元件重新渲染次數：{renderCount.current}</p>
		</div>
	);
}
