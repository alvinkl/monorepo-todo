export default (promise): [any, any] => {
  return promise.then(res => [null, res]).catch(err => [err]);
};
