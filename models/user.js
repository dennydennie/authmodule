var mongoose 	=	 require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth');

var db 			=	 mongoose.connection;


//User Schema
var UserSchema 	=  mongoose.Schema({
	email : {
		type 	: String,
		index	: true
	},
	password :	{
		type 	: String, 
		required: true, 
		bcrypt  : true
	},
	surname 	: String,
	mobile		: String,
	name 		: String,
	profile 	: String
});

module.exports =  mongoose.model('User', UserSchema);
