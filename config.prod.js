const path = require('path');
module.exports = {
	mode:"production",
	entry:"./src/App.js",
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:"final.js"
	},
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
	}
	// loader-end
}
