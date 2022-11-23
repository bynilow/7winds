import GroupCard from "../Works/GroupCard/GroupCard";
import LevelCard from "../Works/LevelCard/LevelCard";
import TableRow from "../Works/TableRow/TableRow";
import "./workspace.sass"

function WorkSpace() {

    // {
    //     "id": 29812,
    //     "rowName": "98c17964-d678-43ce-9f46-f7df3cab8a9f"
    // }

    const arr = [
        {
            level: 1,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 2,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 2,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName:  'Южная строительная площадка',
            salary: 20348,
            equipmentCosts: 1750,
            overheads: 108.07,
            estimatedProfit: 1209122.5
        },
        {
            level: 3,
            rowName:  'Южная строительная площадка',
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
                        arr.map((i, ind) => <TableRow
                            key={ind}
                            level={i.level}
                            rowName={i.rowName}
                            equipmentCosts={i.equipmentCosts}
                            estimatedProfit={i.estimatedProfit}
                            overheads={i.overheads}
                            salary={i.salary} />)
                    }
                </tbody>
            </table>
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