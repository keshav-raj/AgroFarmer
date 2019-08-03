import {
    appTimeBundle,
    composeBundlesRaw
} from 'redux-bundler';



export default configureStore = (initialState = {}) => {
    let store = null;
    store = composeBundlesRaw(
        appTimeBundle,
    );

    const modifiedStore = store();

    return { modifiedStore };
};