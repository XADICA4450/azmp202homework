import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "../../src/services/ProductApi";
import wishlistReducer from "../services/Wishlist";


export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);