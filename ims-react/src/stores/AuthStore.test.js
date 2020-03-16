import AuthStore from './AuthStore';

describe('<AuthStore />', () => {
  it('instantiates', () => {
    const authStore = new AuthStore();
    expect(authStore.loggedIn).toBe(false);
  });
  it('writes to session', () => {
    const authStore = new AuthStore();
    authStore.loggedIn = true;
    authStore.writeToSession();

    expect(JSON.parse(sessionStorage.getItem('AuthStore')).loggedIn).toBeTruthy()
  })
  it('instantiates from session', () => {
    let json = {loggedIn: true};
    sessionStorage.setItem('AuthStore', JSON.stringify(json));
    const authStore = new AuthStore();
    expect(authStore.loggedIn).toBe(true);
  });
  it('clears auth', () => {
    let json = {loggedIn: true};
    sessionStorage.setItem('AuthStore', JSON.stringify(json));
    let authStore = new AuthStore();

    expect(authStore.loggedIn).toBe(true);

    let sessionAuthStore = JSON.parse(sessionStorage.getItem('AuthStore'));

    expect(sessionAuthStore.loggedIn).toBe(true);

    authStore.logout(() => console.log('success'));
    authStore = new AuthStore();
    expect(authStore.loggedIn).toBe(false);

    sessionAuthStore = JSON.parse(sessionStorage.getItem('AuthStore'));

    expect(sessionAuthStore).toBe(null);
  });
});
