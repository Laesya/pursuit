const getGame = () => {
  return JSON.parse(localStorage.getItem('game'));
};

const getUsers = () => {
  return JSON.parse(localStorage.getItem('game')).players;
};

const getUser = (username) => {
  return getUsers().filter((user) => user.name === username)[0];
};

const updateUserCategory = (username, category) => {
  let user = getUsers().filter((user) => user.name === username)[0];
  user.category = category;
  return user;
};

const updateUserScore = (username, score) => {
  let user = getUsers().filter((user) => user.name === username)[0];
  user.score = score;
  return user;
};

const updatelocalStorageUserCategory = (username, category) => {
  return getUsers().map((user) => {
    if(user.name !== username){
      return user;
    } else {
      return updateUserCategory(username, category);
    }
  });
};

const updatelocalStorageUserScore = (username, score) => {
  return getUsers().map((user) => {
    if(user.name !== username){
      return user;
    } else {
      return updateUserScore(username, score);
    }
  });
};

const generateId = () => {
  function _p8(s) {
    let p = (Math.random().toString(16)+'000000000').substr(2,8);
    return s ? '-' + p.substr(0,4) + '-' + p.substr(4,4) : p ;
  }
  let mySexyId =  _p8() + _p8(true) + _p8(true) + _p8();
  return mySexyId;
};

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getGame: getGame,
  updatelocalStorageUserCategory: updatelocalStorageUserCategory,
  updatelocalStorageUserScore: updatelocalStorageUserScore,
  generateId: generateId
};