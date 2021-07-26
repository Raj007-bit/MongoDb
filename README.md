# MongoDb

1. Connect MongoDb
   
   /*----------------npm package------------*/
const mongoose = require('mongoose');


/*----------------Mongoose connect using local server you can also connect with atlas link------------*/
mongoose.connect("mongodb://localhost:27020/databaseName", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


2. Schema creation and Post routes
  
  /*---------------Create a Schema-------------*/
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

/*---------Post Request using Form from Front-End--------*/
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
   
3. Edit and Delete Routes
   
   /*------------------ Update Routes ------------------------*/
/*---------Here i have taken an example of MovieDb-----------*/
app.post("/updatepainting/:id", function(req, res) {
  var id = req.params.id;
  var movie = req.body.movie;
  Movie.updateMany({
      _id: id
    }, {
      $set: {
        name: movie.name,
        age: movie.age,
        dob: movie.dob,
        runs: movie.runs,
        wicket: movie.wicket,
        avg: movie.avg,
        status: movie.status,
        economy: movie.economy,
        country : movie.country,
      },
    },
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    }
  );
});


/*------------------ Delete Routes ------------------------*/
/*---------Here i have taken an example of VideoDb-----------*/
app.post("/delete/:id", function(req, res) {
  Video.findByIdAndRemove(req.params.id, function(err, not) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/deletevideo");
    }
  });
});
