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
          "../../videos/1 - Communication/What is Communication Let's discuss!.mp4",
          [
            {
              title: "How to communicate effectively",
              video:
                "../../videos/1 - Communication/Active Listening_ How To Communicate Effectively.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What should you do during a conversation?",
                  options: [
                    "Take out your phone",
                    "Get distracted",
                    "Give your undivided attention",
                    "None of the above",
                  ],
                  correct: "Give your undivided attention",
                },
                {
                  number: 2,
                  question: "What is active listening?",
                  options: [
                    "To pretend to hear someone",
                    "Keep eye contact and nod during a conversation",
                    "To interrupt a person while they're talking",
                    "To look away during a conversation",
                  ],
                  correct: "Keep eye contact and nod during a conversation",
                },
                {
                  number: 3,
                  question: "What is Assertive communication?",
                  options: [
                    "To be direct and honest about what you want",
                    "To use aggressive communication",
                    "To use force and  aggression to get what you want",
                    "None of the above",
                  ],
                  correct: "To be direct and honest about what you want",
                },
              ],
            },
            {
              title: "Recipe for great communication",
              video:
                "../../videos/1 - Communication/The Recipe for Great Communication.mp4",
              exercises: [
                {
                  number: 1,
                  question:
                    "What are the 5 ingredients for great communication?",
                  options: [
                    "Clarity, Value, Sugar, Flower, Impact",
                    "Context, Value, Brevity, Pepper, Salt",
                    "Sugar, Flower, Baking powder, Impact, Salt",
                    "Clarity, Brevity, Context, Impact, Value",
                  ],
                  correct: "Clarity, Brevity, Context, Impact, Value",
                },
                {
                  number: 2,
                  question:
                    "When there is a lot of complexity around the situation/issue, what is most important?",
                  options: ["Clarity", "Context", "Impact", "Brevity"],
                  correct: "Clarity",
                },
                {
                  number: 3,
                  question:
                    "When there is a lot of noise, what is most important?",
                  options: ["Clarity", "Context", "Impact", "Brevity"],
                  correct: "Impact",
                },
              ],
            },
          ]
        ),
        new Course(
          "Leadership",
          "Leadership is about empathy. It is about having the ability to relate to and connect with people for the purpose of inspiring and empowering their lives",
          "Become a Leader!",
          "../../videos/2 - Leadership/What is Leadership.mp4",
          [
            {
              title: "The mindset of Leadership",
              video:
                "../../videos/2 - Leadership/The Mindset of Leadership 2.0 Robin Sharma.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What is leadership about?",
                  options: [
                    "The size of your office",
                    "The title of leader",
                    "A mindset and a way of being",
                    "None of the above",
                  ],
                  correct: "A mindset and a way of being",
                },
                {
                  number: 2,
                  question: "What does it take to be a leader?",
                  options: [
                    "Money and power",
                    "Nothing. Everyone with the right mindset can be a leader",
                    "A big house and a big office",
                    "a Ferrari",
                  ],
                  correct:
                    "Nothing. Everyone with the right mindset can be a leader",
                },
              ],
            },
          ]
        ),
        new Course(
          "Creativity",
          "Creativity is supposed to help develop innovative solutions to problems. It requires an openness to innovation and mental flexibility. In many sectors, creativity techniques are seen as a means to an end and are designed to achieve better results.",
          "Create and Innovate",
          "../../videos/3 - Creativity/Everyone Can Be Creative.mp4",
          [
            {
              title: "How to have better Creative Thinking",
              video:
                "../../videos/3 - Creativity/How To Have Better Creative Thinking.mp4",
              exercises: [
                {
                  number: 1,
                  question: "Who can be creative?",
                  options: [
                    "Right Brained people",
                    "Left Brained people",
                    "Anyone",
                    "Just geniuses",
                  ],
                  correct: "Anyone",
                },
                {
                  number: 2,
                  question: "What is to think outside the box?",
                  options: [
                    "To use something for it's correct use",
                    "To be outside of a box and think",
                    "To use a coat hanger to hang your coat",
                    "To think differently, unconventionally, or from a new perspective",
                  ],
                  correct:
                    "To think differently, unconventionally, or from a new perspective",
                },
                {
                  number: 3,
                  question: "What are the two big key words for Creativity?",
                  options: [
                    "Imagination and association",
                    "Tough and Brain",
                    "Originality and Association",
                    "None of the above",
                  ],
                  correct: "Imagination and association",
                },
              ],
            },
            {
              title: "How to Develop creative thoughts",
              video:
                "../../videos/3 - Creativity/Creative Thinking_ How to Increase the Dots to Connect.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What is creativity?",
                  options: [
                    "The ability to look at a problem and come up with a good solution to solve it",
                    "The ability to think fast",
                    "The ability to copy something",
                    "None of the above",
                  ],
                  correct:
                    "The ability to look at a problem and come up with a good solution to solve it",
                },
                {
                  number: 2,
                  question: "How is the best creative team composed?",
                  options: [
                    "Divergent Thinkers",
                    "Convergent Thinkers",
                    "Divergent and Convergent thinkers",
                    "Adaptive and innovative thinkers",
                  ],
                  correct: "Divergent and Convergent thinkers",
                },
                {
                  number: 3,
                  question: "How can you be more creative?",
                  options: [
                    "Increase the dot connection in our brain by seeking new experiences",
                    "Solve problems the easy way, not by yourself",
                    "Don't start new experiences",
                    "None of the above",
                  ],
                  correct:
                    "Increase the dot connection in our brain by seeking new experiences",
                },
              ],
            },
          ]
        ),
        new Course(
          "Decision Making",
          "Decision-making skills are about your ability to choose a good option out of two or more alternatives",
          "Make better decisions!",
          "../../videos/4 - Decision Making/THE CHOICE (Short Animated Movie).mp4",
          [
            {
              title: "Decision making Strategies",
              video:
                "../../videos/4 - Decision Making/Decision-Making Strategies.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What is the first step to make a decision?",
                  options: [
                    "Use the first think that comes to your mind",
                    "Imagine different scenarios",
                    "Flip a coin",
                    "Identify the problem",
                  ],
                  correct: "Identify the problem",
                },
                {
                  number: 2,
                  question:
                    "How to get a different perspective on your decision?",
                  options: [
                    "Imagine possible outcomes",
                    "Ask a stranger for help",
                    "Go to Akinator",
                    "None of the above",
                  ],
                  correct: "Imagine possible outcomes",
                },
                {
                  number: 3,
                  question: "How do you know your making the right choice?",
                  options: [
                    "Procrastinate and come back to it later",
                    "The 2-minute diversion and think in the third person",
                    "Only choose the right answer",
                    "Flip a coin",
                  ],
                  correct:
                    "The 2-minute diversion and think in the third person",
                },
              ],
            },
            {
              title: "The elements of good decision making",
              video:
                "../../videos/4 - Decision Making/The Elements of Good Decision Making - Dave Ramsey.mp4",
              exercises: [
                {
                  number: 1,
                  question: "How can procrastination be avoided?",
                  options: [
                    "Set a self-imposed deadline",
                    "Go to the woods",
                    "Lock away everything that distracts you",
                    "Play video games",
                  ],
                  correct: "Set a self-imposed deadline",
                },
                {
                  number: 2,
                  question: "How much time should it take to make a decision?",
                  options: [
                    "Five minutes",
                    "As long as you need",
                    "The faster the better",
                    "Proportional to the impact of the decision",
                  ],
                  correct: "Proportional to the impact of the decision",
                },
              ],
            },
          ]
        ),
        new Course(
          "Time Management",
          "When decisions need to be made quickly, you may benefit from time management skills that will help you keep track of important deadlines. Time management will also help you delviver timely status reports so that everyone is keep updated on challenges and solutions. If you have complex issues with multiple decisions to make, time management can help you stay organized during each stage of the decision-making process.",
          "Having trouble managing Time?",
          "../../videos/5 - Time Management/Improve Time Management Skills Increase Productivity.mp4",
          [
            {
              title: "Tips for effective time management",
              video:
                "../../videos/5 - Time Management/Tips for Effective Time Management.mp4",
              exercises: [
                {
                  number: 1,
                  question:
                    "What is the first step to effective time management?",
                  options: [
                    "Keep a log on how you spend your day",
                    "Use a watch for the entire day",
                    "Try to do everything very fast",
                    "None of the above",
                  ],
                  correct: "Keep a log on how you spend your day",
                },
                {
                  number: 2,
                  question: "What can distract you during your day?",
                  options: [
                    "Gaming",
                    "The weather",
                    "Tv, computer and mobile device",
                    "Your girlfriend",
                  ],
                  correct: "Tv, computer and mobile device",
                },
              ],
            },
            {
              title: "How to manage your time more effectively",
              video:
                "../../videos/5 - Time Management/How to manage your time more effectively (according to machines) - Brian Christian.mp4",
              exercises: [
                {
                  number: 1,
                  question: "How to get work done?",
                  options: [
                    "Minimize context switches",
                    "Procrastinate",
                    "Spend tike ranking your work",
                    "None of the above",
                  ],
                  correct: "Minimize context switches",
                },
                {
                  number: 2,
                  question: "What is interrupt coalescing?",
                  options: [
                    "To interrupt your work every hour",
                    "To group interruptions together based on how long they can afford to wait",
                    "To time your interruptions based on importance",
                    "None of the above",
                  ],
                  correct:
                    "To group interruptions together based on how long they can afford to wait",
                },
              ],
            },
          ]
        ),
        new Course(
          "Adaptability",
          "Adaptability means being flexible and able to change in order to become successful",
          "Adapt like a chameleon!",
          "../../videos/6 - Adaptability/Skills for Success – Adaptability.mp4",
          [
            {
              title: "Adapt and Overcome",
              video:
                "../../videos/6 - Adaptability/Adaptability in the workplace.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What is Adaptability?",
                  options: [
                    "Don't try new perspectives",
                    "Being able to adjust to new situations",
                    "Stick to the main plan no matter what",
                    "Inflexibility in handling change",
                  ],
                  correct: "Being able to adjust to new situations",
                },
                {
                  number: 2,
                  question: "Why Adaptability is important?",
                  options: [
                    "Flexibility through challenges is not good",
                    "A new ideia is always a bad thing",
                    "Because change is an opportunity to not improve",
                    "The main ideia or plan not always work's",
                  ],
                  correct: "The main ideia or plan not always work's",
                },
              ],
            },
            {
              title: "How to adapt to any situation",
              video:
                "../../videos/6 - Adaptability/Adaptability & Flexibility - SkillsUSA.mp4",
              exercises: [
                {
                  number: 1,
                  question: "Why is important to develop these skills?",
                  options: [
                    "Is a high demand skill in our changing world",
                    "Because it helps you to master a technology",
                    "It helps you to make friends",
                    "None of the above",
                  ],
                  correct: "Is a high demand skill in our changing world",
                },
                {
                  number: 2,
                  question: "What's the main thing to do after you fail?",
                  options: [
                    "Adapt",
                    "Give up",
                    "Work Harder",
                    "None of the above",
                  ],
                  correct: "Adapt",
                },
              ],
            },
          ]
        ),
        new Course(
          "Persuasion",
          "Persuasion is the ability to make intentional and successful efforts in influencing someone either through written or verbal communication",
          "Learn to change people's mind!",
          "../../videos/7 - Persuasion/Persuasion mind trick_ How to impress in meetings.mp4",
          [
            {
              title: "Upgrade your persuasion skills",
              video:
                "../../videos/7 - Persuasion/Secret persuasion mind trick.mp4",
              exercises: [
                {
                  number: 1,
                  question: "How to persuade someone?",
                  options: [
                    "Ask them something as it is",
                    "Ask them something small them upgrade the request",
                    "Ask them something big",
                    "None of the above",
                  ],
                  correct: "Ask them something small them upgrade the request",
                },
                {
                  number: 2,
                  question: "How to be heard?",
                  options: [
                    "Speak louder",
                    "Expressing your opinion by adopting a point of view",
                    "Speak in topics",
                    "None of the above",
                  ],
                  correct:
                    "Expressing your opinion by adopting a point of view",
                },
                {
                  number: 3,
                  question: "What is persuasive skills?",
                  options: [
                    "Do it after you ask them",
                    "Express your ideia without a plan",
                    "Getting people to agree with you by expressing facts according to a plan",
                    "None of the above",
                  ],
                  correct:
                    "Getting people to agree with you by expressing facts according to a plan",
                },
              ],
            },
          ]
        ),
        new Course(
          "Problem Solving",
          "Problem-solving skills are an important part of decision-making. You need to be able to factor in different viewpoints in order to make a thoughtful decision. It's also important to observe challenges and solutions from a neutral and non-emotional viewpoint, whenever possible. Strong problem-solving skills can also help you focus on relevant details and form decisions more quickly and effectively.",
          "Find the best solution for a problem!",
          "../../videos/8 - Problem Solving/What is Creative Problem Solving.mp4",
          [
            {
              title: "Problem Solving",
              video:
                "../../videos/7 - Persuasion/Secret persuasion mind trick.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What's the main issue to solve a problem?",
                  options: [
                    "Take action",
                    "Check result",
                    "Identify the problem",
                    "None of the above",
                  ],
                  correct: "Identify the problem",
                },
              ],
            },
          ]
        ),
        new Course(
          "Collaboration",
          "At some point, you may want to collaborate with coworkers to achieve common goals. For example, you may want to collaborate with your marketing manager on the best way to approach an important client. Teamwork can help you brainstorm the best options to solve challenges and help you with decision-making by showing you different perspectives. ",
          "Team work, makes the dream work!",
          "../../videos/9- Collaboration/Secrets Of Successful Teamwork_ Insights From Google.mp4",
          [
            {
              title: "Team work makes the dream work",
              video:
                "../../videos/9- Collaboration/5 Tips For Effective Teamwork.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What lesson can you retrieve from this video?",
                  options: [
                    "Team work, makes the dream work",
                    "Work alone is always better",
                    "Working in team is not good",
                    "None of the above",
                  ],
                  correct: "Team work, makes the dream work",
                },
                {
                  number: 2,
                  question: "Why do Tech Companies motivate to work together?",
                  options: [
                    "To play games in teams",
                    "Because it's fun",
                    "It increases productivity",
                    "None of the above",
                  ],
                  correct: "It increases productivity",
                },
              ],
            },
            {
              title: "What make a great team great",
              video:
                "../../videos/9- Collaboration/How Google builds the perfect team.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What is necessary to make a good team?",
                  options: [
                    "Good empathy",
                    "The way people treat each other",
                    "Ignore the other members",
                    "None of the above",
                  ],
                  correct: "The way people treat each other",
                },
                {
                  number: 2,
                  question: "How should a team communicate?",
                  options: [
                    "All should communicate with each other in certain time",
                    "The role of leader should change frequently",
                    "The team should speak at the same time",
                    "None of the above",
                  ],
                  correct:
                    "All should communicate with each other in certain time",
                },
              ],
            },
          ]
        ),
        new Course(
          "Emotional Intelligence",
          "Emotional intelligence means you are aware of your emotions and can express them in a way that's healthy, informative and motivating to those around you. Your emotions can inspire solutions to challenges and help you express your goals to others. Emotional intelligence can also guide your analysis of challenges and solutions.",
          "Master your emotions!",
          "../../videos/10 - Emotional Intelligence/Emotions and the Brain.mp4",
          [
            {
              title: "Emotional Intelligence",
              video:
                "../../videos/10 - Emotional Intelligence/Emotional Intelligence.mp4",
              exercises: [
                {
                  number: 1,
                  question: "What are emotions determined by?",
                  options: [
                    "Logic and Emotions",
                    "Just emotions",
                    "Choices in general",
                    "None of the above",
                  ],
                  correct: "Logic and Emotions",
                },
                {
                  number: 2,
                  question:
                    "What happens to our brain when certain situations happen?",
                  options: [
                    "Our brain freezes",
                    "Our brain tries to run",
                    "Our brain enters in panic",
                    "Our brain releases hormones",
                  ],
                  correct: "Our brain releases hormones",
                },
                {
                  number: 3,
                  question: "What can trigger an emotional response?",
                  options: [
                    "Forgetting something",
                    "A wrong behaviour",
                    "Thinking about something",
                    "None of the above",
                  ],
                  correct: "Thinking about something",
                },
              ],
            },
          ]
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
