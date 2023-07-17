import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { UserContext } from '../contexts/userContext.jsx'

function ShoppingCartPage() {
  const {shoppingCart, setShoppingCart} = useContext(UserContext)

  return (
    <ShoppingCartList>
      {shoppingCart.map((game) => (
                <GameListItem
                  key={game.title}
                  image={game.image}
                  price={game.price}
                  title={game.title}
                  category={game.category.join(", ")}
                />
              ))}
    </ShoppingCartList>
  )
}

export default ShoppingCartPage

const ShoppingCartList = styled.div`
  width: 100%;
`