
//условия:
//коєффициент толщины нанесения 0,6, 0,54, 0,47, 0,4 для м2
//коєффициент ширины нанесения 0,10, 0,15, 0,20 для м2
//коєффициент перехода (пропорция) от 1.1. к 1.3 = 2
//коєффициент перехода (пропорция) от 1.1. к 1.5 = 0,33333
//коєффициент перехода (пропорция) от 1.1. к 1.6 = 0,66666
//коєффициент перехода (пропорция) от 1.1. к 1.7 = 0,5
//коєффициент перехода (пропорция) от 1.1. к 1.8 = 0,66666
//коєффициент перехода (пропорция) от 1.1. к 1.11 = 1,66666




const paint = 1570 //942 г на м2 при толщине 0,6 мм
const solvent = paint * 0.05 //for plastic = plastic * 0.04
const reflectiveSpheres = 250 //for plastic = 300
const plastic = 5967 / 3 //5967 г на м2 при толщине 3 мм
const hardener = plastic * 0.02
const transfer = 0.001
let depthLine = 0.6
let widthLine = 0.10
let lengthLine = 1



//Заполнение ячеек значениями для краски
//======================================
function returnCellsValuesPaint() {
  const lineProportion = [1, 1, 2, 1, 0.3333, 0.6666, 0.5, 0.6666, 1.6666]
  const paintNameCells = document.getElementsByName('paint')
  const solventNameCells = document.getElementsByName('solvent')
  const reflectiveSpheresNameCells = document.getElementsByName('reflectiveSpheres')
  const widthLineNameCells = document.getElementsByName('widthLine')
  for (i = 0; i < paintNameCells.length; i++) {
    if (i !== 2 && i !== 7) {
      paintNameCells[i].textContent = (lineProportion[i] * paint * lengthLine * widthLine * depthLine * transfer).toFixed(4).toString().replace('.', ',')
      solventNameCells[i].textContent = (lineProportion[i] * solvent * depthLine * widthLine * transfer).toFixed(5).toString().replace('.', ',')
      reflectiveSpheresNameCells[i].textContent = (lineProportion[i] * reflectiveSpheres * widthLine * transfer).toFixed(4).toString().replace('.', ',')
      widthLineNameCells[i].textContent = (widthLine * 100).toString() + ' см'
    } else {
      paintNameCells[i].textContent = (lineProportion[i] * paint * lengthLine * 0.1 * depthLine * transfer).toFixed(4).toString().replace('.', ',')
      solventNameCells[i].textContent = (lineProportion[i] * solvent * depthLine * 0.1 * transfer).toFixed(5).toString().replace('.', ',')
      reflectiveSpheresNameCells[i].textContent = (lineProportion[i] * reflectiveSpheres * 0.1 * transfer).toFixed(4).toString().replace('.', ',')
      widthLineNameCells[2].textContent = '15 см'
      widthLineNameCells[7].textContent = '20 см'
    }
  }
}

returnCellsValuesPaint()

//Заполнение ячеек значениями для пластика
//========================================
function returnCellsValuesPlastic() {
  const lineProportion = [1, 1, 2, 1, 0.3333, 0.6666, 0.5, 0.6666, 1.6666]
  const paintNameCells = document.getElementsByName('plastic')
  const hardenerNameCells = document.getElementsByName('hardener')
  const solventNameCells = document.getElementsByName('solvent')
  const reflectiveSpheresNameCells = document.getElementsByName('reflectiveSpheres')
  const widthLineNameCells = document.getElementsByName('widthLine')
  for (i = 0; i < paintNameCells.length; i++) {
    if (i !== 2 && i !== 7) {
      paintNameCells[i].textContent = (lineProportion[i] * plastic * lengthLine * widthLine * transfer).toFixed(4).toString().replace('.', ',')
      hardenerNameCells[i].textContent = (lineProportion[i] * hardener * lengthLine * widthLine * transfer).toFixed(5).toString().replace('.', ',')
      solventNameCells[i].textContent = (lineProportion[i] * plastic * 0.04 * widthLine * transfer).toFixed(5).toString().replace('.', ',')
      reflectiveSpheresNameCells[i].textContent = (lineProportion[i] * (reflectiveSpheres + 50) * widthLine * transfer).toFixed(4).toString().replace('.', ',')
      widthLineNameCells[i].textContent = (widthLine * 100).toString() + ' см'
    } else {
      paintNameCells[i].textContent = (lineProportion[i] * plastic * lengthLine * 0.1 * transfer).toFixed(4).toString().replace('.', ',')
      hardenerNameCells[i].textContent = (lineProportion[i] * hardener * lengthLine * 0.1 * transfer).toFixed(5).toString().replace('.', ',')
      solventNameCells[i].textContent = (lineProportion[i] * plastic * 0.04 * 0.1 * transfer).toFixed(5).toString().replace('.', ',')
      reflectiveSpheresNameCells[i].textContent = (lineProportion[i] * (reflectiveSpheres + 50) * 0.1 * transfer).toFixed(4).toString().replace('.', ',')
      widthLineNameCells[2].textContent = '15 см'
      widthLineNameCells[7].textContent = '20 см'
    }
  }
}
returnCellsValuesPlastic()

//Изменение ширины линии (type=radio)
//==================================
function radioWidthLine() {
  if (document.getElementById('flexRadioDefault2').checked === true) {
    widthLine = 0.15,
      returnCellsValuesPaint(),
      returnCellsValuesPlastic()
  } else {
    widthLine = 0.10,
      returnCellsValuesPaint(),
      returnCellsValuesPlastic()
  }
}



const typeLine = ['1.1.', '1.2.', '1.3.', '1.4.', '1.5.', '1.6.', '1.7.', '1.8.', '1.11.', '1.13.-1.19.', '1.20.']
const lineProportion = [1, 1, 2, 1, 0.3333, 0.6666, 0.5, 0.6666, 1.6666]

//=lineProportion[i]*line_1_1.material*line_1_1.widthLine[a]*line_1_1.depthLine[b]*transfer

const line_1_1 = {
  name: '1.1.',
  value: 1570,
  proportion: 1,
  widthLine: [0.10, 0.15, 0.20],
  depthLine: [0.6, 0.54, 0.47, 0.4, 2.0, 3.0],
  material: [paint, plastic],
  materialName: ['Фарба', 'Пластик'],
  reflectiveSpheres: [250, 300],
  hardener: [0, 0.02],
  solvent: [0.05, 0.04],
  nul: [1, 0],
  nul2: [0, 1]
}





function addRow() {
  let i = document.getElementById('selectLine').value
  let a = document.getElementById('selectWidth').value
  let b = document.getElementById('selectMaterial').value
  let c = document.getElementById('selectDepth').value
  const table = document.getElementById('myTable')
  const newRow = document.createElement('tr')
  const cell1 = document.createElement('td')
  const cell2 = document.createElement('td')
  const cell3 = document.createElement('td')
  const cell4 = document.createElement('td')
  const cell5 = document.createElement('td')
  const cell6 = document.createElement('td')
  const cell7 = document.createElement('td')
  const cell8 = document.createElement('td')
  const cell9 = document.createElement('td')
  const cell10 = document.createElement('td')

  //==========
  const value1 = typeLine[i]
  const value2 = (line_1_1.widthLine[a] * 100).toString() + ' см'
  const value3 = line_1_1.materialName[b]
  const value4 = (line_1_1.depthLine[c].toString() + ' мм').replace('.', ',')
  const value5 = (document.getElementById('selectLength').value.toString() + ' км').replace('.', ',')
  let value6 = (lineProportion[i] * paint * line_1_1.nul[b] * line_1_1.widthLine[a] * line_1_1.depthLine[c] * transfer * document.getElementById('selectLength').value).toFixed(4).toString().replace('.', ',')
  let value7 = (lineProportion[i] * plastic * line_1_1.nul2[b] * line_1_1.widthLine[a] * line_1_1.depthLine[c] * transfer * document.getElementById('selectLength').value).toFixed(4).toString().replace('.', ',')
  let value8 = (lineProportion[i] * line_1_1.hardener[b] * line_1_1.material[b] * line_1_1.widthLine[a] * line_1_1.depthLine[c] * transfer * document.getElementById('selectLength').value).toFixed(4).toString().replace('.', ',')
  const value9 = (lineProportion[i] * line_1_1.material[b] * line_1_1.solvent[b] * line_1_1.widthLine[a] * line_1_1.depthLine[c] * transfer * document.getElementById('selectLength').value).toFixed(5).toString().replace('.', ',')
  const value10 = (lineProportion[i] * line_1_1.reflectiveSpheres[b] * line_1_1.widthLine[a] * transfer * document.getElementById('selectLength').value).toFixed(4).toString().replace('.', ',')
  //==========
  if (value6 !== '0,0000') { } else { value6 = '-' }
  if (value7 !== '0,0000') { } else { value7 = '-' }
  if (value8 !== '0,0000') { } else { value8 = '-' }

  cell1.textContent = value1
  cell2.textContent = value2
  cell3.textContent = value3
  cell4.textContent = value4
  cell5.textContent = value5
  cell6.textContent = value6
  cell7.textContent = value7
  cell6.textContent = value6
  cell8.textContent = value8
  cell9.textContent = value9
  cell10.textContent = value10


  newRow.appendChild(cell1)
  newRow.appendChild(cell2)
  newRow.appendChild(cell3)
  newRow.appendChild(cell4)
  newRow.appendChild(cell5)
  newRow.appendChild(cell6)
  newRow.appendChild(cell7)
  newRow.appendChild(cell8)
  newRow.appendChild(cell9)
  newRow.appendChild(cell10)
  table.appendChild(newRow)
}

// Массив+функция для сброса результатов расчета ПЕРЕДЕЛАТЬ

const tableValue = ['paint', 'plastic', 'hardener', 'solvent', 'reflectiveSpheres']
const resetTableValue = () => tableValue.forEach(el => document.getElementById(el).textContent = 0)


// Селектор по типу линии

document.getElementById('selectLine').addEventListener("change", function () {

  const chooseLine = document.getElementById('selectLine').value
  const chooseWidth = document.getElementById('selectWidth')
  const unit = document.getElementById('basic-addon2')
  const chooseDepth = document.getElementById('selectDepth')

  if (chooseLine === '2') {
    unit.textContent = 'км'
    chooseWidth.value = '1'
    chooseWidth.disabled = true
  } else if (chooseLine === '7') {
    unit.textContent = 'км'
    chooseWidth.value = '2'
    chooseWidth.disabled = true
  } else if (chooseLine === '9' || chooseLine === '10') {
    unit.textContent = 'м2'
    chooseDepth.disabled = true
    chooseWidth.value = '0'
    chooseWidth.disabled = true
  } else {
    unit.textContent = 'км'
    chooseWidth.value = '0'
    chooseDepth.disabled = false
    chooseWidth.disabled = false
  }
})

// Селектор по типу материала
document.getElementById('selectDepth').querySelectorAll('option')[4].disabled = true
document.getElementById('selectDepth').querySelectorAll('option')[5].disabled = true

document.getElementById('selectMaterial').addEventListener("change", function () {

  const chooseMaterial = document.getElementById('selectMaterial').value
  const chooseDepth = document.getElementById('selectDepth')

  if (chooseMaterial === '1') {
    chooseDepth.value = '5'
    chooseDepth.querySelectorAll('option')[4].disabled = false
    chooseDepth.querySelectorAll('option')[5].disabled = false
    chooseDepth.querySelectorAll('option')[0].disabled = true
    chooseDepth.querySelectorAll('option')[1].disabled = true
    chooseDepth.querySelectorAll('option')[2].disabled = true
    chooseDepth.querySelectorAll('option')[3].disabled = true
  } else {
    chooseDepth.value = '0'
    chooseDepth.querySelectorAll('option')[0].disabled = false
    chooseDepth.querySelectorAll('option')[1].disabled = false
    chooseDepth.querySelectorAll('option')[2].disabled = false
    chooseDepth.querySelectorAll('option')[3].disabled = false
    chooseDepth.querySelectorAll('option')[4].disabled = true
    chooseDepth.querySelectorAll('option')[5].disabled = true
  }
})

//Валидация вводимых данных
function validateNumericInput(inputElement) {
  const inputValue = inputElement.value
  const numericPattern = /^[0-9]*([.]?[0-9]*)?$/
  if (!numericPattern.test(inputValue)) {
    inputElement.value = inputValue.slice(0, -1);
  }
}

//Суммирование ячеек
function calculateSum() {
  let sum = 0
  const table = document.getElementById("myTable")
  for (i = 0; i < table.rows.length; i++) {
    const row = table.rows[i]
    for (let j = 0; j < row.cells.length; j++) {
      const cellValue = parseInt(row.cells[j].textContent) // Получаем содержимое ячейки и преобразуем в число
      if (!isNaN(cellValue)) {
        sum += cellValue;
      }
    }
  }
}


//в процессе...
function convertToNumberWithComma(value) {
  // Заменяем запятую на точку, чтобы получить число в формате, понятном JavaScript
  const numericValue = value.replace(',', '.');

  // Преобразуем строку в число с плавающей точкой
  const parsedNumber = parseFloat(numericValue);

  return parsedNumber;
}




//class ConsumptionNorms толщина+нормаМат
//class + calcValue + outData (SupposeMaterialAmount) 
//valid (inputKM )









