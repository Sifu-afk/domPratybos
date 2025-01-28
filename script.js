// console.log('////// Pratybos 2 //////');
// console.log('////// 1 and 2//////');

// const container = document.getElementById('container');

// for (i = 1; i <= 5; i++) {
//   const pNode = document.createElement('p');
//   pNode.innerText = `this is p tag number ${i}`;
//   pNode.setAttribute('class', `pNode${i}`);
//   pNode.setAttribute('id', `pId${i}`);
//   pNode.setAttribute('src', `pTag${i}`);

//   pNode.style.color = 'violet';
//   pNode.style.backgroundColor = 'green';
//   pNode.style.width = '16vh';
//   pNode.style.height = '5vh';
//   pNode.style.textAlign = 'center';
//   pNode.style.borderRadius = '10px';

//   container.append(pNode);
// }

// console.log('////// 4 //////');

// const colorBtn = document.createElement('button');
// container.append(colorBtn);
// for (i = 1; i <= 6; i++) {
//   const divNode = document.createElement('div');
//   divNode.setAttribute('id', `pId${i}`);
//   divNode.setAttribute('class', `colorDiv`);
//   divNode.style.width = '20vh';
//   divNode.style.height = '5vh';
//   divNode.style.margin = '1vh';

//   colorBtn.addEventListener('click', () => {
//     const colors = [
//       'green',
//       'red',
//       'blue',
//       'pink',
//       'purple',
//       'mint',
//       'emerald',
//       'indigo',
//       'rose',
//       'burgundy',
//     ];
//     const colorDiv = document.getElementsByClassName('colorDiv');

//     for (i = 0; i <= colorDiv.length; i++) {
//       const random = Math.floor(Math.random() * 10);
//       colorDiv[i].style.backgroundColor = colors[random];
//     }
//   });
//   container.append(divNode);
// }

// for (i = 1; i <= 6; i++) {
//   const randomPNode = document.createElement('p');
//   randomPNode.setAttribute('class', `colorP`);
//   randomPNode.style.width = '20vh';
//   randomPNode.style.height = '5vh';
//   randomPNode.style.margin = '1vh';

//   window.addEventListener('load', () => {
//     const colors = [
//       'green',
//       'red',
//       'blue',
//       'pink',
//       'purple',
//       'mint',
//       'emerald',
//       'indigo',
//       'rose',
//       'burgundy',
//     ];
//     const onReload = document.getElementsByClassName('colorP');

//     for (i = 0; i <= onReload.length; i++) {
//       const random = Math.floor(Math.random() * 10);
//       onReload[i].style.backgroundColor = colors[random];
//     }
//   });

//   container.append(randomPNode);
// }

// console.log('////// Pratybos 3 //////');
// console.log('////// 1 //////');

// //trying to make a simple row and col grid with the users input

// const tableCreateBtn = document.createElement('button');
// const rowInputNode = document.createElement('input');
// const colInputNode = document.createElement('input');

// tableContainer.append(tableCreateBtn, rowInputNode, colInputNode);

// const tableNode = document.createElement('table');
// tableContainer.append(tableNode);

// let rowsNumber;
// let colsNumber;

// rowInputNode.addEventListener('input', () => {
//   rowsNumber = parseFloat(rowInputNode.value);
// });
// colInputNode.addEventListener('input', () => {
//   colsNumber = parseFloat(colInputNode.value);
// });

// tableCreateBtn.addEventListener('click', () => {
//   for (i = 1; i <= rowsNumber; i++) {
//     const tableRows = document.createElement('tr');

//     tableNode.appendChild(tableRows);

//     for (j = 1; j <= colsNumber; j++) {
//       const tableCols = document.createElement('th');
//       tableCols.innerText = `${j}`;
//       tableRows.appendChild(tableCols);
//     }
//   }
// });

console.log('////// Pratybos 4 //////');
console.log('////// 1 //////');

document.addEventListener('DOMContentLoaded', () => {
  const galeryContainer = document.getElementById('galeryContainer');

  for (let i = 1; i <= 5; i++) {
    const wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('class', 'imgContainer');
    wrapperDiv.setAttribute('data-id', i);
    wrapperDiv.style.width = '20vh';
    wrapperDiv.style.height = '20vh';
    wrapperDiv.style.position = 'relative';

    const imgNode = document.createElement('img');
    imgNode.setAttribute('src', `./images/img${i}.jpg`);
    imgNode.style.width = '100%';
    imgNode.style.height = '100%';
    imgNode.style.objectFit = 'cover';

    const hearthNode = document.createElement('span');
    hearthNode.setAttribute('class', 'heart');
    hearthNode.innerText = '♡';
    hearthNode.style.position = 'absolute';
    hearthNode.style.top = '50%';
    hearthNode.style.left = '50%';
    hearthNode.style.transform = 'translate(-50%, -50%)';
    hearthNode.style.fontSize = '32px';

    if (localStorage.getItem(`liked-${i}`) === 'true') {
      hearthNode.classList.add('liked');
      hearthNode.innerText = '❤️';
    }

    hearthNode.addEventListener('click', () => {
      hearthNode.classList.toggle('liked');
      if (hearthNode.classList.contains('liked')) {
        localStorage.setItem(`liked-${i}`, 'true');
        hearthNode.innerText = '❤️';
      } else {
        localStorage.removeItem(`liked-${i}`);
        hearthNode.innerText = '♡';
      }
    });

    wrapperDiv.append(imgNode, hearthNode);
    galeryContainer.append(wrapperDiv);
  }
});
