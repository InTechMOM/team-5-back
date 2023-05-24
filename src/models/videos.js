import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
	url: {
    type: String,
    unique: true,
    match: /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}(&\S+)?$/,
  }, 
  tittle: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return value.length === 90;
      },
      message: 'El título debe tener 90 caracteres.',
    },
  },
  description: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return value.length === 250;
      },
      message: 'El título debe tener 250 caracteres.',
    },
  },
  lideFullName: {
    type: String,
    unique: true,
    required: true,
  },
	liderEmail: {
		type: String,
		required: true,
		match: /.+\@.+\..+/,
		unique: true
	},
  fechaYHora: {
	timestamps: true,   
	},
});

const Video = mongoose.model('Video', videoSchema);

export default Video;