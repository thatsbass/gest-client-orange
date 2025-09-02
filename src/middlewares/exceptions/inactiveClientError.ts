export const InactiveClientError = (message : string = "Client is inactive"): Error => {
  const err = new Error(message);
  (err as any).name = "InactiveClientError";
  return err;
};

