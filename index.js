const docBody = document.body;
const dataTable = document.getElementById('dataTable');
const dataTableBody = document.getElementById('dataTableBody');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

const formSubmitHandler = (e) => {
    e.preventDefault();

    const inputedName = nameInput.value;
    const inputedEmail = emailInput.value;

    tableDataHandler(inputedName, inputedEmail, dataTable);
};

const tableDataHandler = (nameData, emailData, table) => {
    let newRow = document.createElement('tr');
    let newNameTableData = document.createElement('td');
    let newEmailTableData = document.createElement('td');

    newNameTableData.innerHTML = nameData;
    newEmailTableData.innerHTML = emailData;

    newNameTableData.classList = 'mb-5';
    newEmailTableData.classList = 'mb-5';

    newRow.append(newNameTableData);
    newRow.append(newEmailTableData);

    table.append(newRow);
};

form.addEventListener('submit', formSubmitHandler);