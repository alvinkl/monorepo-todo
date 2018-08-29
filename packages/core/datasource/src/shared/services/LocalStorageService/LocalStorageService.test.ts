import LocalStorageService from './LocalStorageService';

describe('[Services] LocalStorageService', () => {
  beforeEach(() => {
    const mockStorage = () => {
      const items = {};

      return {
        setItem: (key: string, objStrfy) => {
          items[key] = objStrfy;
        },

        getItem: (key: string) => items[key],
      };
    };

    window.localStorage = mockStorage();
  });

  const key = 'testing';
  const storageService = new LocalStorageService(key);
  const testObj = [
    {
      array: [1, 2, 3],
      number: 1,
      testing: true,
    },
  ];
  it('should add item to localStorage', () => {
    storageService.addItem(testObj);

    const s = window.localStorage.getItem(key);

    expect(s).toEqual(JSON.stringify(testObj));
  });

  it('should get item from localStorage', () => {
    storageService.addItem(testObj);

    const s = storageService.getItems(key);

    expect(s).toEqual(testObj);
  });
});
