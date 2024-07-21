function getData() {
    //Added just in case we want to check if a current student has taken a course
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

        constructor(id, code, name, prerequisites = [], corequisites = [], semester) {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
        }
    }

    let courseData = {
        //commented out courses are not "required" but are still part of the degree plan
        courses: [
            new Course(0, "ECS 1100", "Intro to Engr & CS", [], [], "1"),
            new Course(1, "CE 1100", "Intro to Comp Eng", [], [], "1"),
            new Course(2, "MATH 2413", "Calculus I", ["ALEKS 80% or MATH 2312"], [], "1"),
            new Course(3, "CS 1436", "Programming Fundamentals", [], [], "1"),
            //new Course(4, "RHET 1302", "Rhetoric", [], [], "0"),
            new Course(5, "MATH 2414", "Calculus II", ["MATH 2413"], [], "2"),
            new Course(6, "PHYS 2325/2125", "Mechanics and Lab", ["MATH 2413"], [], "2"),
            new Course(7, "CE 1202", "Intro to Computer Eng II", ["CE 1100"], [], "2"),
            //new Course(8, "GOVT 2305", "American National Government", [], [], "0"),
            new Course(9, "CE 1337", "Computer Science I", ["CS 1436"], [], "2"),
            new Course(10, "MATH 2415", "Calculus of Several Variables", ["MATH 2414"], [], "3"),
            new Course(11, "PHYS 2326/2126", "Electricity and Magnetism and Lab", ["PHYS 2325/2125"], [], "3"),
            new Course(12, "CE 2310", "Intro to Digital Systems", ["CE 1337"], [], "3"),
            new Course(13, "CE 2305", "Discrete Mathematics I", ["MATH 2413"], [], "3"),
            //new Course(14, "GOVT 2306", "State and Local Government", [], [], "0"),
            new Course(15, "CE 2336", "Computer Science II", ["CE 1337"], [], "4"),
            new Course(16, "MATH 2420", "Differential Equations", ["MATH 2415"], [], "4"),
            new Course(17, "ENGR 2300", "Linear Algebra for Engineers", ["MATH 2414"], [], "4"),
            new Course(18, "CE 3320", "Digital Circuits", ["CE 2310"], [], "4"),
            new Course(19, "ECS 2390", "Professional and Technical Communication", [], [], "4"),
            //new Course(20, "MATH 2414", "Calculus II", ["MATH 2413"], [], "5"),
            new Course(21, "CE 3201", "Fundamentals of Engineering I", ["CE 3320"], [], "5"),
            new Course(22, "CE 3161", "Social Issues and Ethics in Engineering", [], [], "5"),
            new Course(23, "CE 3303", "Signals and Systems", ["MATH 2420"], [], "5"),
            new Course(24, "CE 3354", "Software Engineering", ["CE 2336"], [], "6"),
            new Course(25, "CE 3161", "Social Issues and Ethics in Engineering", [], [], "6"),
            new Course(26, "CE 3345", "Data Structures and Introduction to Algorithmic", ["CE 2336"], [], "6"),
            new Course(27, "CE 4370", "Embedded Systems", ["CE 3320"], [], "7"),
            new Course(28, "CE 4304", "Computer Architecture", ["CE 3320"], [], "7"),
            new Course(29, "CE 4388", "Senior Design Project I", ["CE 4370"], [], "7"),
            new Course(30, "CE 4348", "Operating Systems Concepts", ["CE 2336"], [], "7"),
            new Course(31, "CE 4389", "Senior Design Project II", ["CE 4388"], [], "8"),
            new Course(32, "CE 42XX", "Technical Elective", [], [], "8"),
            new Course(33, "CE 24XX", "MATH Technical Elective", [], [], "7"),
            new Course(34, "CORE 0000", "CORE", [], [], "1"),
            new Course(35, "CORE 0000", "CORE", [], [], "4"),
            new Course(36, "CORE 0000", "CORE", [], [], "4"),
            new Course(37, "CORE 0000", "CORE", [], [], "6"),
            new Course(38, "CORE 0000", "CORE", [], [], "6"),
            new Course(39, "CORE 0000", "CORE", [], [], "6"),
            new Course(40, "CORE 0000", "CORE", [], [], "7"),
            new Course(41, "CORE 0000", "CORE", [], [], "8")
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