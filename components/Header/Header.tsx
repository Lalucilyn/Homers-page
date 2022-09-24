import SlidingText from './SlidingHeaderTextComponent/SlidingHeaderTextComponent'
import Paragraph from '../Paragraph/paragraph'
import HeaderImage from  './HeaderImage/HeaderImage'
import FlexComponent from '../FlexComponent/FlexComponent'
import FlexItem from '../FlexComponent/FlexItemComponent'
import { Header} from './Styled'
import { slideLeft } from '../../animations'


const flexCss = {
  animation: `${slideLeft} 1s linear`,
}

const HeaderComponent = () => {
  return (

      <Header>
      <FlexComponent direction={{'@initial': 'column', '@sm': 'row'}} justifyContent="space-between" gap="xl"  alignItems="center">
      <FlexItem css={flexCss} flexBasis="50%">
      <FlexComponent gap="lg" direction="column">
      <SlidingText delay={1000} text="Hi, I'm Lu"/>
      <Paragraph text="Cupcake ipsum dolor sit amet. Donut topping bonbon wafer chupa chups. Croissant gummi bears danish bear claw sugar plum toffee jelly beans. Carrot cake gummies sesame snaps jujubes shortbread jelly brownie jelly. Lollipop oat cake marshmallow tart powder. Pudding gummies macaroon donut carrot cake halvah. Tootsie roll wafer jelly beans marshmallow lemon drops. Icing jelly icing caramels macaroon shortbread."></Paragraph>

      </FlexComponent>
      </FlexItem>
      <FlexItem flexBasis="50%">
      <HeaderImage/>
      </FlexItem>
      </FlexComponent>
      </Header>


  )
}

export default HeaderComponent