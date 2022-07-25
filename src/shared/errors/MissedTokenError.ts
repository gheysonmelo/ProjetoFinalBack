import BaseError from './BaseError';

class MissedTokenError extends BaseError {
  constructor() {
    super(
      401,
      'MissedTokenError',
      'Token is missing',
      'There is no token in the header of your request.',
    );
  }
}

export default MissedTokenError;