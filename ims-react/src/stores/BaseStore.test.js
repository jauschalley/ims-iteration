import BaseStore from './BaseStore';

describe('<BaseStore />', () => {
  it('instantiates', () => {
    const baseStore = new BaseStore();
    expect(baseStore.message).toBe(null);
  });
  it('sets message', () => {
    const baseStore = new BaseStore();
    baseStore.setMessage('test')
    expect(baseStore.message).toBe('test');
  });
});
