document.addEventListener('DOMContentLoaded', function() {
    const courseData = getData();
    const courseTable = document.getElementById('courseTable');
    const coursePopup = document.getElementById('coursePopup');
    const popupCourseName = document.getElementById('popupCourseName');
    const popupCourseCredits = document.getElementById('popupCourseCredits');
    const popupCourseDescription = document.getElementById('popupCourseDescription');
    const popupCourseSemester = document.getElementById('popupCourseSemester');
    const closeBtn = document.querySelector('.close-btn');

    function createTable() {
        const semesters = Array.from(new Set(courseData.courses.map(course => course.semester))).sort();
        semesters.forEach(semester => {
            const courses = courseData.getCoursesBySemester(semester);
            const row = document.createElement('tr');

            const semesterCell = document.createElement('th');
            semesterCell.textContent = `Semester ${semester}`;
            row.appendChild(semesterCell);

            courses.forEach(course => {
                const courseCell = document.createElement('td');
                courseCell.classList.add('course-cell');
                courseCell.dataset.courseId = course.id;

                const courseCode = document.createElement('span');
                courseCode.textContent = course.code;
                courseCode.classList.add('course-code');

                const courseName = document.createElement('span');
                courseName.textContent = course.name;
                courseName.classList.add('course-name');

                courseCell.appendChild(courseCode);
                courseCell.appendChild(courseName);

                // Hover event listeners
                courseCell.addEventListener('mouseenter', handleMouseEnter);
                courseCell.addEventListener('mouseleave', handleMouseLeave);
                courseCell.addEventListener('click', handleCourseClick);

                row.appendChild(courseCell);
            });

            courseTable.appendChild(row);
        });
    }

    function handleMouseEnter(event) {
        const courseId = event.target.dataset.courseId;
        if (courseId !== "core") {
            const course = courseData.getCourseById(Number(courseId));
            highlightCourseAndRelations(course, 'add');
        }
    }

    function handleMouseLeave(event) {
        const courseId = event.target.dataset.courseId;
        if (courseId !== "core") {
            const course = courseData.getCourseById(Number(courseId));
            highlightCourseAndRelations(course, 'remove');
        }
    }

    function handleCourseClick(event) {
        const courseId = event.target.dataset.courseId;
        if (courseId !== "core") {
            const course = courseData.getCourseById(Number(courseId));
            popupCourseName.textContent = course.name;
            popupCourseCredits.textContent = "3"; // You can update this value based on your data
            popupCourseDescription.textContent = "Course description goes here."; // Update with actual description if available
            popupCourseSemester.textContent = course.semester;
            coursePopup.style.display = "block";
        }
    }

    function highlightCourseAndRelations(course, action) {
        const courseCell = document.querySelector(`td[data-course-id="${course.id}"]`);

        if (action === 'add') {
            courseCell.classList.add('highlight-prerequisite');
        } else {
            courseCell.classList.remove('highlight-prerequisite');
        }

        course.prerequisites.forEach(prerequisiteCode => {
            const prerequisiteCourse = courseData.courses.find(c => c.code === prerequisiteCode);
            const prerequisiteCell = document.querySelector(`td[data-course-id="${prerequisiteCourse.id}"]`);
            if (prerequisiteCell) {
                if (action === 'add') {
                    prerequisiteCell.classList.add('highlight-prerequisite');
                } else {
                    prerequisiteCell.classList.remove('highlight-prerequisite');
                }
            }
        });

        course.corequisites.forEach(corequisiteCode => {
            const corequisiteCourse = courseData.courses.find(c => c.code === corequisiteCode);
            const corequisiteCell = document.querySelector(`td[data-course-id="${corequisiteCourse.id}"]`);
            if (corequisiteCell) {
                if (action === 'add') {
                    corequisiteCell.classList.add('highlight-corequisite');
                } else {
                    corequisiteCell.classList.remove('highlight-corequisite');
                }
            }
        });

        courseData.courses.forEach(c => {
            if (c.prerequisites.includes(course.code) || c.corequisites.includes(course.code)) {
                const postrequisiteCell = document.querySelector(`td[data-course-id="${c.id}"]`);
                if (postrequisiteCell) {
                    if (action === 'add') {
                        postrequisiteCell.classList.add('highlight-postrequisite');
                    } else {
                        postrequisiteCell.classList.remove('highlight-postrequisite');
                    }
                }
            }
        });
    }

    closeBtn.addEventListener('click', () => {
        coursePopup.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === coursePopup) {
            coursePopup.style.display = "none";
        }
    });

    createTable();
});
