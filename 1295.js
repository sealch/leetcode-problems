let findNumbers = nums => {
	return nums.filter(n => n.toString().length % 2 == 0).length;
};
