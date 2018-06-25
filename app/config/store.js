import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducer from "../reducers";

const middleware = []; //middleware just for Development
//Because never ship this to production
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
