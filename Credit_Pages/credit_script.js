document.addEventListener('DOMContentLoaded', function() {
    const apLink = document.getElementById('apLink');
    const clepLink = document.getElementById('clepLink');
    const ibLink = document.getElementById('ibLink');
    const creditTable = document.getElementById('creditTable'); // Assuming this is the id for the table in HTML

    apLink.addEventListener('click', function() {
        loadCreditData('AP');
    });

    clepLink.addEventListener('click', function() {
        loadCreditData('CLEP');
    });

    ibLink.addEventListener('click', function() {
        loadCreditData('IB');
    });

    function loadCreditData(type) {
        let scriptElement = document.createElement('script');
        switch(type) {
            case 'AP':
                scriptElement.src = '../data_folder/ap_credit.js';
                break;
            case 'CLEP':
                scriptElement.src = '../data_folder/clep_credit.js';
                break;
            case 'IB':
                scriptElement.src = '../data_folder/ib_credit.js';
                break;
        }

        scriptElement.onload = function() {
            let creditData;
            switch(type) {
                case 'AP':
                    creditData = getAPCreditData();
                    break;
                case 'CLEP':
                    creditData = getCLEPCreditData();
                    break;
                case 'IB':
                    creditData = getIBCreditData(); // Assuming you have a similar function for IB credit data
                    break;
            }
            createTable(creditData);
        };
        
        document.head.appendChild(scriptElement);
    }

    function createTable(data) {
        const tbody = creditTable.querySelector('tbody');
        tbody.innerHTML = ''; // Clear existing content

        data.credits.forEach(credit => {
            const row = document.createElement('tr');
            const courseCell = document.createElement('td');
            const testCell = document.createElement('td');
            const scoreCell = document.createElement('td');
            const creditAwardedCell = document.createElement('td');

            courseCell.textContent = credit.subject;
            testCell.textContent = credit.test;
            scoreCell.textContent = credit.score;
            creditAwardedCell.textContent = credit.creditAwarded;

            row.appendChild(courseCell);
            row.appendChild(testCell);
            row.appendChild(scoreCell);
            row.appendChild(creditAwardedCell);

            tbody.appendChild(row);
        });
    }
});
