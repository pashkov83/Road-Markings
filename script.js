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



const paint = 1570 //942 г на м2 при толщине 0,6 мм
const solvent = paint * 0.05 //for plastic = plastic * 0.04
const reflectiveSpheres = 250 //for plastic = 300
const plastic = 5967 //г на м2 при толщине 3 мм
const hardener = plastic * 0.02
const transfer = 0.001
let depthLine = 0.6
let widthLine = 0.10
let lengthLine = 1

//единая формула==================================
function result(math1, math2) {
  let mult
  mult = (math1 * lengthLine * widthLine * math2 * transfer).toFixed(4).toString().replace('.', ',')
  return mult
}

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
    } else{
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







/*
const materialArrayCells = [
['paint11', 'paint12', 'paint13', 'paint14', 'paint15', 'paint16', 'paint17', 'paint18', 'paint111'],
['solvent11', 'solvent12', 'solvent13', 'solvent14', 'solvent15', 'solvent16', 'solvent17', 'solvent18', 'solvent111'],
['reflectiveSpheres11', 'reflectiveSpheres12', 'reflectiveSpheres13', 'reflectiveSpheres14', 'reflectiveSpheres15', 'reflectiveSpheres16', 'reflectiveSpheres17', 'reflectiveSpheres18', 'reflectiveSpheres111'],
[proportion11, proportion12, proportion13, proportion14, proportion15, proportion16, proportion17, proportion18, proportion111]
]

function con(){
let i=0
materialArrayCells[0].forEach(el=>document.getElementById(el).textContent = (paint * lengthLine * materialArrayCells[3][i++] * widthLine * depthLine * transfer).toFixed(4).toString().replace('.',','))
i=0
materialArrayCells[1].forEach(el=>document.getElementById(el).textContent = (solvent * materialArrayCells[3][i++] * depthLine * widthLine * transfer).toFixed(4).toString().replace('.',','))
i=0
materialArrayCells[2].forEach(el=>document.getElementById(el).textContent = (reflectiveSpheres * materialArrayCells[3][i++] * widthLine * transfer).toFixed(4).toString().replace('.',','))
}
con()
function radioWidthLine(){
if (document.getElementById('flexRadioDefault2').checked === true){
  widthLine=0.15, 
  con()
}else{
  widthLine=0.10,
  con()}
}
*/



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






class ConsumptionNorms {
  constructor() { }
  calculate(type, width) {
    document.getElementById('paint').textContent = type * width
    document.getElementById('solvent').textContent = type * width
    document.getElementById('reflectiveSpheres').textContent = type * width
  }
}
const valueNorms = new ConsumptionNorms()



