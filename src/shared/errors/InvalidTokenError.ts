import BaseError from './BaseError';

class InvalidTokenError extends BaseError {
  constructor() {
    super(
      401,
      'InvalidTokenError',
      'Token is invalid',
      'There is a token invalid in  your request.',
    );
  }
}

export default InvalidTokenError;