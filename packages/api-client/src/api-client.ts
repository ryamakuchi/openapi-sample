import type { ConfigurationParameters } from './generated';
import { Configuration } from './generated';

type Prefer = {
  status?: number;
  example?: string;
};

const headers = {
  Accept: 'application/json',
};

export const mockApiConfig = (prefer: Prefer = {}): Configuration => {
  const configurationParameters: ConfigurationParameters = {
    basePath: 'http://localhost:19002',
    headers,
  };
  const preferValues = [];
  if (prefer.example) preferValues.push(`example=${prefer.example}`);
  if (prefer.status) preferValues.push(`code=${prefer.status}`);

  if (preferValues.length > 0)
    configurationParameters.headers = {
      ...headers,
      Prefer: preferValues.reduce((pre, current) => {
        return `${pre};${current}`;
      }),
    };

  return new Configuration(configurationParameters);
};

export const apiConfig = new Configuration({
  basePath: `https://${location.host}`,
  headers,
});
