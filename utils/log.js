const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Lỗi Nhẹ ! ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Lỗi Nặng ! ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Đ.V Bằng ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Lỗi Nặng ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ Đ.V Bằng ] » `) + data);
			break;
	}
}