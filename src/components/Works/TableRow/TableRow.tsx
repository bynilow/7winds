import { ChangeEvent, createRef, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createRowAC } from "../../../store/actionCreators/workspaceActionCreator";
import { IRow } from "../../../store/slices/workspaceSlice";
import LevelCard from "../LevelCard/LevelCard";
import "./tablerow.sass"

interface ITableRow {
    level: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    child: IRow[];
    isEmptyWork?: boolean;
}

function TableRow({level, rowName, salary, equipmentCosts, overheads, estimatedProfit, child, isEmptyWork = false}: ITableRow) {

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(isEmptyWork);

    const [rowName_S, setRowName_S] = useState(rowName);
    const [salary_S, setSalary_S] = useState(salary);
    const [equipmentCosts_S, setEquipmentCosts_S] = useState(equipmentCosts);
    const [overheads_S, setOverheads_S] = useState(overheads);
    const [estimatedProfit_S, setEstimatedProfits_S] = useState(estimatedProfit);

    const onDoubleClickEdit = () => {
        setIsEditing(true);
    }

    const onChangeRowName = (e: ChangeEvent<HTMLInputElement>) => {
        setRowName_S(e.target.value);
    }

    const onChangeSalary = (e: ChangeEvent<HTMLInputElement>) => {
        setSalary_S(Number(e.target.value));
    }

    const onChangeEquipmentCosts = (e: ChangeEvent<HTMLInputElement>) => {
        setEquipmentCosts_S(Number(e.target.value));
    }

    const onChangeOverheads = (e: ChangeEvent<HTMLInputElement>) => {
        setOverheads_S(Number(e.target.value));
    }

    const onChangeEstimatedProfits = (e: ChangeEvent<HTMLInputElement>) => {
        setEstimatedProfits_S(Number(e.target.value));
    }

    const onSaveEditing = () => {
        if(!isEmptyWork) setIsEditing(false);
        else dispatch<any>(createRowAC());
    }


    return (
        <>
            {
                isEditing &&
                    <div className="editing_bg" onClick={onSaveEditing} />
            }
            <tr className={isEditing ? "table_data selected_row" : "table_data"} onDoubleClick={() => onDoubleClickEdit()}>
                <td className="td_name">
                    {
                        level !== 1 &&
                        <div>
                            <div className="line_path_horizontal">
                                <div className="line_path_vertical" />
                            </div>
                        </div>
                    }
                    
                    <LevelCard level={level} />
                </td>
                <td> 
                    {
                        isEditing
                            ? <input 
                                type="text"
                                onChange={onChangeRowName}
                                value={rowName_S}/>
                            : rowName_S
                    }
                </td>
                <td> 
                    {
                        isEditing
                            ? <input 
                                type="number"
                                onChange={onChangeSalary}
                                value={salary_S}/>
                            : salary_S
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                onChange={onChangeEquipmentCosts}
                                value={equipmentCosts_S}/>
                            : equipmentCosts_S
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                onChange={onChangeOverheads}
                                value={overheads_S}/>
                            : overheads_S
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                onChange={onChangeEstimatedProfits}
                                value={estimatedProfit_S}/>
                            : estimatedProfit_S
                    } 
                </td>
            </tr>
        </>
        
    );
}

export default TableRow;