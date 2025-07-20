export default function toSnakeCase(input: string): string {
  return input.toLowerCase().replace(/[\s-.]+/g, '_');
}
