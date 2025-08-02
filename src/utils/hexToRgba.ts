// eslint-disable-next-line import/prefer-default-export
export function hexToRgba(hexColor: string, alpha = 1.0) {
	const modifiedHexColor = hexColor.replace("#", "");
	const r = parseInt(modifiedHexColor.substring(0, 2), 16);
	const g = parseInt(modifiedHexColor.substring(2, 4), 16);
	const b = parseInt(modifiedHexColor.substring(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
