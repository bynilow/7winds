import Divider from "../Divder/Divider";
import "./nav.sass"
import ProjectCard from "./Project_Card/ProjectCard";

function Nav() {

    const projectNames = [
        'По проекту',
        'Объекты',
        'РД',
        'МТО',
        'СМР',
        'График',
        'МиМ',
        'Рабочие',
        'Капвложения',
        'Бюджет',
        'Финансирование',
        'Панорамы',
        'Камеры',
        'Поручения',
        'Контрагенты'
    ]

    return ( 
        <nav>
            <div className="main_block">
                <div className="main_info">
                    <p className="main_name">
                        Название проекта
                    </p>
                    <p className="main_abbreviation">
                        Аббревиатура
                    </p>
                </div>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="white" />
                </svg>

            </div>
            <div className="list_projects">
                {
                    projectNames.map((i,ind) => <ProjectCard key={ind} name={i} isSelected={false} />)
                }
            </div>
        </nav>
     );
}

export default Nav;