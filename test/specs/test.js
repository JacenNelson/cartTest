import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Cart from '../pageobjects/cartGettersAndFunctions.js'

describe('Test should Pass', () => {
    it('should pass', async () => {
    await Login.open()
    await Login.validLogin('standard_user','secret_sauce')
    await Cart.addItems()
    await Cart.goToCart()
    await Cart.continueShopping()
    await Cart.goToCart()
    await Cart.removeItem()
    await Cart.itemDescriptionPage()
})
})