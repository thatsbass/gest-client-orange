export const NotFoundError = (message : string = "Resource not found"): Error => {
  const err = new Error(message);
  (err as any).name = "NotFoundError";
  return err;
};
