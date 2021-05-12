const { getUserData, updateUserData } = require("../sql");

exports.getUser = async (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      const user = await getUserData(req.user.id);
      return res.status(200).json(user);
    }
    else {
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
