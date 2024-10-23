import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage for web
import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist cart data
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
