describe("template spec", () => {
	it("passes", () => {
		cy.visit("localhost/sites/products-project");

		cy.get("h1").should("have.text", "Produ").should("be.visible");

		cy.get("ul[name=products-list]").should("be.visible");
	});
});
