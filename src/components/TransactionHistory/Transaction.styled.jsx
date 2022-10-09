import styled from 'styled-components';

export const Table = styled.table`
  /* display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px; */
  width: 500px;
  margin: 0px auto;
  border-collapse: collapse;
`;

export const TableThead = styled.thead`
  background-color: aqua;
`;

export const TableTh = styled.th`
  margin-right: 20px;
  border: 1px solid grey;
  padding: ${p => p.theme.space[1]}px;
`;

export const TableTd = styled.td`
  margin-right: 20px;
  border: 1px solid grey;
  padding: ${p => p.theme.space[1]}px;
  &:nth-child(even) {
    background-color: ${props => props.theme.colors.primary};
  }
`;
