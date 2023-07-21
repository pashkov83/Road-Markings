//расход paint 1570 г/м2
//расход solvent 5% от paint
//расход reflectiveSpheres 250 г/м2 

//условия:
//коєффициент толщины нанесения 0,6, 0,54, 0,47, 0,4 для м2
//коєффициент ширины нанесения 0,10, 0,15, 0,20 для м2
//коєффициент перехода (пропорция) от 1.1. к 1.3 = 2
//коєффициент перехода (пропорция) от 1.1. к 1.5 = 0,33333
//коєффициент перехода (пропорция) от 1.1. к 1.6 = 0,66666
//коєффициент перехода (пропорция) от 1.1. к 1.7 = 0,5
//коєффициент перехода (пропорция) от 1.1. к 1.8 = 0,66666
//коєффициент перехода (пропорция) от 1.1. к 1.11 = 1,66666
//стандартная норма на 1 км
//значения для paint по линии 1.1.: длина 1, пропорция 1, ширина 0,1, толщина 0,6, перевод в тн 0,001
//значения для solvent по линии 1.1.: solvent * пропорция 1 * depth * перевод в тн
//значения для reflectiveSpheres по линии 1.1.: reflectiveSpheres * длина * пропорция * перевод в тн 0,001



const paint = 1570
const solvent = paint * 0.05
const reflectiveSpheres = 250
const proportion11 = 1
const proportion12 = 1
const proportion13 = 2
const proportion14 = 1
const proportion15 = 0.33333
const proportion16 = 0.66666
const proportion17 = 0.5
const proportion18 = 0.66666
const proportion111 = 1.66666
const transfer = 0.001
let depthLine = 0.6
let widthLine = 0.10
let lengthLine = 1


//document.getElementById('reflectiveSpheres14').textContent = transfer.toString().replace('.',',')








const materialArray = [
['paint11', 'paint12', 'paint13', 'paint14', 'paint15', 'paint16', 'paint17', 'paint18', 'paint111'],
['solvent11', 'solvent12', 'solvent13', 'solvent14', 'solvent15', 'solvent16', 'solvent17', 'solvent18', 'solvent111'],
['reflectiveSpheres11', 'reflectiveSpheres12', 'reflectiveSpheres13', 'reflectiveSpheres14', 'reflectiveSpheres15', 'reflectiveSpheres16', 'reflectiveSpheres17', 'reflectiveSpheres18', 'reflectiveSpheres111'],
[proportion11, proportion12, proportion13, proportion14, proportion15, proportion16, proportion17, proportion18, proportion111]
]
let i=0
materialArray[0].forEach(el=>document.getElementById(el).textContent = (paint * lengthLine * materialArray[3][i++] * widthLine * depthLine * transfer).toFixed(4).toString().replace('.',','))
i=0
materialArray[1].forEach(el=>document.getElementById(el).textContent = (solvent * materialArray[3][i++] * depthLine * transfer).toFixed(4).toString().replace('.',','))
i=0
materialArray[2].forEach(el=>document.getElementById(el).textContent = (reflectiveSpheres * materialArray[3][i++] * lengthLine * transfer).toFixed(4).toString().replace('.',','))




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

// Массив+функция для сброса результатов расчета

const tableValue = ['paint', 'plastic', 'hardener', 'solvent', 'reflectiveSpheres']
const resetTableValue = () => tableValue.forEach(el => document.getElementById(el).textContent = 0)




//class ConsumptionNorms толщина+нормаМат
//class + calcValue + outData (SupposeMaterialAmount) 
//valid (inputKM )

//paint 0,0942
//solvent 0,00471
//reflectiveSpheres 0,025
//width 10
//material





class ConsumptionNorms {
  constructor() { }
  calculate(type, width) {
    document.getElementById('paint').textContent = type * width
    document.getElementById('solvent').textContent = type * width
    document.getElementById('reflectiveSpheres').textContent = type * width
  }
}
const valueNorms = new ConsumptionNorms()

// function addVal() {
//   let typeLine = document.getElementById('selectLine').value
//   switch (typeLine) {
//     case '0': document.getElementById('paint').textContent = (0.0942 * document.getElementById('inputKM').value).toFixed(4)
//       document.getElementById('solvent').textContent = (0.00471 * document.getElementById('inputKM').value).toFixed(4)
//       document.getElementById('reflectiveSpheres').textContent = (0.025 * document.getElementById('inputKM').value).toFixed(4)
//       break;
//     case '1': document.getElementById('paint').textContent = 0
//       break;
//     case '2': document.getElementById('paint').textContent = (0.1884 * document.getElementById('inputKM').value).toFixed(4)
//       break;
//     case '3': document.getElementById('paint').textContent = 0
//       break;
//     case '4': document.getElementById('paint').textContent = (0.0314 * document.getElementById('inputKM').value).toFixed(4)
//       break;
//     case '5': document.getElementById('paint').textContent = (0.0628 * document.getElementById('inputKM').value).toFixed(4)
//       break;
//     case '6': document.getElementById('paint').textContent = (0.0471 * document.getElementById('inputKM').value).toFixed(4)
//       break;
//     default: alert('error')
//   }
// }

