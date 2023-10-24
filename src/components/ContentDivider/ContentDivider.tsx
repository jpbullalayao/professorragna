import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledDivider = styled.hr`
  width: 75%;
  border-style: dashed;
  border-color: #6e58b1;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContentDivider = () => <StyledDivider />;
