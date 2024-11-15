import { browser } from '@wdio/globals'

export default class site {
    open() {
        return browser.url('https://www.saucedemo.com/')
    }
}