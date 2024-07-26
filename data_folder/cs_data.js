function getData() {

    class Course {
        constructor(id, code, name, prerequisites = [], corequisites = [], semester, description = "") {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
            this.description = description;
            this.postrequisites = [];
        }

        addPostrequisite(postrequisiteId) {
            if (!this.postrequisites.includes(postrequisiteId)) {
                this.postrequisites.push(postrequisiteId);
            }
        }
    }

    let courseData = {
        courses: [
            //new Course(id, code, name, prereq [], coreq[], semester, desc [])
            
            //--------------------SEMESTER 1--------------------
            new Course(0, "ECS 1100", "Intro to Eng and CS", [], [], "1", "An introduction to the fields of engineering and computer science. This course provides a broad overview of the professions."),
            new Course(1, "CS 1200", "Introduction to CS and SE", [], [], "1", "Introduction to computer science and software engineering principles."),
            new Course(2, "MATH 2413", "Calculus I", [], [], "1", "Fundamental principles of calculus including limits, derivatives, and integrals. Essential for understanding advanced mathematical concepts."),
            new Course(3, "CORE", "CORE", [], [], "1", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(31, "CORE", "CORE", [], [], "1", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(4, "CS 1436", "Programming Fundamentals", [], [], "1", "Introduction to programming using a high-level language. Emphasizes problem-solving techniques and algorithm development."),
            //--------------------SEMESTER 2--------------------
            new Course(5, "MATH 2414", "Calculus II", ["MATH 2413"], [], "2", "Continuation of Calculus I, covering techniques of integration and series. Critical for students pursuing advanced studies in mathematics."),
            new Course(6, "PHYS 2325/2125", "Mechanics and Lab", ["MATH 2413"], [], "2", "Fundamentals of mechanics, including motion and forces. Accompanied by a lab to provide hands-on experience."),
            new Course(7, "CS 1337", "Computer Science I", ["CS 1436"], [], "2", "Introduction to computer science and programming. Covers basic concepts and structures in computer science."),
            new Course(8, "CS 2305", "Discrete Mathematics", ["MATH 2413"], [], "2", "Fundamental concepts of discrete mathematics. Includes logic, sets, and functions essential for computer science."),
            new Course(32, "CORE", "CORE", [], [], "2", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 3--------------------
            new Course(9, "MATH 2418", "Linear Algebra", ["MATH 2413"], [], "3", "Introduction to linear algebra concepts including matrix operations and vector spaces."),
            new Course(10, "CS 2336", "Computer Science II", ["CS 1337"], [], "3", "Advanced topics in computer science. Focuses on data structures and algorithms."),
            new Course(33, "CORE", "CORE", [], [], "3", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(11, "PHYS 2326/2126", "Electricity and Magnetism and Lab", ["PHYS 2325/2125", "MATH 2414"], [], "3", "Study of electricity and magnetism principles. Lab component provides practical understanding of theoretical concepts."),
            new Course(12, "CS 2340", "Computer Architecture", ["CS 1337", "CS 2305"], [], "3", "Basics of probability and statistics with computer science and software engineering applications."),
            //--------------------SEMESTER 4--------------------
            new Course(13, "CS 3345", "Data Structures and Algorithms", ["CS 2336", "CS 2305"], ["CS 3341"], "4", "Study of data structures and algorithms. Key for efficient problem-solving and programming."),
            new Course(14, "CS 3377", "Systems Programming", ["CS 2336"], [], "4", "Introduction to systems programming including low-level programming techniques."),
            new Course(15, "CORE", "CORE", [], [], "4", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(16, "ECS 2390", "Professional and Technical Communication", [], [], "4", "Focuses on communication skills necessary for engineers. Includes technical writing and presentation skills."),
            new Course(34, "CS 3341", "Probability and Statistics in CS and SE", ["MATH 2414", "CS 2305", "MATH 2418"], [], "4", "Basics of probability and statistics with computer science and software engineering applications."),
            //--------------------SEMESTER 5--------------------
            new Course(17, "CS 3354", "Software Engineering", [], [], "5", "Covers software engineering principles and practices. Focuses on design, implementation, and testing of software."),
            new Course(18, "CS 4341/4141", "Digital Logic and Computer Design and Lab", ["CS 2305", "PHYS 2326/2126"], [], "5", "Study of digital logic and computer design principles with lab."),
            new Course(19, "CORE", "CORE", [], [], "5", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(20, "CORE", "CORE", [], [], "5", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(35, "CS 4337", "Programming Language Paradigms", ["CS 2336", "CS 2305", "CS 2340"], [], "5", "NONE."),
            //--------------------SEMESTER 6--------------------
            new Course(21, "CS 4348", "Operating Systems Concepts", ["CS 3377", "CS 2340"], [], "6", "Introduction to operating system concepts. Covers process management, memory management, and file systems."),
            new Course(22, "CS 3162", "Professional Responsibility", [], ["CS 3345", "CS 3354"], "6", "NONE."),
            new Course(23, "CS 4349", "Advanced Algorithm Design and Analysis", ["CS 3345", "CS 2305"], [], "6", "Study of advanced algorithms and their design and analysis."),
            new Course(36, "CS 42XX", "Technical Elective", [], [], "6", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(37, "CS 42XX", "Technical Elective", [], [], "6", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(24, "CORE", "CORE", [], [], "6", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 7--------------------
            new Course(25, "CS 4384", "Automata Theory", ["CS 2305"], [], "7", "Introduction to automata theory and formal languages."),
            new Course(26, "CS 4347", "Database Systems", ["CS 3345"], [], "7", "Introduction to database systems."),
            new Course(38, "CS 42XX", "Technical Elective", [], [], "7", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(39, "CS 42XX", "Technical Elective", [], [], "7", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(27, "CORE", "CORE", [], [], "7", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 8--------------------
            new Course(28, "CS 4485", "Computer Science Project", ["CS 4386"], [], "8", "Capstone project course. Students design and implement a significant computer science project."),
            new Course(29, "CS 42XX", "Technical Elective", [], [], "8", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(30, "CORE", "CORE", [], [], "8", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(40, "CORE", "CORE", [], [], "8", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
        ],

        getCourseById: function (id) {
            return this.courses.find(course => course.id === id);
        },

        getCourseByCode: function (code) {
            return this.courses.find(course => course.code === code);
        },

        getCoursesBySemester: function (semester) {
            return this.courses.filter(course => course.semester === semester);
        },

        getPrerequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.prerequisites.flatMap(prereqCode =>
                [this.getCourseByCode(prereqCode).id, ...this.getPrerequisiteSequence(this.getCourseByCode(prereqCode).id)]
            );
        },

        getCorequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.corequisites.flatMap(coreqCode =>
                [this.getCourseByCode(coreqCode).id, ...this.getCorequisiteSequence(this.getCourseByCode(coreqCode).id)]
            );
        },

        getPostrequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.postrequisites.flatMap(postreqCode =>
                [this.getCourseByCode(postreqCode).id, ...this.getPostrequisiteSequence(this.getCourseByCode(postreqCode).id)]
            );
        }
    };

    // Populate postrequisites for each course
    courseData.courses.forEach(course => {
        course.prerequisites.forEach(prereqCode => {
            const prereqCourse = courseData.getCourseByCode(prereqCode);
            if (prereqCourse) {
                prereqCourse.addPostrequisite(course.code);
            }
        });

        course.corequisites.forEach(coreqCode => {
            const coreqCourse = courseData.getCourseByCode(coreqCode);
            if (coreqCourse) {
                coreqCourse.addPostrequisite(course.code);
            }
        });
    });

    return courseData;
}
