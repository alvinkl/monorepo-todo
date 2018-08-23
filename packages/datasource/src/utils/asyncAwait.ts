interface ReturnPromise {
  error?: Error;
  response?: Response;
}

export default (promise: Promise<any>): Promise<ReturnPromise> =>
  promise
    .then(response => Promise.resolve({ response }))
    .catch(reason => Promise.resolve({ error: reason }));
