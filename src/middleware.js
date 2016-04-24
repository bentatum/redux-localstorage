import { default as localStore } from 'store2'

export default ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  const { storage } = action

  if (!storage || typeof storage !== 'object') {
    return next(action)
  }

  for (let prop in storage) {
    if (storage.hasOwnProperty(prop)) {
      localStore.set(prop, storage[prop])
    }
  }

  return next(action)
}
