import { kill } from "process";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRowsAC } from "../../store/actionCreators/workspaceActionCreator";
import { useTypedSelector } from "../../store/store";
import GroupCard from "../Works/GroupCard/GroupCard";
import LevelCard from "../Works/LevelCard/LevelCard";
import TableRow from "../Works/TableRow/TableRow";
import "./workspace.sass"

function WorkSpace() {

    // {
    //     "id": 29812,
    //     "rowName": "98c17964-d678-43ce-9f46-f7df3cab8a9f"
    // }

    const { rows } = useTypedSelector(state => state.workspace)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(setRowsAC());
    }, [])

    const arr = [
        {
            level: 1,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 2,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 2,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName: 'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },

    ]

    return (
        <div className="workspace">
            <div className="tabs">
                <div className="tabs_inner">
                    <p className="workspace_name">
                        Строительно-монтажные работы
                    </p>
                </div>
            </div>
            <table className="table">
                <tbody>
                    <tr className="table_header">
                        <td>Уровень</td>
                        <td className="table_name">Наименование работ</td>
                        <td>Основная з/п</td>
                        <td>Оборудование</td>
                        <td>Накладные расходы</td>
                        <td>Сметная прибыль</td>
                    </tr>
                    {
                        rows.length
                        ? rows.map((i, ind) =>
                            i.child.length
                                ? <>
                                    <TableRow
                                        key={ind}
                                        level={1}
                                        rowName={i.rowName}
                                        equipmentCosts={i.equipmentCosts}
                                        estimatedProfit={i.estimatedProfit}
                                        overheads={i.overheads}
                                        salary={i.salary}
                                        child={i.child} />
                                    {
                                        i.child.map((j, jind) =>
                                            j.child.length
                                                ? <>
                                                    <TableRow
                                                        key={jind}
                                                        level={2}
                                                        rowName={j.rowName}
                                                        equipmentCosts={j.equipmentCosts}
                                                        estimatedProfit={j.estimatedProfit}
                                                        overheads={j.overheads}
                                                        salary={j.salary}
                                                        child={j.child} />
                                                    {
                                                        j.child.map((k: any, kind: any) => <TableRow
                                                            key={kind}
                                                            level={3}
                                                            rowName={k.rowName}
                                                            equipmentCosts={k.equipmentCosts}
                                                            estimatedProfit={k.estimatedProfit}
                                                            overheads={k.overheads}
                                                            salary={k.salary}
                                                            child={k.child} />)
                                                    }
                                                </>
                                                : <TableRow
                                                    key={jind}
                                                    level={2}
                                                    rowName={j.rowName}
                                                    equipmentCosts={j.equipmentCosts}
                                                    estimatedProfit={j.estimatedProfit}
                                                    overheads={j.overheads}
                                                    salary={j.salary}
                                                    child={j.child} />
                                        )
                                    }
                                </>
                                : <TableRow
                                    key={ind}
                                    level={2}
                                    rowName={i.rowName}
                                    equipmentCosts={i.equipmentCosts}
                                    estimatedProfit={i.estimatedProfit}
                                    overheads={i.overheads}
                                    salary={i.salary}
                                    child={i.child} />
                        )
                            : <TableRow
                                key={1}
                                level={1}
                                rowName={'Введите наименование'}
                                equipmentCosts={0}
                                estimatedProfit={0}
                                overheads={0}
                                salary={0}
                                child={[]}
                                isEmptyWork={true} />
                    }

                </tbody>
            </table>
            {/* <TableRow
                key={ind}
                level={2}
                rowName={i.rowName}
                equipmentCosts={i.equipmentCosts}
                estimatedProfit={i.estimatedProfit}
                overheads={i.overheads}
                salary={i.salary}
                child={i.child} /> */}
            <div className="works_list">
                {/* <GroupCard
                    key={0}
                    level={1}
                    rowName={'Южная строительная площадка'}
                    salary={20348}
                    equipmentCosts={1750}
                    overheads={108.07}
                    estimatedProfit={1209122.5} /> */}



            </div>
        </div>
    );
}

export default WorkSpace;