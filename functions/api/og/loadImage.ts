import { Context } from 'hono';

export async function loadImage(c: Context, imagePath: string): Promise<string | null> {
	try {
		if (!c.env?.ASSETS) {
			throw new Error('ASSETS binding is not configured');
		}

		const imageUrl = new URL(imagePath, c.req.url).toString();
		const imageData = await c.env.ASSETS.fetch(imageUrl);

		// Get content-type from response
		const contentType = imageData.headers.get('content-type') || 'image/png';

		const arrayBuffer = await imageData.arrayBuffer();
		const base64Image = Buffer.from(arrayBuffer).toString('base64');
		return `data:${contentType};base64,${base64Image}`;
	} catch (error) {
		console.warn(`Failed to load image ${imagePath}:`, error);
		return null;
	}
}
