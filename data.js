function getData() {
    // Added just in case we want to check if a current student has taken a course
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

    class Course {
        id;
        code;
        name;
        prerequisites;
        corequisites;
        semester;
        description;

        constructor(id, code, name, prerequisites = [], corequisites = [], semester, description = "") {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
            this.description = description;
        }
    }

    let courseData = {
        // Commented out courses are not "required" but are still part of the degree plan
        courses: [
            //--------------------SEMESTER 1--------------------
            new Course(0, "ECS 1100", "Intro to Engr & CS", [], [], "1", "An introduction to the fields of engineering and computer science. This course provides a broad overview of the professions."),
            new Course(1, "CE 1100", "Intro to Comp Eng", [], [], "1", "Basic principles and concepts in computer engineering. Students will learn about the various components and systems involved."),
            new Course(2, "MATH 2413", "Calculus I", [], [], "1", "Fundamental principles of calculus including limits, derivatives, and integrals. Essential for understanding advanced mathematical concepts."),
            new Course(3, "CORE", "CORE", [], [], "1", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(4, "CS 1436", "Programming Fundamentals", [], [], "1", "Introduction to programming using a high-level language. Emphasizes problem-solving techniques and algorithm development."),
            //--------------------SEMESTER 2--------------------
            new Course(5, "ENGR 2300", "Linear Algebra for Engineers", [], [], "2", "Linear algebra concepts tailored for engineering applications. Focuses on matrix operations and vector spaces."),
            new Course(6, "MATH 2414", "Calculus II", ["MATH 2415"], [], "2", "Continuation of Calculus I, covering techniques of integration and series. Critical for students pursuing advanced studies in mathematics."),
            new Course(7, "PHYS 2325/2125", "Mechanics and Lab", ["PHYS 2326/2126"], [], "2", "Fundamentals of mechanics, including motion and forces. Accompanied by a lab to provide hands-on experience."),
            new Course(8, "CE 1337", "Computer Science I", ["CS 1436"], [], "2", "Introduction to computer science and programming. Covers basic concepts and structures in computer science."),
            new Course(9, "CE 1202", "Intro to Computer Eng II", ["CE 1100"], [], "2", "Continuation of Intro to Computer Engineering. Delves deeper into computer systems and engineering principles."),
            new Course(10, "CE 2310", "Intro to Digital Systems", [], [], "2", "Introduction to the design and analysis of digital systems. Focuses on logic design and digital circuit principles."),
            //--------------------SEMESTER 2.5--------------------
            new Course(11, "MATH 2415", "Calculus of Several Variables", ["MATH 2414"], [], "2.5", "Exploration of calculus in multiple dimensions. Includes partial derivatives and multiple integrals."),
            //--------------------SEMESTER 3--------------------
            new Course(12, "MATH 2420", "Differential Equations", ["MATH 2415"], [], "3", "Introduction to differential equations and their applications. Important for modeling various physical systems."),
            new Course(13, "CE 2305", "Discrete Mathematics I", ["MATH 2413"], [], "3", "Fundamental concepts of discrete mathematics. Includes logic, sets, and functions essential for computer science."),
            new Course(14, "PHYS 2326/2126", "Electricity and Magnetism and Lab", ["PHYS 2325/2125"], [], "3", "Study of electricity and magnetism principles. Lab component provides practical understanding of theoretical concepts."),
            new Course(15, "ENGR 3341", "Engineering Probability and Statistics", ["MATH 2413"], [], "3", "Basics of probability and statistics with engineering applications. Critical for data analysis and interpretation in engineering."),
            new Course(16, "CE 2336", "Computer Science II", ["CE 1337"], [], "3", "Advanced topics in computer science. Focuses on data structures and algorithms."),
            //--------------------SEMESTER 4--------------------
            new Course(17, "CE 3201", "Fundamentals I", ["CE 1202", "RHET 1302"], [], "4", "Covers fundamental engineering concepts. Prepares students for more advanced engineering courses."),
            new Course(18, "CE 2301", "Electrical Network Analysis", ["MATH 2420", "PHYS 2326/2126"], [], "4", "Analysis of electrical networks and systems. Includes study of circuit behavior and signal processing."),
            new Course(19, "CE 3320", "Digital Circuits", ["CE 2310"], [], "4", "Design and analysis of digital circuits. Emphasizes logic design and circuit implementation."),
            new Course(20, "CE 3345", "Data Structures and Introduction to Algorithmic", ["CE 2336", "CE 2305"], [], "4", "Study of data structures and algorithms. Key for efficient problem-solving and programming."),
            new Course(21, "CORE", "CORE", [], [], "4", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(22, "CORE", "CORE", [], [], "4", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 5--------------------
            new Course(23, "CE 3303", "Signals and Systems", ["MATH 2420"], [], "5", "Introduction to the analysis of signals and systems. Key concepts include Fourier transforms and system response."),
            new Course(24, "CE 3354", "Software", ["CE 2336", "CE 2305"], [], "5", "Covers software engineering principles and practices. Focuses on design, implementation, and testing of software."),
            new Course(25, "CE 3311", "Electronics I", ["CE 2301"], [], "5", "Study of electronic devices and circuits. Includes analysis and design of basic electronic circuits."),
            new Course(26, "CE 3161", "Social Issues and Ethics in Engineering", [], [], "5", "Examines social and ethical issues in engineering. Discusses the impact of engineering decisions on society."),
            new Course(27, "ECS 2390", "Professional and Technical Communication", [], [], "5", "Focuses on communication skills necessary for engineers. Includes technical writing and presentation skills."),
            new Course(28, "CE 3202", "Fundamentals II", ["CE 3201"], [], "5", "Continuation of Fundamentals I. Delves deeper into engineering principles and applications."),
            //--------------------SEMESTER 6--------------------
            new Course(29, "CE 4304", "Computer Architecture", ["CE 3320"], [], "6", "Study of computer architecture and organization. Covers design and analysis of computer systems."),
            new Course(30, "CE 4370", "Embedded Systems", ["CE 3320"], [], "6", "Introduction to embedded systems. Focuses on design and implementation of embedded solutions."),
            new Course(31, "CE 42XX", "Technical Elective", [], [], "6", "Elective course allowing exploration of technical topics of interest. Provides flexibility in the curriculum."),
            new Course(32, "CORE", "CORE", [], [], "6", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(33, "CORE", "CORE", [], [], "6", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            new Course(34, "CORE", "CORE", [], [], "6", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 7--------------------
            new Course(35, "CE 4388", "Senior Design I", ["CE 4370"], [], "7", "Capstone project course. Students design and implement a significant engineering project."),
            new Course(36, "CE 4348", "Operating Systems Concepts", ["CE 2336"], [], "7", "Introduction to operating system concepts. Covers process management, memory management, and file systems."),
            new Course(37, "MATH XXXX", "MATH Technical Elective", [], [], "7", "Elective course in mathematics. Allows for exploration of advanced mathematical topics."),
            new Course(38, "XXXX", "Free Elective", [], [], "7", "Elective course providing flexibility in the curriculum. Can be chosen based on student interests."),
            new Course(39, "CORE", "CORE", [], [], "7", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education."),
            //--------------------SEMESTER 8--------------------
            new Course(40, "CE 4389", "Senior Design II", ["CE 4388"], [], "8", "Continuation of Senior Design I. Students finalize and present their engineering project."),
            new Course(41, "CE 42XX", "CE Technical Elective", [], [], "8", "Technical elective in computer engineering. Allows for exploration of specialized topics."),
            new Course(42, "CE 42XX", "CE Technical Elective", [], [], "8", "Technical elective in computer engineering. Allows for exploration of specialized topics."),
            new Course(43, "XXXX", "Free Elective", [], [], "8", "Elective course providing flexibility in the curriculum. Can be chosen based on student interests."),
            new Course(44, "CORE", "CORE", [], [], "8", "Core curriculum requirement. Covers a range of foundational topics necessary for a well-rounded education.")
        ],

        getCourseById: function (id) {
            return this.courses.find(course => course.id === id);
        },

        getCourseByName: function (name) {
            return this.courses.find(course => course.name === name);
        },

        getCoursesBySemester: function (semester) {
            return this.courses.filter(course => course.semester === semester);
        },

        getPrerequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.prerequisites.flatMap(prereqId =>
                [prereqId, ...this.getPrerequisiteSequence(prereqId)]
            );
        },

        getCorequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.corequisites.flatMap(coreqId =>
                [coreqId, ...this.getCorequisiteSequence(coreqId)]
            );
        },

        getPostrequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.postrequisites.flatMap(postreqId =>
                [postreqId, ...this.getPostrequisiteSequence(postreqId)]
            );
        }
    };

    return courseData;
}
