function addRow() {
  const table = document.getElementById('myTable')
  const newRow = document.createElement('tr')
  const cell1 = document.createElement('td')
  const cell2 = document.createElement('td')
  const value1 = 2222
  const value2 = '3333'
  cell1.textContent = value1
  cell2.textContent = value2
  newRow.appendChild(cell1)
  newRow.appendChild(cell2)
  table.appendChild(newRow)
}
function resetVal(val) {
  const result1 = document.getElementById('farba').textContent = val
  const result2 = document.getElementById('plastik').textContent = val
  const result3 = document.getElementById('zatver').textContent = val
  const result4 = document.getElementById('rozchin').textContent = val
  const result5 = document.getElementById('kuli').textContent = val
}

function addVal() {
  let typeLine = document.getElementById('selectLine').value

  switch (typeLine) {
    case '0': document.getElementById('farba').textContent = (0.0942 * document.getElementById('inputKM').value).toFixed(4)
      document.getElementById('rozchin').textContent = (0.00471 * document.getElementById('inputKM').value).toFixed(4)
      document.getElementById('kuli').textContent = (0.025 * document.getElementById('inputKM').value).toFixed(4)
      break;
    case '1': document.getElementById('farba').textContent = 0
      break;
    case '2': document.getElementById('farba').textContent = (0.1884 * document.getElementById('inputKM').value).toFixed(4)
      break;
    case '3': document.getElementById('farba').textContent = 0
      break;
    case '4': document.getElementById('farba').textContent = (0.0314 * document.getElementById('inputKM').value).toFixed(4)
      break;
    case '5': document.getElementById('farba').textContent = (0.0628 * document.getElementById('inputKM').value).toFixed(4)
      break;
    case '6': document.getElementById('farba').textContent = (0.0471 * document.getElementById('inputKM').value).toFixed(4)
      break;
    default: alert('error')
  }

  // let typeWidth = document.getElementById('selectWidth').value
  // let typeLong = document.getElementById('inputKM').value
  // let typeMater = document.getElementById('selectMat').value



}

