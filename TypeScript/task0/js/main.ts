interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 21,
  location: 'San Juan',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'García',
  age: 23,
  location: 'Ponce',
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table: HTMLTableElement = document.createElement('table');
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  const thFirstName: HTMLTableCellElement = document.createElement('th');
  thFirstName.textContent = 'First Name';

  const thLocation: HTMLTableCellElement = document.createElement('th');
  thLocation.textContent = 'Location';

  headerRow.append(thFirstName, thLocation);
  thead.appendChild(headerRow);

  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  for (const student of students) {
    const row: HTMLTableRowElement = document.createElement('tr');

    const cellFirstName: HTMLTableCellElement = document.createElement('td');
    cellFirstName.textContent = student.firstName;

    const cellLocation: HTMLTableCellElement = document.createElement('td');
    cellLocation.textContent = student.location;

    row.append(cellFirstName, cellLocation);
    tbody.appendChild(row);
  }

  table.append(thead, tbody);
  document.body.appendChild(table);
}

renderTable(studentsList);

