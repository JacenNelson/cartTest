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
    async addItems () {
        this.cartItem1.click()
        this.cartItem2.click()
        this.cartItem3.click()
    }
}
export default new Cart()