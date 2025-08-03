import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// External code, skip linting
// eslint-disable-next-line import/prefer-default-export
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
