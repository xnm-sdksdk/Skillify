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
    this.comments = [];
    this.likes = 0;
  }

  //* GETS AND SETS
  // title
  get title() {
    return this.title;
  }
  set title(title) {
    this.title = title;
  }

  // description
  get description() {
    return this.description;
  }
  set description(description) {
    this.description = description;
  }

  // starting button text
  get btnDescription() {
    return this.btnDescription;
  }
  set btnDescription(newText) {
    this.btnDescription = newText;
  }

  // initial video
  get initialVideo() {
    return this.initialVideo;
  }
  set initialVideo(video) {
    this.initialVideo = video;
  }

  // chapters
  get chapters() {
    return this.chapters;
  }
  set chapters(chapters) {
    this.chapters = chapters;
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
let courses;
export function init() {
  // if there's no course, it will create the initial 10 courses
  courses = localStorage.courses
    ? JSON.parse(localStorage.courses)
    : [
        new Course(
          "Communication",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Leadership",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Creativity",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Decision Making",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Time Management",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Adaptability",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Persuasion",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Problem Solving",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Collaboration",
          "description",
          "Button description",
          "video path",
          ["chapters"]
        ),
        new Course(
          "Emotional Intelligence",
          "description",
          "Button description",
          "video path",
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