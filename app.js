function askName() {
    var name = prompt('What is your name?')
    return name
}

function greeting(a) {
    alert(`Hello ${a}!`)
}

function pick() {
    var unit = prompt("If you would like to convert Celcius to Farenheit press 'c' , or if you would like to convert Farenheit to Celcius press 'f'")
    return unit
}

function asktemp() {
    var temp = prompt('What is the temperature')
   return temp

}

function ctemp(x) {
   var ctof = (((x - 32) * 5) /9)
    return ctof
}

function ftemp(y) {
   var ftoc = ((y * 9) / 5 + 32)
    return ftoc
}

function work() {
    if (pick() == 'c') {
        alert(`The temperature is ${ftemp(asktemp())}º Farenheit`)
    } else if (pick() == 'f') {
        alert(`The temperature is ${ctemp(asktemp())}º Celcius`)
    }

    var q = prompt('Do you want to do another conversion? Press 1 for yes.')
    if (q == "1") {
        work()
    }
}

greeting(askName())
work()
