function sortProducts(products, sortType) {
	const sortBy = products;

	switch (sortType) {
		case "nameALP":
			sortBy.sort((previous, current) => {
				if (previous.name < current.name) {
					return -1;
				} else if (previous.name > current.name) {
					return 1;
				}
				return 0;
			});
			break;
		case "priceASC":
			sortBy.sort((previous, current) => {
				if (previous.price < current.price) {
					return -1;
				} else if (previous.price > current.price) {
					return 1;
				}
				return 0;
			});
			break;
		case "ratingDESC":
			sortBy.sort((previous, current) => {
				if (previous.rating > current.rating) {
					return -1;
				} else if (previous.rating < current.rating) {
					return 1;
				}
				return 0;
			});
			break;
	}

	return sortBy;
}

module.exports = sortProducts;
