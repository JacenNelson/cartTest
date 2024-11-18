import { $ } from '@wdio/globals'
import Site from './website.js'
import { browser } from '@wdio/globals'
import Verify from './verification.js'

class Cart extends Site {
    get cartItem1 () {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }
    get cartItem2 () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get cartItem3 () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get cartLink () {
        return $('a.shopping_cart_link')
    }
    get removeBtn () {
        return $('button#remove-sauce-labs-bike-light')
    }
    get continueShoppingBtn () {
        return $('button#continue-shopping')
    }
    get itemDescription () {
        return $('a.item_4_title_link')
    }
    async addItems () {
        this.cartItem1.click()
        this.cartItem2.click()
        this.cartItem3.click()
        expect(Verify.ItemCount).toHaveText('3')
    }
    async goToCart () {
        this.cartLink.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    }
    async removeItem () {
        this.removeBtn.click()
        expect (Verify.removedItem).not.toBeExisting()
    }
    async continueShopping () {
        this.continueShoppingBtn.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }
    async itemDescriptionPage () {
        this.itemDescription.click()
        expect (browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    }
   }
export default new Cart()