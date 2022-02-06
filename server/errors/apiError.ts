class ApiError extends Error {
  status: number;
  message: string;
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(404, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static unauthorized(message) {
    return new ApiError(401, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }
}

export default ApiError;
