let subtractProductAndSum = n => {
	return (
		eval(
			n
				.toString()
				.split('')
				.map(Number)
				.join('*')
		) -
		eval(
			n
				.toString()
				.split('')
				.map(Number)
				.join('+')
		);
	);
};

