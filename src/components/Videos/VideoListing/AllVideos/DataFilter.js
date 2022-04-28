export const getFilterData = (state, data) => {
	let newData = data;
	newData = newData.filter((data) =>
		state.sortBy === "ALL" ? data : data.category === state.sortBy
	);
	return newData;
};

export const getFilterDate = (state, data) => {
	let newData = data;
	if (state.sortByDate) {
		return [...newData].sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
	}
	return newData;
};

export const getSearchName = (state) => {
	let searchText = state.search;
	let newData = state.videos;
	newData = searchText
		? newData.filter((data) =>
				data.title.toLowerCase().includes(searchText.toLowerCase())
		  )
		: newData;
	return newData;
};
