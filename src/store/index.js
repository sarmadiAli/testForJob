import { createStore, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from "./reducer";

export default createStore(
    reducer,
    compose(
        devToolsEnhancer({ trace: true })
    )
)