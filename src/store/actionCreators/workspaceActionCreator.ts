import axios from 'axios';
import { workspaceSlice } from './../slices/workspaceSlice';
import { AppDispatch } from './../store';

export const setRowsAC = () => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(workspaceSlice.actions.setIsLoading(true));

            const rowsRes = await axios.get("http://185.244.172.108:8081/v1/outlay-rows/entity/29812/row/list");
            console.log(rowsRes.data)
            dispatch(workspaceSlice.actions.setRows(rowsRes.data));

            dispatch(workspaceSlice.actions.setIsLoading(false));
        }
        catch (e:any){
            dispatch(workspaceSlice.actions.setIsLoading(false));
            dispatch(workspaceSlice.actions.setError(e.message));
        }
    }
}

export const createRowAC = () => {
    return async (dispatch: AppDispatch) => {
        try{
            dispatch(workspaceSlice.actions.setIsLoading(true));

            const dataToSend = {
                "equipmentCosts": 50,
                "estimatedProfit": 10,
                "machineOperatorSalary": 0,
                "mainCosts": 0,
                "materials": 0,
                "mimExploitation": 0,
                "overheads": 10,
                "parentId": 0,
                "rowName": "Первая",
                "salary": 10,
                "supportCosts": 0
            }
            const rowCreateRes = await axios.post(
                "http://185.244.172.108:8081/v1/outlay-rows/entity/29812/row/create",
                dataToSend);
            console.log(rowCreateRes)

            dispatch(workspaceSlice.actions.setIsLoading(false));
        }
        catch (e:any){
            dispatch(workspaceSlice.actions.setIsLoading(false));
            dispatch(workspaceSlice.actions.setError(e.message));
        }
    }
}