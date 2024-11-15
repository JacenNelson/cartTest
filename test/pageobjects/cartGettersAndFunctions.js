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
    get continueShoppingBtn () {
        return $('button#continue-shopping')
    }
    get checkoutBtn () {
        return $('button#checkout')
    }
    get cancelBtn () {
        return $('button#cancel')
    }
    get firstNameField () {
        return $('input#first-name')      
    }
    get lastNameField () {
        return $('input#last-name')
    }
    get zipCodeField () {
        return $('input#postal-code')
    }
    get continueBtn () {
        return $('input#continue')
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
        this.continueShoppingBtn.click()
    }
    async checkout() {
        this.checkoutBtn.click()
    }
    async cancel () {
        this.cancelBtn.click()
    }
    async firstNameEnter (firstname) {
        await this.firstNameField.setValue(firstname)
    }
    async lastNameEnter(lastname) {
        await this.lastNameField.setValue(lastname)
    }
    async zipCodeEnter(postalcode) {
        await this.zipCodeField.setValue(postalcode)
    }
    async firstNameClear () {
        await this.firstNameField.clearValue()
    }
    async lastNameClear() {
        await this.lastNameField.clearValue()
    }
    async zipCodeClear() {
        await this.zipCodeField.clearValue()
    }
    async continue() {
        this.continueBtn.click()
    }
}
export default new Cart()