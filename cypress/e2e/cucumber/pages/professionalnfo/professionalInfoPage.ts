require('cypress-plugin-tab')

export default class ProfessionalInfoPage {

    // Top Nav
    hauchSiteUrl = "https://hauch.org/"
    professionalInfoButton = "Professional Info"
    professionalInfoRelativePath = "/professional-info"

    verifyProfessionalInfoPageURL() {
		cy.url().should('include', this.professionalInfoRelativePath);
	}
}