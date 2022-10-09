import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsSpan,
} from './Statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      <StatisticsTitle>{title}</StatisticsTitle>
      <StatisticsList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            style={{ backgroundColor: generateHEx() }}
          >
            <StatisticsSpan>{stat.label}</StatisticsSpan>
            <StatisticsSpan>{stat.percentage}%</StatisticsSpan>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
function generateHEx() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
