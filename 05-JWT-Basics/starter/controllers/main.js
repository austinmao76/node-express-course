const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		throw new CustomAPIError('Please provide email and password', 400)
	}
	console.log(username, password)
	res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
	const luckynumber = Math.floor(Math.random() * 100)
	res.status(200).json({
		msg: `hello, john doe`,
		secret: `here is your authorized data your lucky number is ${luckynumber}`,
	})
}

module.exports = {
	login,
	dashboard,
}
