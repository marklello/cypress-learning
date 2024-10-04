require('cypress-plugin-tab')

export default class HomePage {

    // Top Nav
    hauchSiteUrl = "https://hauch.org/"
    professionalInfoButton = "Professional Info"
    professionalInfoUrl = "https://hauch.org/professiona-info/"

    // Page Elements
    homeHeader = '[id="site-title"]'
    blogPosts = 'Blog Posts'
    professionalInformation = 'Professional Information'
    personalNotes = 'Personal Notes'

    openHomePage() {
		cy.visit(this.hauchSiteUrl);
	}

    clickProfessionalInfoButton() {
        cy.contains(this.professionalInfoButton).scrollIntoView().click();
    }

    verifyPageHeader() {
        cy.get(this.homeHeader).contains('Hauch.org');
        cy.get(this.homeHeader).should('be.visible');
    }

    verifyBlogPostsIsDisplayed() {
        cy.contains(this.blogPosts).scrollIntoView().should('be.visible');
    }

    verifyProfessionalInfoIsDisplayed() {
        cy.contains(this.professionalInformation).scrollIntoView().should('be.visible');
    }

    verifyPersonalNotesIsDisplayed() {
        cy.contains(this.personalNotes).scrollIntoView().should('be.visible');
    }

    verifyProfessionalInforButtonIsDisplayed() {
        cy.contains(this.professionalInfoButton).scrollIntoView().should('be.visible');
    }
}