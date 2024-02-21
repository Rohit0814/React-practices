const User = require("../model/schema");

module.exports.userView = (req, res) => {
  return res.render("user");
};

module.exports.dataSave = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    course: req.body.course,
  })
    .then((newUser) => {
      console.log(newUser);
      return res.render("user");
    })
    .catch((err) => {
      console.log(err);
      return;
    });
};

module.exports.loadData = (req, res) => {
  User.find({})
    .then((users) => {
      return res.render("display", {
        user: users,
        searchbased:'',
        title:''
      });
    })
    .catch((err) => {
      console.log("error.... ", err);
      return;
    });
};

module.exports.searchData = (req, res) => {
  const searchbased = req.body.search_based;
  const title = req.body.title;
  console.log(searchbased,title);

  if(searchbased=='' || title==''){
    return res.redirect('/users/display')
  }

  const query = {};
  query[searchbased] = title;

  User.find(query).collation( { locale: 'en', strength: 2 })
    .then((users) => {
      return res.render("display", {
        user: users,
        searchbased:searchbased,
        title:title
      });
    })
    .catch((err) => {
      console.log("error.... ", err);
      return res.status(500).send("Internal Server Error");
    });
};
