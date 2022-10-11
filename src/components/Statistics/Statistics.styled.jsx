import styled from 'styled-components';

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsTitle = styled.h2`
  margin: ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontWeights[6]}px;
  font-weight: ${p => p.theme.fontWeights[2]};
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-right: ${p => p.theme.space[0]}px;
  }
  color: ${p => p.theme.colors.background};

  background-color: ${generateHEx};

  /* background-color: #ffffff; */
  -webkit-box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
`;

export const StatisticsSpan = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;

function generateHEx() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
