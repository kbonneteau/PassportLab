const userModel = require("../models/userModel").userModel;

const getUserByEmailIdAndPassword = (email, password) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

const getUserByGitHubIdOrCreate = (profile, callback) => {
  let user = userModel.findById(profile.id);
  if(user) {
    return user;
  }
  userModel.createGitHubUser(profile);
  let newUser = userModel.findById(profile.id);
  return newUser;
};

function isUserValid(user, password) {
  return user.password === password;
}

module.exports = {
  getUserByEmailIdAndPassword,
  getUserByGitHubIdOrCreate,
  getUserById,
};
