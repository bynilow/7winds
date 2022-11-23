import { createRef, useRef, useState } from "react";
import LevelCard from "../LevelCard/LevelCard";
import "./tablerow.sass"

interface ITableRow {
    level: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
}

function TableRow({level, rowName, salary, equipmentCosts, overheads, estimatedProfit}: ITableRow) {

    const [isEditing, setIsEditing] = useState(false);

    const nameRef = createRef<any>();
    const salaryRef = createRef<any>();

    const onDoubleClickEdit = () => {
        setIsEditing(true);
        console.log(nameRef.current == document.activeElement || salaryRef.current == document.activeElement)
    }

    return (
        <>
            {
                isEditing &&
                    <div className="editing_bg" onClick={() => setIsEditing(false)} />
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
                                ref={nameRef}
                                value={rowName}/>
                            : rowName
                    }
                </td>
                <td> 
                    {
                        isEditing
                            ? <input 
                                type="number"
                                ref={salaryRef}
                                value={salary}/>
                            : salary
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                value={equipmentCosts}/>
                            : equipmentCosts
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                value={overheads}/>
                            : overheads
                    } 
                </td>
                <td>
                    {
                        isEditing
                            ? <input 
                                type="number" 
                                value={estimatedProfit}/>
                            : estimatedProfit
                    } 
                </td>
            </tr>
        </>
        
    );
}

export default TableRow;