import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Login from '../pageobjects/login.js'
import Hamburger from '../pageobjects/hamburger.menu.js'
import Cart from '../pageobjects/addToCart.js'
import Verify from '../pageobjects/verification.js'

describe('Test should Pass', () => {
    it('should pass', async () => {
    await Login.open()
    await Login.validLogin('standard_user', 'secret_sauce')
    await Hamburger.menuOpen()
    await expect(Verify.Menu).toBeExisting()
    await Hamburger.hoverInventory()
    await Hamburger.hoverAbout()
    await Hamburger.hoverLogout()
    await Hamburger.hoverReset()
    await Hamburger.Inventory()
    await Hamburger.about()
    await expect(browser).toHaveUrl('https://saucelabs.com/')
    await browser.back()
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await Cart.addItems()
    await expect(Verify.ItemCount).toHaveText('3')
    await Hamburger.menuOpen()
    await Hamburger.reset()
    await expect(Verify.ItemCount).not.toBeExisting()
    await Hamburger.logout()
    await expect(Verify.Menu).not.toBeExisting()
    })
})