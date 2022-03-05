const settings = {
    rowsCount: 9,
    colsCount: 9,
    columns: '0ABCDEFGH',
    rows: '012345678',
};

const myDesk = {
    settings,
    containerElement: null,
    cellElements: [],

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('desk');
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settings.rowsCount; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.settings.colsCount; col++) {
                const td = document.createElement('td');
                if (row == 0) {
                    td.innerText = settings.columns[col]; 
                }
                if (col == 0) {
                    td.innerText = settings.rows[row];
                }
                if (col != 0 && row != 0) {
                    if (col % 2 == 0 && row % 2 == 0 || row % 2 != 0 && col % 2 != 0)  {
                        td.style.backgroundColor = '#000';
                    }
                } else {
                    td.style.backgroundColor = '#eee';
                }
                tr.appendChild(td);
                this.cellElements.push(td);
            }
        }
        console.log(this.cellElements);
    }
}
myDesk.run();
