import { $ } from '@wdio/globals'
import Site from './website.js'

class Hamburger extends Site {
    get menuBtn () {
        return $('button[id="react-burger-menu-btn"]')
    }
    get inventoryBtn () {
        return $('a#inventory_sidebar_link')
    }
    get aboutBtn () {
        return $('a#about_sidebar_link')
    }
    get logoutBtn () {
        return $('a#logout_sidebar_link')
    }
    get resetBtn () {
        return $('a#reset_sidebar_link')
    }

    async menuOpen () {
        this.menuBtn.click();
    }
    async hoverInventory () {
        this.inventoryBtn.moveTo();
        expect(this.inventoryBtn).toHaveElementProperty('color', '#3ddc91')
    }
    async hoverAbout () {
        this.aboutBtn.moveTo();
        expect(this.aboutBtn).toHaveElementProperty('color', '#3ddc91')
    }
    async hoverLogout () {
        this.logoutBtn.moveTo();
        expect(this.logoutBtn).toHaveElementProperty('color', '#3ddc91')
    }
    async hoverReset () {
        this.resetBtn.moveTo();
        expect(this.resetBtn).toHaveElementProperty('color', '#3ddc91')
    }
    async Inventory () {
        this.inventoryBtn.click();
    }
    async about() {
        this.aboutBtn.click();
    }
    async reset() {
        this.resetBtn.click();
    }
    async logout() {
        this.logoutBtn.click();
    }
}
export default new Hamburger()