document.addEventListener('DOMContentLoaded', () => {
    let rowsCount = 8;
    let columnsCount = 8;
    let rows = [];
    let sells = [];

    for (let i = 1; i <= rowsCount; i++) {
        let divRow = document.createElement('div');
        divRow.className = 'div-row';
        rows.push(divRow);
        // console.log(rows);
        document.querySelector('.board').appendChild(divRow);
    }

    for (let [i, row] of rows.entries()) {
        let sell;
        let names = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];

        for (let j = 1; j <= columnsCount; j++) {
            sell = document.createElement('div');
            sell.className = 'chess-sell';
            row.appendChild(sell);
            sells.push(sell);
            if (j % 2 === 0 && i % 2 !== 0) {
                sell.style.backgroundColor = 'black';
                sell.style.color = 'white';
            }
            else if (j % 2 !== 0 && i % 2 === 0) {
                sell.style.backgroundColor = 'black';
                sell.style.color = 'white';
            }
            else {
                sell.style.backgroundColor = 'white';
                sell.style.color = 'black';
            }

            if (i === 1 || i === 6) {
                sell.style.padding = '30.7px 35.57px';
                sell.innerHTML = 'P';
            }
            if (i === 0 || i === 7) {
                sell.style.padding = '30.7px 34.46px';
            }
        }
        
        if (i === 0) {
            for (let i = 0; i <= 7; i++) {
                sells[i].innerHTML = names[i];
            }
        }
        if (i === 7) {
            for (let i = 56; i <= 63; i++) {
                sells[i].innerHTML = names[i - 56];
            }
        }
    }
    console.log(sells);

    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

    let numsColumn = document.querySelector('.sell-numbers');
    let lettersRow = document.querySelector('.sell-letters');

    for (let i = 0; i < numbers.length; i++) {
        let divNum = document.createElement('div');
        divNum.className = 'div-num';
        divNum.innerHTML = numbers[i]
        numsColumn.appendChild(divNum);
    }
    for (let i = 0; i < letters.length; i++) {
        let divLets = document.createElement('div');
        divLets.className = 'div-let';
        divLets.innerHTML = letters[i]
        lettersRow.appendChild(divLets);
    }
})