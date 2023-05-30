import mongoose from "mongoose";

const qualificationsSchema = new mongoose.Schema({
	emailStudent: {
		type: String,
		required: true,
    match: /.+\@.+\..+/,
    unique: true
	},
  emailTeacher: {
		type: String,
		required: true,
    match: /.+\@.+\..+/,
    unique: true
	},
  fullNameStudent: {
		type: String,
		required: true
	},
	projectName: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
		match: /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}(&\S+)?$/,
    unique: true
	},
	criticalThinking: {
		type: Number,
		required: true
	},
  creativity: {
		type: Number,
		required: true
	},
  collaboration: {
		type: Number,
		required: true
	},
  communication: {  
		type: Number,
		required: true
	},
	creationDate: {
		type: Date,
		default: Date.now()
	},
});

const Qualifications = mongoose.model('Qualification', qualificationsSchema);

export default Qualifications;