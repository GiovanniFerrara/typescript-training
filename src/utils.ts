export interface IFetchError {
  message: string;
  status?: number;
}

export class FetchError extends Error implements IFetchError {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

export async function fetchData(url: string): Promise<Response> {
const response = await fetch(url);
  const shouldRequestFail = Math.random() > 0.5;
  
  if(shouldRequestFail) {
    // https://trovalost.it/errore-http-418-teapot/
    throw new FetchError("Test error message", 418);
  }

  return response;
}