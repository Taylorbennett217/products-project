import generateProduct from "../../util/generate-product";
describe("template spec", () => {
	it("passes", () => {
		cy.visit("localhost/sites/products-project");

		cy.get("h1").should("have.text", "Products").should("be.visible");

		cy.get("ul[name=products-list]").should("be.visible");
	});
});

it("creates a product", () => {
	cy.visit("localhost/sites/products-project");

	cy.get("form").should("be.visible");

	const fakeProduct = generateProduct();

	const testProduct = fakeProduct.product;
	const testPrice = fakeProduct.price;
	const testInventoryCount = fakeProduct.inventoryCount;

	cy.get("form input[name=product]").type(testProduct);
	cy.get("form input[name=price]").type(testPrice);
	cy.get("form input[name=inventoryCount]").type(testInventoryCount);

	cy.get("form input[type=submit]").click();

	cy.url().should("eq", "http://localhost/sites/products-project/create.php");

	cy.contains("Product Created!");

	cy.get("a").should("have.text", "Return to Products").click();

	cy.url().should("eq", "http://localhost/sites/products-project/index.php");

	cy.get("ul[name=products-list] li")
		.last()
		.should("have.text", `${testProduct} ${testPrice} ${testInventoryCount}`);

	//cy.get("ul[name=products-list] li").last().should("contain.text", testProduct);
	//cy.get("ul[name=products-list] li").last().should("contain.text", testPrice);
	//cy.get("ul[name=products-list] li").last().should("contain.text", testInventoryCount);
});
