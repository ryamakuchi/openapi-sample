declare module 'swagger-merger' {
  export default function swaggerMerger(options: {
    input: string;
    output: string;
  }): Promise<void>;
}
