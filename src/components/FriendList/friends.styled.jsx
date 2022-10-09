import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
  margin-right: ${p => p.theme.space[1]}px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: auto;

  width: fit-content;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  width: fit-content;
  margin-right: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-right: ${p => p.theme.space[3]}px;
  }
  margin-bottom: ${p => p.theme.space[0]}px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
`;

export const Text = styled.p`
  margin-left: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts[2]};
  font-weight: ${p => p.theme.fontWeights[2]};
`;
