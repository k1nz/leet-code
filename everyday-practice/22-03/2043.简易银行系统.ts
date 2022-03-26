class Bank {
    private bank: number[]
    constructor(balance: number[]) {
        this.bank = balance
    }

    transfer(account1: number, account2: number, money: number): boolean {
        return !(!this.hasAccount(account1) || !this.hasAccount(account2) || !this.withdraw(account1, money) || !this.deposit(account2, money));
    }

    deposit(account: number, money: number): boolean {
        if (!this.hasAccount(account)) return false
        this.bank[account - 1] += money
        return true
    }

    withdraw(account: number, money: number): boolean {
        if (this.bank[account - 1] < money || !this.hasAccount(account)) return false
        this.bank[account - 1] -= money
        return true
    }

    hasAccount(account: number): boolean {
        return account >= 1 && this.bank.length >= account
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */