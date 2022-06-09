import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AnyStyledComponent } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.attention};
`;
