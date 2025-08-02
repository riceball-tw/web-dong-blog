/** biome-ignore-all lint/a11y/noLabelWithoutControl: Demo Code */
/** biome-ignore-all lint/correctness/useJsxKeyInIterable: Demo Code */
import { useForm } from "react-hook-form";

// eslint-disable-next-line import/prefer-default-export
export function WatchExampleOne() {
	const { register, handleSubmit, watch } = useForm({
		defaultValues: {
			paymentMethod: "cashOnDelivery",
		},
	});
	const [paymentMethod] = watch(["paymentMethod"]);

	return (
		// eslint-disable-next-line no-console
		<form
			className="text-foreground"
			onSubmit={handleSubmit((data) => console.log(data))}
		>
			<label>
				<span className="mr-2 inline-block">付款方式：</span>
				<select className="text-black" {...register("paymentMethod")}>
					<option value="cashOnDelivery">貨到付款</option>
					<option value="creditCard">信用卡</option>
				</select>
			</label>
			{paymentMethod === "creditCard" && (
				<div className="mt-4 flex flex-col gap-2">
					<div className="flex flex-wrap gap-2">
						<label>
							信用卡卡號
							<input
								className="block w-full text-black"
								{...register("creditCardNumber")}
							/>
						</label>
						<label>
							安全碼
							<input
								className="block w-full text-black"
								{...register("creditCardSafeCode")}
							/>
						</label>
					</div>
					<label>有效期限</label>
					<div className="flex gap-2">
						{/* Year */}
						<select className="text-black">
							<option selected disabled value="">
								---
							</option>
							{[...Array(25)].map((_, i) => {
								const currentYear = new Date().getFullYear();
								return (
									<option value={currentYear + i}>{currentYear + i}</option>
								);
							})}
						</select>

						{/* Month */}
						<select className="text-black">
							<option selected disabled value="--">
								--
							</option>
							{[...Array(12)].map((_, i) => (
								<option value={i + 1}>{i + 1}</option>
							))}
						</select>
					</div>
				</div>
			)}
		</form>
	);
}
