# redux-simplestorage

## Installation

```
import { createStore, applyMiddleware } from 'redux'
import storageMiddleware from 'redux-localstorage'
const reduxStore = applyMiddleware([storageMiddleware])(createStore)
```

## Usage

To store data in localStorage via redux action, simply include a storage key. The storage value should be an object whose keys will be stored in localStorage.

```
const SESSION_STORED_SUCCESSFULLY = 'SESSION_STORED_SUCCESSFULLY'
const MY_SESSION_KEY = 'YOUR_SESSION_KEY'

export function storeSession(session) {
    return {
        type: SESSION_STORED_SUCCESSFULLY,
        storage: {
            [`${MY_SESSION_KEY}`]: session
        }
    }
}
```

Once dispatched, the `storeSession` action will have saved the session data for you under `MY_SESSION_KEY` and `localStorage.getItem(MY_SESSION_KEY)` should work as expected.
