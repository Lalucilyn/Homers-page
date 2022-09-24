import { NextPage } from "next";
import { Container } from "./Styled";

const ContainerComponent: NextPage<React.HTMLAttributes<HTMLDivElement>> = ({children}) => {


  
  return (
  <Container>{children}</Container>
  )
}

  
  export default ContainerComponent
