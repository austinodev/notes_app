import styled from "styled-components";

export const AuthContainer = styled.View`
  padding: 20px;
  margin: auto 0;
`;

export const LoginWrapper = styled.View`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SignupWrapper = styled.View`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  padding: 20px 20px;
  font-size: 20px;
  background: aliceblue;
  border-radius: 5px;
`;

export const Btn = styled.TouchableOpacity`
  width: 100px;
  margin: 0 auto;
  background: dodgerblue;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
`;
