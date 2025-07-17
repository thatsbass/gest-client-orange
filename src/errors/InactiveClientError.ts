export class InactiveClientError extends Error {
  constructor(message = "Client is inactive") {
    super(message);
    this.name = "InactiveClientError";
  }
}
