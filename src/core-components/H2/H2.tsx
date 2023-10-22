import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledH2 = styled.h2`
  font-size: 20px;
  line-height: 1.5em;
`;

export const H2 = ({ children }: Props) => <StyledH2>{children}</StyledH2>;
