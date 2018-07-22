import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
// import rootSaga from "./sagas";

// const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]; //middleware just for Development
//Because never ship this to production
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

// sagaMiddleware.run(rootSaga);

export default store;
