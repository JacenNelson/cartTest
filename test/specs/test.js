import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Cart from '../pageobjects/cartGettersAndFunctions.js'
import Verify from '../pageobjects/verification.js'

describe('Test should Pass', () => {
    it('should pass', async () => {
    await Login.open()
    await Login.validLogin('standard_user','secret_sauce')
    await Cart.addItems()
    await expect(Verify.ItemCount).toHaveText('3')
    await Cart.goToCart()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    await Cart.continueShopping()
    await expect(Verify.Menu).toBeExisting()
    await Cart.goToCart()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    await Cart.removeItem()
    await expect(Verify.removedItem).not.toBeExisting()
    await Cart.checkout()
    })
})