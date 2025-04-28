import { faker } from "@faker-js/faker";

export default function generateProduct() {
	return {
		product: faker.lorem.words(2),
		price: faker.finance.amount({ min: 0, max: 100 }),
		inventoryCount: faker.number.int({ min: 0, max: 100 }),
	};
}
