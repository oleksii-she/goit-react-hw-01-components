import styled from 'styled-components';

export const ProfleBox = styled.div`
  padding-bottom: ${p => p.theme.space[4]}px;
  margin: auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DescriptionTitle = styled.h2`
  margin: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const DescriptionText = styled.p`
  margin: ${p => p.theme.space[0]}px;
  font-family: ${p => p.theme.fonts[0]};
  margin-bottom: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  color: #bebebe;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
  margin: auto;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${p => p.theme.space[2]}px;
  &:last-child {
    margin-right: ${p => p.theme.space[0]}px;
  }
  &:hover {
    background-color: ${p => p.theme.colors.primary};
    transition: 3ms;
  }
  font-weight: ${p => p.theme.fontWeights[1]};
  padding: ${p => p.theme.space[1]}px;

  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 30px;
`;
