const { getUserData, updateUserData } = require("../sql");

exports.getUser = async (req, res, next) => {

  console.log('getUser server');
  console.log('req', req);

  try {
    console.log('try');
    if (req.isAuthenticated()) {
      console.log('isAuthenticated')
      const user = await getUserData(req.user.id);
      console.log('user', user)
      return res.status(200).json(user);
    }
    else {
      console.log('else')
      return res.redirect("/api/login?RelayState=" + encodeURIComponent(req.originalUrl.replace("&", "%26")));
    }
  } catch (e) {
    return res.status(500).send(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      const response = await updateUserData(req.user.id, req.body);
      return res.status(200).json(response);
    }
    else {
      return res.redirect("/api/login?RelayState=" + encodeURIComponent(req.originalUrl.replace("&", "%26")));
    }
  } catch (e) {
    return res.status(500).send(e);
  }


};
