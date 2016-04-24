# redux-simplestorage

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Use this to seamlessly store data in localStorage via redux actions.

## Installation
`npm i redux-simplestorage`

```javascript
import { createStore, applyMiddleware } from 'redux'
import storageMiddleware from 'redux-simplestorage'
const reduxStore = applyMiddleware([storageMiddleware])(createStore)
```

## Usage

To store data in localStorage via redux action, simply include a storage key.
The storage value is an object whose keys will be stored in localStorage.

```javascript
const STORE_SESSION = 'STORE_SESSION'
const SESSION = 'SESSION'

export function storeSession(session) {
    return {
        type: STORE_SESSION,
        storage: {
            [SESSION]: session
        }
    }
}
```

Later on...
```
const session = localStorage.getItem(SESSION)
```
