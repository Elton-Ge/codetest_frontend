const proxy = require('http-proxy-middleware')

module.exports = function(app){
	app.use(
		proxy('/api1',{ 
			target:'https://13.238.120.66:5000',  
			// target:'http://localhost:5000',  
			changeOrigin:true,
			pathRewrite:{'^/api1':''} 
		}),
		proxy('/api2',{ 
			target:'https://13.238.120.66:5000', 
			// target:'http://localhost:5000', 
			
			changeOrigin:true,
			pathRewrite:{'^/api2':''} 
		})
	)
}