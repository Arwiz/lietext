import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { saga } from './../sagas'


import authReducer from '../reducers/auth.reducer';


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

 const store =  configureStore({
     reducer: {
        auth: authReducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})
sagaMiddleware.run(saga);

export { store };
