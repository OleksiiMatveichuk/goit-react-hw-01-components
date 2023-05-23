export const Statistics = ({title, stats}) => {
    return (<section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map((el, i) => {
               return <li className="item" key={el.id}>
                <span className="label">{el.label}</span>
                <span className="percentage">{el.percentage}%</span>
            </li>
            })}
        </ul>
        </section>)
};
    