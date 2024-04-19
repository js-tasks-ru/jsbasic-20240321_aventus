function makeDiagonalRed(table) {
    const rows = table.rows;
    const length = rows.length;
  
    for (let i = 0; i < length; i++) {
      const cell = rows[i].cells[i];
      cell.style.backgroundColor = 'red';
    }
  }
