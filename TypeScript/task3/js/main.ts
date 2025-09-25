/// <reference path="./crud.d.ts" />  // pull in the ambient types for ./crud.js

import type { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// 1) Create the row object
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };

// 2) Insert and capture the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// 3) Create the updated row with age added
const updatedRow: RowElement = { ...row, age: 23 };

// 4) Update then delete
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
