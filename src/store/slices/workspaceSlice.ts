import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IRow {
    id: number;
    equipmentCosts: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    rowName: string;
    salary: number;
    supportCosts: number;
    total: number;
    child: any[];
}

interface IWorkspaceState {
  rows: IRow[];
  isLoading: boolean;
  error: string;
}

const initialState: IWorkspaceState = {
  rows: [],
  isLoading: false,
  error: ''
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setRows: (state, action: PayloadAction<IRow[]>) => {
      state.rows = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }
  },
})

export const { setRows } = workspaceSlice.actions

export default workspaceSlice.reducer