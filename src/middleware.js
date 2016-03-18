import _ from 'lodash'
import localStore from 'store2'

export default ({ dispatch, getState }) => {
    return (next) => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }

        const { storage } = action

        if (!_.isObject(storage)) {
            return next(action)
        }

        _.forEach(storage, (value, key) => 
            localStore.set(key, value)
        )
        
        return next(action)
    }
}
