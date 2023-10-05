import CustomError from './CustomError';

class ValidationError extends CustomError {
  errorCode = 400;
  errorType = 'ValidationError';

  constructor(
    message: string,
    private property: string,
  ) {
    super(message);

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        errorCode: this.errorCode,
        property: this.property,
      },
    ];
  }
}

export default ValidationError;
