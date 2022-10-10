class Bank{
     constructor()
     {
        this.amount=0
     }

     addMoney(money)
     {
        this.amount+=money
     }

     withdrawMoney(money)
     {
        if(this.amount<money)
        {
            alert('You have insufficient balance')
            return
        }
        this.amount-=money
     }
}

const myBankAccount = new Bank()
const deposit = document.getElementById('depositButton')
const withdraw = document.getElementById('withdrawButton')
const inp = document.getElementById('input')
const output = document.getElementById('balance')

const showOutput = () => output.innerHTML = `Your balance is ${myBankAccount.amount}`

showOutput()

deposit.onclick = () => {
    const money = Number(inp.value)
    myBankAccount.addMoney(money)
    showOutput()
}

withdraw.onclick = () => {
    const money = Number(inp.value)
    myBankAccount.withdrawMoney(money)
    showOutput()
}