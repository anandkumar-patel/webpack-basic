const path = require('path');
module.exports = {
	mode:"development",
	entry:"./src/App.js",

	// loader-start
	module:{
		rules:[
			{
				test:/\.css/,
				use:[
						'style-loader',
						'css-loader'
					]
			}

		]
	},
	// loader-end
	devServer: {
		static:path.join(__dirname,'dist'),
		compress:true,
		port:3500
	}
}