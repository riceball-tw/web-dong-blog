export function resolveBase(baseUrl: string | undefined): string {
	return baseUrl ? `/${baseUrl}/`.replace(/\/{2,}/g, "/") : "/";
}
