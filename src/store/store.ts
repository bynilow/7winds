import workspaceReducer from './slices/workspaceSlice';
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;