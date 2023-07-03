import { configureStore, AnyAction, Dispatch, Middleware } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { createLogger } from "redux-logger";
import { rootReducer } from "./rootReducer";
import { isDevEnv } from "../config";

const middleware: Middleware<{}, any, Dispatch<AnyAction>>[] = [];
if (isDevEnv) {
    const logger = createLogger({
        collapsed: true,
        diff: true
    });
    middleware.push(logger);
}

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middleware),
        devTools: isDevEnv,
        preloadedState: {}
    });
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = setupStore();

setupListeners(store.dispatch);
