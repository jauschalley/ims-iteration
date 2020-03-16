import React from 'react';
import AuthenticatedRoute from './AuthenticatedRoute';
import {MemoryRouter, Redirect} from 'react-router';

import {mount} from 'enzyme';
import AuthStore from '../../stores/AuthStore';

describe('<AuthenticatedRoute />', () => {
  it('redirects if not authenticated', () => {
    const authStore = new AuthStore();
    authStore.loggedIn = false;
    const wrapper = mount(
      <MemoryRouter>
        <AuthenticatedRoute path="/" component={MockComponent} props={{authStore: authStore}} />
      </MemoryRouter>
    );
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
  it('does not redirect if authenticated', () => {
    const authStore = new AuthStore();
    authStore.loggedIn = true;
    const wrapper = mount(
      <MemoryRouter>
        <AuthenticatedRoute path="/" component={MockComponent} props={{authStore: authStore}} />
      </MemoryRouter>
    );
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });
});

const MockComponent = () => (
  <div>
    test
  </div>
);
