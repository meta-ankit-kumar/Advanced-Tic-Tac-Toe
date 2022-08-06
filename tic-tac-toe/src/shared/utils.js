export const wait = async (time) => {
	return new Promise(resolve => {
		setTimeout(resolve, time);
	});
};