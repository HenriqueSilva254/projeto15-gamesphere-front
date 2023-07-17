import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { UserContext } from '../contexts/userContext.jsx'

function ShoppingCartPage() {
  // const {shoppingCart, setShoppingCart} = useContext(UserContext)

  return (
    <ShoppingCartList>

    </ShoppingCartList>
  )
}

export default ShoppingCartPage

const ShoppingCartList = styled.div`
  width: 100%;
`