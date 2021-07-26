
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
