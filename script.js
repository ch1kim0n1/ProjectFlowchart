document.addEventListener('DOMContentLoaded', function() {
    let courseData;
    try {
        courseData = getData();
    } catch (error) {
        console.error('Error getting course data:', error);
        return;
    }
    const courseTable = document.getElementById('courseTable');
    const coursePopup = document.getElementById('coursePopup');
    const popupCourseName = document.getElementById('popupCourseName');
    const popupCourseCredits = document.getElementById('popupCourseCredits');
    const popupCourseDescription = document.getElementById('popupCourseDescription');
    const popupCourseSemester = document.getElementById('popupCourseSemester');
    const closeBtn = document.querySelector('.close-btn');
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');
    const backButton = document.getElementById('backButton');
    const currentMajorDisplay = document.getElementById('currentMajor');
    const modeToggle = document.getElementById('modeToggle');
    const modeTitle = document.getElementById('modeTitle');
    const colorKey = document.getElementById('colorKey');
    const disclaimerModal = document.getElementById('disclaimerModal');
    const acknowledgeCheckbox = document.getElementById('acknowledgeCheckbox');
    const closeDisclaimer = document.getElementById('closeDisclaimer');
    const majorNames = {
        CE: "Computer Engineering",
        CS: "Computer Science",
        MECH: "Mechanical Engineering",
        EE: "Electrical Engineering"
    };

    if (disclaimerModal) {
        disclaimerModal.style.display = 'block';

        acknowledgeCheckbox.addEventListener('change', function() {
            if (acknowledgeCheckbox.checked) {
                closeDisclaimer.disabled = false;
            } else {
                closeDisclaimer.disabled = true;
            }
        });

        closeDisclaimer.addEventListener('click', function() {
            disclaimerModal.style.display = 'none';
        });
    }

    // Apply saved theme mode
    const savedMode = localStorage.getItem('theme') || 'dark';
    document.body.className = savedMode + '-mode';
    modeToggle.checked = savedMode === 'dark';
    modeTitle.textContent = savedMode.charAt(0).toUpperCase() + savedMode.slice(1) + ' Mode';

    modeToggle.addEventListener('change', function() {
        if (modeToggle.checked) {
            document.body.className = 'dark-mode';
            localStorage.setItem('theme', 'dark');
            modeTitle.textContent = 'Dark Mode';
        } else {
            document.body.className = 'light-mode';
            localStorage.setItem('theme', 'light');
            modeTitle.textContent = 'Light Mode';
        }
    });

    function createTable() {
        courseTable.innerHTML = ''; // Clear existing content
        colorKey.style.display = 'block'; // Show color key
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

    function handleCourseClick(event) {
        const courseId = event.target.dataset.courseId;
        if (courseId !== "core") {
            const course = courseData.getCourseById(Number(courseId));
            popupCourseName.textContent = course.name;
            popupCourseCredits.textContent = parseInt(course.code.match(/\d+/)[0].charAt(1)); //the amount of credits given per course
            popupCourseDescription.textContent = course.description || 'No description available';
            popupCourseSemester.textContent = course.semester;
            popupCoursePrerequisites.textContent = course.prerequisites.join(', ') || 'None';
            popupCourseCorequisites.textContent = course.corequisites.join(', ') || 'None';
            coursePopup.style.display = "block";
        }
    }

    function highlightCourseAndRelations(course, action) {
        function applyHighlight(courseId, action, highlightType) {
            const courseCell = document.querySelector(`td[data-course-id="${courseId}"]`);
            if (courseCell) {
                if (action === 'add') {
                    courseCell.classList.add(highlightType);
                } else {
                    courseCell.classList.remove(highlightType);
                }
            }
        }

        // Highlight the main course prerequisite sequence
        const prerequisiteSequence = courseData.getPrerequisiteSequence(course.id);
        prerequisiteSequence.forEach(prereqId => applyHighlight(prereqId, action, 'highlight-prerequisite-sequence'));

        // Highlight prerequisites
        course.prerequisites.forEach(prereqCode => {
            const prerequisiteCourse = courseData.getCourseByCode(prereqCode);
            applyHighlight(prerequisiteCourse.id, action, 'highlight-prerequisite');
        });

        // Highlight corequisites
        course.corequisites.forEach(coreqCode => {
            const corequisiteCourse = courseData.getCourseByCode(coreqCode);
            applyHighlight(corequisiteCourse.id, action, 'highlight-corequisite');
        });

        // Highlight postrequisites
        course.postrequisites.forEach(postreqCode => {
            const postrequisiteCourse = courseData.getCourseByCode(postreqCode);
            applyHighlight(postrequisiteCourse.id, action, 'highlight-postrequisite');
        });

        // Highlight postrequisite sequence
        const postrequisiteSequence = courseData.getPostrequisiteSequence(course.id);
        postrequisiteSequence.forEach(postreqId => applyHighlight(postreqId, action, 'highlight-postrequisite-sequence'));
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

    // Close popup
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            coursePopup.style.display = "none";
        });
    }

    if (backButton) {
        backButton.addEventListener('click', function() {
            createTable();
            backButton.style.display = 'none'; // Hide back button after returning to the course table
        });
    }

    // Search functionality
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchBox.value.toLowerCase();
            const courses = courseData.courses.filter(course => 
                course.name.toLowerCase().includes(searchTerm) ||
                course.code.toLowerCase().includes(searchTerm)
            );
            displaySearchResults(courses);
        });
    }

    function displaySearchResults(courses) {
        if (!courseTable) return;
        courseTable.innerHTML = ''; // Clear existing content
        colorKey.style.display = 'none'; // Hide color key

        if (courses.length === 0) {
            const noResults = document.createElement('tr');
            const noResultsCell = document.createElement('td');
            noResultsCell.colSpan = 5; // Assuming 5 columns in the table
            noResultsCell.textContent = 'No courses found';
            noResultsCell.style.textAlign = 'center';
            noResults.appendChild(noResultsCell);
            courseTable.appendChild(noResults);
            return;
        }

        const tableHeader = document.createElement('tr');
        const headers = ['Course Code', 'Course Name', 'Credits', 'Semester', 'Description'];

        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            tableHeader.appendChild(header);
        });

        courseTable.appendChild(tableHeader);

        courses.forEach(course => {
            const row = document.createElement('tr');
            const courseCodeCell = document.createElement('td');
            const courseNameCell = document.createElement('td');
            const courseCreditsCell = document.createElement('td');
            const courseSemesterCell = document.createElement('td');
            const courseDescriptionCell = document.createElement('td');

            courseCodeCell.textContent = course.code;
            courseNameCell.textContent = course.name;
            courseCreditsCell.textContent = parseInt(course.code.match(/\d+/)[0].charAt(1));
            courseSemesterCell.textContent = course.semester;
            courseDescriptionCell.textContent = course.description || 'No description available';

            row.appendChild(courseCodeCell);
            row.appendChild(courseNameCell);
            row.appendChild(courseCreditsCell);
            row.appendChild(courseSemesterCell);
            row.appendChild(courseDescriptionCell);

            // Hover event listeners
            row.addEventListener('mouseenter', handleMouseEnter);
            row.addEventListener('mouseleave', handleMouseLeave);
            row.addEventListener('click', handleCourseClick);

            courseTable.appendChild(row);
        });

        backButton.style.display = 'block'; // Show back button after search results are displayed
    }

    window.setMajor = function(selectedMajor) {
        const fullMajorName = majorNames[selectedMajor];
        currentMajorDisplay.textContent = `Current Major: ${fullMajorName}`;

        // Dynamically load the data file based on the selected major
        const scriptElement = document.createElement('script');
        
        if(selectedMajor == "CS")
        {
            scriptElement.src = `./data_folder/cs_data.js`;
        }
        else if (selectedMajor == "MECH")
        {
            scriptElement.src = `./data_folder/mech_data.js`;
        }
        else if(selectedMajor == "CE")
        {
            scriptElement.src = `./data_folder/ce_data.js`;
        }
        else if(selectedMajor == "EE")
        {
            scriptElement.src = `./data_folder/ee_data.js`;
        }
        
        scriptElement.onload = function() {
            try {
                courseData = getData();
                createTable();
            } catch (error) {
                console.error('Error loading course data:', error);
            }
        };
        document.head.appendChild(scriptElement);
    };

    createTable();
});
