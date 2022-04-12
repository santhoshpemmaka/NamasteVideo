import {v4 as uuid} from "uuid";

const AllVideos = [
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/eEr56MfFP6I/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8QASoKFpEAqCj7ukBJ2E1ka5JoA",
		description: "Bengaluru, India 4K HD 60FPS by Drone",
		source: "Exploropia",
		date: "Oct 12 2021",
		country: "INDIA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/l-5rGi8_A_4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2UN3ctt1-8Oo3F-kPCCIKIS6DwQ",
		description: "Delhi, India 4K HD 60FPS by Drone",
		source: "Exploropia",
		date: "Dec 12 2021",
		country: "INDIA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/awbSDvDCc_M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCMRqT8we5PmsnnnNBKzgk87DjtWg",
		description: "Udaipur, Rajasthan India 4K HD 60FPS by Drone",
		source: "Exploropia",
		date: "Dec 09 2020",
		country: "INDIA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/iFT4UDr3MHs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeUBruQvpzm0-OOe1WVxXZph8T4A",
		description: "Wonders of the World 4K HD 60FPS by Drone",
		source: "Exploropia",
		date: "Jan 12 2021",
		country: "OTHERS",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/m2VGQ5IRLSE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBonzWH0riws2W2wOenqX6UUr4-Tg",
		description: "Las Vegas, Nevada, USA 8K HD by Drone",
		source: "Exploropia",
		date: "Jan 12 2019",
		country: "USA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/1GYcoL-0mrU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT0TyPmpUqYpWXlQPyzQ2evDpeZQ",
		description: "New York City, USA 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jan 12 2020",
		country: "USA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/KbG_SzqgM74/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrtvBXbrMa5Z2HLpy6ji9bgy12Kg",
		description: "Chicago, USA 8K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jun 12 2020",
		country: "USA",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/TYfYX0ngLkE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJ2VOejZQhGQ4akLgQ82oUp_x_xQ",
		description: "Kyiv, Ukraine 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jun 12 2019",
		country: "EUROPE",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/4SGLxZnqYIg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHVLoxm05GDmEsWir7hQmrVyQ8bg",
		description: "Berlin, Germany 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jul 12 2019",
		country: "EUROPE",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/u44LT4kyCLU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUHtYmnTme0u4EW1pEgk0SaKyDcg",
		description: "Lisbon, Portugal 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jul 12 2020",
		country: "EUROPE",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/dB5MLNtzt20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcNBZwgUs-B5iwR4n6qVRLjxgeng",
		description: "London, England 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jul 12 2020",
		country: "EUROPE",
	},
	{
		_id: uuid(),
		image:
			"https://i.ytimg.com/vi/aaGJ_fDcceg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRyOOwAT7T_8ELj4Ag9HZhneLnEg",
		description: "Singapore 4K HD 60FPS by Drone ",
		source: "Exploropia",
		date: "Jul 12 2020",
		country: "OTHERS",
	},
];

export default AllVideos;
