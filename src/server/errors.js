class ServerError extends Error {
  constructor({ log, message = '', status = 500, tag } = {}) {
    super(message);

    this.log = log || message;
    this.status = status;
    this.tag = tag;
  }

  toString() {
    const errorName = this.constructor.name;
    const tag = this.tag ? `${this.tag} : ` : '';
    return `[${tag}${errorName}] ${this.log}`;
  }
}

function errorFactory(
  name,
  { log: _log, message: _message = '', status: _status = 500, tag: _tag } = {}
) {
  const Error = class extends ServerError {
    constructor({ log, message = '', status = 500, tag } = {}) {
      super({
        log: _log || log,
        message: _message || message,
        status: _status || status,
        tag: _tag || tag,
      });
    }
  };

  Object.defineProperty(Error, 'name', { value: name });
  return Error;
}

function errorHandler(req, res, next, err) {
  // Reference for why this is in here: https://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) return next(err);

  const message = err instanceof ServerError ? err.toString() : err.message;
  console.log(`⛔️ ${req.method} ${req.originalUrl} - ${message}`);

  res.status(err.status || 500).json({ error: message });
}

module.exports = { ServerError, errorFactory, errorHandler };
