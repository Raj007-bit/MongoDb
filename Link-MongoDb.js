const mongoose = require('mongoose');
const passportLocalMongose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

/Mongoose connect using local server you can also connect with atlas link/
mongoose.connect("mongodb://localhost:27020/databaseName", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


/Create a Schema/
const videoSchema = new mongoose.Schema({
  url: {
      type: String,
      required: true
  },
  category: {
    type: String,
      required: true
  }

});

const Video = mongoose.model("Video", videoSchema);


/Post Request using Form from Front-End/
app.post('/uploadvideo',(req,res)=>{
  const video = new Video({
    url: req.body.url,
    category: req.body.category
  });
  
  video.save(function(err){
    if (!err){
        res.redirect("/videos");
    }
  });
});
