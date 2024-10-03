/// <reference types='Cypress' />

import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"

import HomePage from "../../pages/homePage";

const homePage = new HomePage()

Given(/^I open the Colins site home page in viewport "([^"]*)"$/, (viewport) => {
	console.log(viewport);

	cy.viewport(viewport);
	homePage.openHomePage();
});
