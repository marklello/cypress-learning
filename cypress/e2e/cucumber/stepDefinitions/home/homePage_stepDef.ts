/// <reference types='Cypress' />

import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

import HomePage from "../../pages/home/homePage";
import ProfessionalInfoPage from "../../pages/professionalnfo/professionalInfoPage";

const homePage = new HomePage()
const professionalInfoPage = new ProfessionalInfoPage()

Given(/^I open the Colins site home page in viewport "([^"]*)"$/, (viewport) => {
	console.log(viewport);

	cy.viewport(viewport);
	homePage.openHomePage();
});


Then(/^I should see the Colins site home page$/, () => {
	homePage.verifyPageHeader()
	homePage.verifyBlogPostsIsDisplayed()
	homePage.verifyProfessionalInfoIsDisplayed()
	homePage.verifyPersonalNotesIsDisplayed()
	homePage.verifyProfessionalInforButtonIsDisplayed()
});

When(/^I click the professional info button$/, () => {
	homePage.clickProfessionalInfoButton()
});

Then(/^I should see the professional info page$/, () => {
	professionalInfoPage.verifyProfessionalInfoPageURL()
});
