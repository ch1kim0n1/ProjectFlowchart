document.addEventListener('DOMContentLoaded', function() {
    const apCreditData = getAPCreditData();
    const apCreditTableBody = document.getElementById('apCreditTable').querySelector('tbody');
    const courseFilter = document.getElementById('courseFilter');
    const scoreFilter = document.getElementById('scoreFilter');
    const creditFilter = document.getElementById('creditFilter');
    const filterButton = document.getElementById('filterButton');
    const resetButton = document.getElementById('resetButton');

    function populateTable(data) {
        apCreditTableBody.innerHTML = '';
        data.forEach(credit => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${credit.subject}</td>
                <td>${credit.test}</td>
                <td>${credit.score}</td>
                <td>${credit.creditAwarded}</td>
            `;
            apCreditTableBody.appendChild(row);
        });
    }

    function filterTable() {
        const subject = courseFilter.value.trim();
        const score = parseInt(scoreFilter.value, 10);
        const award = creditFilter.value.trim();
        const filteredCredits = apCreditData.filterCredits(subject, score, award);
        populateTable(filteredCredits);
    }

    filterButton.addEventListener('click', filterTable);
    resetButton.addEventListener('click', () => {
        courseFilter.value = '';
        scoreFilter.value = '';
        creditFilter.value = '';
        populateTable(apCreditData.credits);
    });

    populateTable(apCreditData.credits);
    
    // Mode switcher
    const modeToggle = document.getElementById('modeToggle');
    const modeTitle = document.getElementById('modeTitle');

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
});
