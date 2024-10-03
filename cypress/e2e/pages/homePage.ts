// <reference types =”cypress”/>
require('cypress-plugin-tab')

export default class HomePage {

    hauchSiteUrl = "https://hauch.org/"
    homeHeader = '[id="site-title"]'

    openHomePage() {
		cy.visit(this.hauchSiteUrl);
	}

    verifyPageHeader() {
        cy.get(this.homeHeader).contains('Hauch.org');
    }
}