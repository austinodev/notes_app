import styled from "styled-components";

export const AuthContainer = styled.View`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background: #595C6E;
`;

export const LoginWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SignupWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  color: #fff !important;
  padding: 20px 20px;
  border: 1px solid #595C6E;
  font-size: 20px;
  background: #686C80;
`;

export const Btn = styled.TouchableOpacity`
  max-width: 300px;
  padding: 14px 20px;
  background: #66D977;
  margin: 40px 60px;
  text-align: center;
  border-radius: 40px;
`;
