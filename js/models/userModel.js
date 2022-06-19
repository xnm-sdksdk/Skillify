/* CLASS THAT MODELS THE USER IN THE APP */
export class User {
  id = 0;
  name = "";
  username = "";
  dateOfBirth = "";
  gender = "";
  email = "";
  locality = "";
  password = "";
  type = "";
  courses = [];
  levels = [];
  achievements = [];
  badges = [];
  status = "";
  avatar = "";

  constructor(
    id,
    name,
    username,
    dateOfBirth,
    gender,
    email,
    locality,
    password
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.email = email;
    this.locality = locality;
    this.password = password;
    this.type = "user";
    this.courses = [];
    this.levels = [];
    this.achievements = [];
    this.badges = [];
    this.status = "normal";
    this.avatar = "../../imgs/main/user.png";
  }

  //* METHODS
  // add level
  addLevel(level) {
    this.levels.push(level);
  }

  // add new achievement
  addAchievement(achievement) {
    this.achievements.push(achievement);
  }

  // add badge
  addBadge(badge) {
    this.badges.push(badge);
  }

  // add course
  addCourse(course) {
    this.courses.push(course);
  }
}

// LOAD USERS FROM LOCAL STORAGE
export let users;
export function init() {
  users = localStorage.users
    ? JSON.parse(localStorage.users)
    : [
        {
          id: 1,
          name: "Admin Account",
          username: "admin",
          dateOfBirth: "2002-11-10",
          gender: "Other",
          email: "admin@gmail.com",
          locality: "Porto",
          password: "admin",
          type: "admin",
          courses: [],
          levels: [],
          achievements: [],
          badges: [],
          status: "normal",
          avatar: "../../imgs/userprofile_imgs/adminPic.png",
        },
      ];
}

// GET NEXT NEW ID
export function getNextId() {
  return users.length === 0 ? 1 : users[users.length - 1].id + 1;
}

// ADD NEW USER
export function addNewUser(
  name,
  username,
  dateOfBirth,
  gender,
  email,
  locality,
  password
) {
  //creates new account
  users.push(
    new User(
      getNextId(),
      name,
      username,
      dateOfBirth,
      gender,
      email,
      locality,
      password
    )
  );
  //update Local Storage
  localStorage.users = JSON.stringify(users);
}

// LOGIN
export function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    sessionStorage.loggedUser = JSON.stringify(user);
    return true;
  }
  //if there's no user
  return false;
}

// LOGOUT
export function logout() {
  sessionStorage.removeItem("loggedUser");
}

// VERIFY IF THERE'S AN USER AUTHENTICATED
export function isLogged() {
  return sessionStorage.loggedUser ? true : false;
}

// RETURN USER AUTHENTICATED
export function getUserLogged() {
  return JSON.parse(sessionStorage.loggedUser);
}

// REMOVE USER
export function removeUser(username) {
  // search for the user in the array
  if (users.some((user) => user.username === username)) {
    // remove it from the array
    users.splice(
      users.find((user) => user.username === username),
      1
    );
    localStorage.users = JSON.stringify(users);
  } else {
    throw Error(`"${username}" does not exist!`);
  }
}

// RETURN TOTAL USERS
export function getUsers() {
  return users;
}
