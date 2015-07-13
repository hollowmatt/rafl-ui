function dataModel() {
	var self = this;

	//Dummy data until we get an API
	self.allRafls = [
		{
			id: 1,
			itemCategory: 'Vehiles',
			itemName: 'Motorcylce',
			raflCharity: 'SPCA',
			raflDate: '2015-08-01',
			image: 'img_1_full.jpg'
		},
		{
			id: 2,
			itemCategory: 'Furniture',
			itemName: 'Couch',
			raflCharity: '',
			raflDate: '2015-08-01',
			image: 'img_2_full.jpg'
		}
	];

	//Dummy data until we get an API
	self.rafleDetails = [
		{
			id: 1,
			itemCategory: 'Vehiles',
			itemName: 'Motorcylce',
			raflCharity: 'SPCA',
			raflCreatedDate: '20015-06-01',
			raflDate: '2015-08-01',
			image: 'img_1_full.jpg',
			thumbnail: 'img_1_thumb.jpg',
			raflOwner: 'Matt Holloway',
			raflFee: '2.00',
			raflFirstFree: true,
			raflEntrants: [
				{
					firstName: "Billy",
					lastName: "Truong",
					entries: 1
					feesRaised: 0
				},
				{
					firstName: "Jocelin",
					lastName: "Zamudio",
					entries: 5,
					feesRaised: 8.00
				}
			]
		},
		{
			id: 2,
			itemCategory: 'Furniture',
			itemName: 'Couch',
			raflCharity: '',
			raflCreatedDate: '20015-06-01',
			raflDate: '2015-08-01',
			image: 'img_2_full.jpg',
			thumbnail: 'img_2_thumb.jpg',
			raflOwner: 'Billy Truong',
			raflFee: '0.00',
			raflFirstFree: true,
			raflEntrants: [
				{
					firstName: "Jocelin",
					lastName: "Zamudio",
					entries: 1
					feesRaised: 0
				},
				{
					firstName: "Amir",
					lastName: "Hashmani",
					entries: 1,
					feesRaised: 0
				}
			]
		}
	];
	
}
