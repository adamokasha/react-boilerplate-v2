import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'some_id'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear on logout', () => {
  const action = {
    type: 'LOGOUT',
  }
  const state = authReducer({ uid: 'some_id' }, action);
  expect(state).toEqual({});
});
