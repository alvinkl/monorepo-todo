interface IReturnPromise {
  error?: Error;
  response?: Response;
}

export default (promise: Promise<any>): Promise<IReturnPromise> =>
  promise
    .then((response) => Promise.resolve({ response }))
    .catch((reason) => Promise.resolve({ error: reason }));
