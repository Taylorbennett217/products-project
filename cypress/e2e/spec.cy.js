describe("template spec", () => {
	it("passes", () => {
		cy.visit("localhost/sites/products-project");

		cy.get("h1").should("have.text", "Products").should("be.visible");

		cy.get("ul[name=products-list]").should("be.visible");
	});
});

it("creates a testimonial", () => {
	cy.visit("localhost/sites/testimonials-project");

	cy.get("form").should("be.visible");

	const fakeTestimonial = generateTestimonial();
	//const { feedback: testFeedback, rating: testRating } = fakeTestimonial;

	const testFeedback = fakeTestimonial.feedback;
	const testRating = fakeTestimonial.rating;
	//const testFeedback = "Example feedback";
	//const testRating = 5;
	cy.get("form input[name=feedback]").type(testFeedback);
	cy.get("form input[name=rating").type(testRating);

	cy.get("form input[type=submit").click();

	cy.url().should("eq", "http://localhost/sites/testimonials-project/create.php");

	cy.contains("Testimonial Created!");

	cy.get("a").should("have.text", "Return to Testimonials").click();

	cy.url().should("eq", "http://localhost/sites/testimonials-project/index.php");

	cy.get("ul[name=testimonials-list] li")
		.last()
		.should("have.text", `${testFeedback} ${testRating}/5`);
});
