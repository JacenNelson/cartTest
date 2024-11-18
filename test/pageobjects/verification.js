import { $ } from '@wdio/globals'
import Site from './website.js'

class Verify extends Site {
    get ItemCount () {
        return $('span[class="shopping_cart_badge"]')
    }
    get removedItem () {
        return $('button#remove-sauce-labs-bike-light')
    }
}
export default new Verify();