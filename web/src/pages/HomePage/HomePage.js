import styled from 'styled-components'

import ProductsCell from 'src/components/ProductsCell'
import Nav from './Components/Nav'
import Body from './Components/Body'

const HomePage = () => {
  return (
    // <Wrapper>
    //   <article>
    //     <h2>Super Tokens</h2>
    //     <Description>
    //       These are single-use tokens. Great for emergencies and gifts.
    //     </Description>
    //     <ProductsCell />
    //   </article>

    //   <article>
    //     <h2>Super Subs</h2>
    //     <Description>
    //       Monthly subscriptions to superpowers. Great for the career
    //       supervillain, hero or parent.
    //     </Description>
    //     <ProductsCell type={'recurring'} />
    //   </article>
    // </Wrapper>
    <Body />
  )
}

export default HomePage

// Styles

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: calc(var(--padding) * 2);
`

const Description = styled.p`
  margin-bottom: var(--padding);
`
