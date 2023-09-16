import { filterInput } from './utils/FilterTools';

describe('filterInput', () => {
	const testData = [
		{
			"type": "crocodilia",
			"id": 1,
			"url": "https://diligent-hacienda.com",
			"title": "Gharial",
			"description": "Libero qui cupiditate architecto laudantium tenetur dolorem magni. Cumque facilis eius molestias id beatae. Odio saepe mollitia rerum dolor nihil blanditiis.",
			"image": "https://loremflickr.com/644/362/animals?lock=783987081478144"
		},
		{
			"type": "dog",
			"id": 2,
			"url": "https://vast-yoyo.name/",
			"title": "Cantabrian Water Dog",
			"description": "Accusamus iusto et odio. Repudiandae velit tempore. Cupiditate voluptas voluptas iste dolorem totam aliquam. Cumque expedita enim voluptatem quo nam. Laboriosam quis veritatis molestiae nisi dolorum harum odit neque. Totam nesciunt et eligendi possimus ipsam sunt a enim.",
			"image": "https://loremflickr.com/644/362/animals?lock=4795908979949568"
		},
		{
			"type": "cetacean",
			"id": 3,
			"url": "https://definite-daffodil.net/",
			"title": "Burrunan Dolphin",
			"description": "Explicabo quisquam atque fugit. Iste veritatis consectetur consequuntur atque sint quasi inventore dolor illum.",
			"image": "https://loremflickr.com/644/362/animals?lock=464519656636416"
		},
		{
			"type": "horse",
			"id": 4,
			"url": "https://blind-riddle.com",
			"title": "Losino Horse",
			"description": "Accusantium officia in pariatur rerum facilis. Nemo ea tenetur hic eaque fugiat odio labore nulla.",
			"image": "https://loremflickr.com/644/362/animals?lock=889930284793856"
		},
		{
			"type": "crocodilia",
			"id": 5,
			"url": "https://sparkling-bass.info/",
			"title": "Spectacled Caiman",
			"description": "Aut nulla beatae. Rem dolore maiores suscipit fuga labore doloremque autem corporis iste. Eveniet vel quibusdam sit ullam quidem hic veritatis eos in.",
			"image": "https://loremflickr.com/644/362/animals?lock=7697024153550848"
		}
	];

	it('should filter correctly based on type', () => {
		const searchInput = 'crocodilia';
		const result = filterInput(testData, searchInput);
		const expected = [
			{
				"type": "crocodilia",
				"id": 1,
				"url": "https://diligent-hacienda.com",
				"title": "Gharial",
				"description": "Libero qui cupiditate architecto laudantium tenetur dolorem magni. Cumque facilis eius molestias id beatae. Odio saepe mollitia rerum dolor nihil blanditiis.",
				"image": "https://loremflickr.com/644/362/animals?lock=783987081478144"
			},
			{
				"type": "crocodilia",
				"id": 5,
				"url": "https://sparkling-bass.info/",
				"title": "Spectacled Caiman",
				"description": "Aut nulla beatae. Rem dolore maiores suscipit fuga labore doloremque autem corporis iste. Eveniet vel quibusdam sit ullam quidem hic veritatis eos in.",
				"image": "https://loremflickr.com/644/362/animals?lock=7697024153550848"
			}
		];
		expect(result).toEqual(expected);
	});

	it('should filter correctly based on title', () => {
		const searchInput = 'Gharial';
		const result = filterInput(testData, searchInput);
		const expected = [
			{
				"type": "crocodilia",
				"id": 1,
				"url": "https://diligent-hacienda.com",
				"title": "Gharial",
				"description": "Libero qui cupiditate architecto laudantium tenetur dolorem magni. Cumque facilis eius molestias id beatae. Odio saepe mollitia rerum dolor nihil blanditiis.",
				"image": "https://loremflickr.com/644/362/animals?lock=783987081478144"
			}
		];
		expect(result).toEqual(expected);
	});

	it('should return an empty array if there are no matches', () => {
		const searchInput = 'Does not exist';
		const result = filterInput(testData, searchInput);
		const expected = [];
		expect(result).toEqual(expected);
	});
});
