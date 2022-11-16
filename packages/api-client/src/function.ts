import type { ErrorResponse, UnauthorizedErrorResponse } from './generated';

type APIErrorResponse = ErrorResponse | UnauthorizedErrorResponse;

export const isAPIError = (error: unknown): error is APIErrorResponse => {
  const _error = error as APIErrorResponse;
  return typeof _error?.type === 'string';
};

export const isAPI401Error = (
  error: unknown
): error is UnauthorizedErrorResponse => {
  const _error = error as UnauthorizedErrorResponse;
  return (
    typeof _error?.type === 'string' &&
    typeof _error?.payload?.loginUrl === 'string'
  );
};

export const apiErrorType = async (
  error: unknown,
  options401: { catch?: boolean; exec?: () => void } = { catch: false }
): Promise<APIErrorResponse | Error | void> => {
  if (!(error instanceof Response)) {
    if (error instanceof Error) return error;
    return new Error(
      'error 引数に Response でも Error でもない値が渡されました'
    );
  }

  const responseBody = await error.json();

  if (!isAPIError(responseBody)) {
    return new Error('Response の body が APIErrorResponse の型と一致しません');
  }

  if (isAPI401Error(responseBody)) {
    if (options401.exec) options401.exec();
    if (options401.catch) return responseBody;
  }

  return responseBody;
};
