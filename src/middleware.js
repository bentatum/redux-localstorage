import { default as localStore } from 'store2'

export default store => next => action => {
  if (!action) {
    return next()
  }

  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
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
