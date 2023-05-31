import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
	url: {
    type: String,
    unique: true,
    match: /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}(&\S+)?$/,
  }, 
  title: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 2 && value.length <= 90;
      },
      message: 'El título debe tener entre 2 y 90 caracteres.',
    },
  },
  description: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 5 && value.length <= 250;
      },
      message: 'La descripción debe tener entre 5 y 250 caracteres.',
    },
  },
  studentFullName: {
    type: String,
    required: true,
  },
	studentEmail: {
		type: String,
		required: true,
		match: /.+\@.+\..+/,
	},
  creationDate: {
		type: Date,
		default: Date.now()
	},
});

const Video = mongoose.model('Video', videoSchema);

export default Video;