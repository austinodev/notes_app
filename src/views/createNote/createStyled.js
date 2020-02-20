import styled from 'styled-components';

export const NoteHeader = styled.View`
  height: 60px;
  background: #fff;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TagText = styled.TextInput`
   font-size: 20px;
   padding-bottom: 0;
`;

export const NoteText = styled.TextInput`
  font-size: 20px;
  padding: 0;
`;
