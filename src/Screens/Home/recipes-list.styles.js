import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RecipeList = styled(FlatList).attrs({
  contentContainerStyle: {
    // padding: 16,
    // marginTop: -100,
  },
})``;

export const RecipeListContainer = styled.View`
  margin-top: -10px;
`;
