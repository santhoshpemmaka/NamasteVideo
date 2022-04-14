export const getFilterData = (state, data) => {
	let newData = data;
	newData = newData.filter((data) =>
		state.sortBy === "ALL" ? data : data.category === state.sortBy
	);
	return newData;
};

export const getFilterDate = (state) => {
	let newData = state.videos;
	if (state.sortByDate) {
		return [...newData].sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
	}
	return newData;
};
