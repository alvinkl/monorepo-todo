import to from './asyncAwait';
import http from 'http';

describe('[Utils] asyncAwait', () => {
  it('should return a response', async () => {
    const { error } = await to(Promise.reject('Testing error'));

    expect(error).toBe('Testing error');
  });

  it('should return response', async () => {
    const { error, response } = await to(
      Promise.resolve({
        ok: true,
        json: () => ({
          testing: true,
        }),
      })
    );

    expect(response).toHaveProperty('ok');
    expect(response).toHaveProperty('json');
    expect(error).toBe(undefined);
  });
});
