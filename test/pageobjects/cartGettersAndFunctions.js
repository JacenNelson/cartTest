import { $ } from '@wdio/globals'
import Site from './website.js'

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
    get continueBtn () {
        return $('button#continue-shopping')
    }
    get checkoutBtn () {
        return $('button#checkout')
    }
    async addItems () {
        this.cartItem1.click()
        this.cartItem2.click()
        this.cartItem3.click()
    }
    async goToCart () {
        this.cartLink.click()
    }
    async removeItem () {
        this.removeBtn.click()
    }
    async continueShopping () {
        this.continueBtn.click()
    }
    async checkout() {
        this.checkoutBtn.click()
    }
}
export default new Cart()