/* CLASS THAT MODELS THE COURSE IN THE APP */
class Course {
  title = "";
  description = "";
  btnDescription = "";
  initialVideo = "";
  chapters = [];
  comments = [];
  likes = 0;

  constructor(title, description, btnDescription, initialVideo, chapters) {
    this.title = title;
    this.description = description;
    this.btnDescription = btnDescription;
    this.initialVideo = initialVideo;
    this.chapters = chapters;
    this.comments = [
      {
        username: "TiagoRibeiro.25",
        text: "Curso muito bom!",
      },
      {
        username: "Random User on the Internet",
        text: "Loved it!",
      },
      {
        username: "Tkinter Enjoyer",
        text: "Kinda cool ngl",
      },
      {
        username: "User123",
        text: "Recommended 9/10",
      },
      {
        username: "LoveCatsUwU",
        text: "Loved this one. Gonna watch the rest for sure!",
      },
      {
        username: "neverSleep25",
        text: "10/10",
      },
    ];
    this.likes = 0;
  }

  //* METHODS
  // add new chapter
  addChapter(chapter) {
    this.chapters.push(chapter);
  }

  // remove chapter
  removeChapter(chapterName) {
    for (let chapter in this.chapters) {
      if (this.chapters[chapter].title === chapterName) {
        this.chapters.splice(chapter, 1);
        return;
      }
    }
    throw Error(`Chapter ${chapterName} not found!`);
  }

  // modify chapter
  modifyChapter(chapterName, what, newData) {
    for (let chapter in this.chapters) {
      if (this.chapters[chapter].title === chapterName) {
        this.chapters[chapter][what] = newData;
        return;
      }
    }
    throw Error(`Chapter ${chapterName} not found!`);
  }
}

// LOAD COURSES FROM LOCAL STORAGE
export let courses;
export function init() {
  // if there's no course, it will create the initial 10 courses
  courses = localStorage.courses
    ? JSON.parse(localStorage.courses)
    : [
        new Course(
          "Communication",
          "Good communication skills are absolutely crucial to any successful workplace. As such, it's imperative that leadership masters and demonstrates good behaviors around communication, including nonverbal communication, body language, listening, and understanding. ",
          "Express yourself better!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Leadership",
          "Leadership is about empathy. It is about having the ability to relate to and connect with people for the purpose of inspiring and empowering their lives",
          "Become a Leader!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Creativity",
          "Creativity is supposed to help develop innovative solutions to problems. It requires an openness to innovation and mental flexibility. In many sectors, creativity techniques are seen as a means to an end and are designed to achieve better results.",
          "Create and Innovate",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Decision Making",
          "Decision-making skills are about your ability to choose a good option out of two or more alternatives",
          "Make better decisions!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Time Management",
          "When decisions need to be made quickly, you may benefit from time management skills that will help you keep track of important deadlines. Time management will also help you delviver timely status reports so that everyone is keep updated on challenges and solutions. If you have complex issues with multiple decisions to make, time management can help you stay organized during each stage of the decision-making process.",
          "Having trouble managing Time?",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Adaptability",
          "Adaptability means being flexible and able to change in order to become successful",
          "Adapt like a chameleon!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Persuasion",
          "Persuasion is the ability to make intentional and successful efforts in influencing someone either through written or verbal communication",
          "Learn to change people's mind!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Problem Solving",
          "Problem-solving skills are an important part of decision-making. You need to be able to factor in different viewpoints in order to make a thoughtful decision. It's also important to observe challenges and solutions from a neutral and non-emotional viewpoint, whenever possible. Strong problem-solving skills can also help you focus on relevant details and form decisions more quickly and effectively.",
          "Find the best solution for a problem!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Collaboration",
          "At some point, you may want to collaborate with coworkers to achieve common goals. For example, you may want to collaborate with your marketing manager on the best way to approach an important client. Teamwork can help you brainstorm the best options to solve challenges and help you with decision-making by showing you different perspectives. ",
          "Team work, makes the dream work!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
        new Course(
          "Emotional Intelligence",
          "Emotional intelligence means you are aware of your emotions and can express them in a way that's healthy, informative and motivating to those around you. Your emotions can inspire solutions to challenges and help you express your goals to others. Emotional intelligence can also guide your analysis of challenges and solutions.",
          "Master your emotions!",
          "../../videos/SkillifyPromoFinal.mp4",
          ["chapters"]
        ),
      ];
}

// ADD NEW COURSE
export function addCourse(
  title,
  description,
  btnDescription,
  initialVideo,
  chapters
) {
  if (courses.some((course) => course.title === title)) {
    throw Error(`Course ${title} already exists!`);
  } else {
    chapters.push(
      new Course(title, description, btnDescription, initialVideo, chapters)
    );
    localStorage.courses = JSON.stringify(courses);
  }
}

// CHECK IF THERE'S A SELECTED COURSE
export function checkSelectedCourse() {
  return sessionStorage.selectedCourse ? true : false;
}

// GET SELECTED COURSE
export function getSelectedCourse() {
  return JSON.parse(sessionStorage.selectedCourse);
}

// SET SELECTED COURSE
export function setSelectedCourse(name) {
  for (let course in courses) {
    if (courses[course].title == name) {
      sessionStorage.selectedCourse = JSON.stringify(courses[course]);
      break;
    }
  }
}
