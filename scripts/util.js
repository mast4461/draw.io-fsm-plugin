exports.getObjectValues = function (obj) {
	return Object.keys(obj).map(key => obj[key]);
};