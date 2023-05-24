import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (<section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className="stat-list">
            {stats.map((el) => {
               return <li className="item-statistics" key={el.id}>
                <span className="label">{el.label}</span>
                <span className="percentage">{el.percentage}%</span>
            </li>
            })}
        </ul>
        </section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};