//Selectors
let nameField = document.getElementById('nameInput')
let dateField = document.getElementById('dateInput')
let amountField = document.getElementById('amountInput')
let tableField = document.getElementById('inputTable')
let addExpense = document.getElementById('submit')

//Event Listeners
addExpense.addEventListener('click', function () {
    let enterExpense = tableField.insertRow(0)
    let cell1 = enterExpense.insertCell(0)
    let cell2 = enterExpense.insertCell(1)
    let cell3 = enterExpense.insertCell(2)
    cell1.innerHTML = nameField.value
    cell2.innerHTML = dateField.value
    cell3.innerHTML = amountField.value
    tableField.appendChild(enterExpense)
    nameField.value = ""
    dateField.value = ""
    amountField.value = ""

    enterExpense.addEventListener('dblclick', function () {
        tableField.removeChild(enterExpense)
    })
})