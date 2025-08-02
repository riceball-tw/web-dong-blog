import { useForm, useWatch } from "react-hook-form";

let parentRender = 0;
let childRender = 0;
function FirstNameWatched({ control }) {
	useWatch({
		control,
		name: "lastName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
	});

	childRender += 1;

	return <p>子元件渲染次數: {childRender}</p>;
}

// eslint-disable-next-line import/prefer-default-export
export function WatchExampleThree() {
	const { register, control } = useForm();
	useWatch({
		name: "firstName",
		control,
	});

	parentRender += 1;

	return (
		<form className="text-foreground">
			<div className="flex flex-wrap gap-2">
				<input
					className="w-full text-black"
					{...register("firstName")}
					placeholder="firstName"
				/>
				<input
					className="w-full text-black"
					{...register("lastName")}
					placeholder="lastName"
				/>
			</div>
			<p>父元件渲染次數: {parentRender}</p>
			<FirstNameWatched control={control} />
		</form>
	);
}
