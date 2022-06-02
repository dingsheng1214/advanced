/**
 * resolve
 * reject
 * 
 * status
 *   pending
 *   fulfilled
 *   rejected
 * 
 * text
 * err
 * 
 * then: （onfulfilled, onrejected) => promise
 */

function Promise1(fn) {
    this.status = 'pending'
    this.text = ''
    this.err = ''

    this.onfulfilled = []
    this.onrejected = []

    const resolve = (text) => {
        setTimeout(() => {
            this.text = text
            this.status = 'fulfilled'
            this.onfulfilled.forEach(fn => fn(text))
        })
    }

    const reject = err => {
        setTimeout(() => {
            this.err = err
            this.status = 'rejected'
            this.onrejected.forEach(fn => fn(err))
        })
    }


    try {
        fn(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

Promise1.prototype.then = function (onfulfilled, onrejected) {
    if (this.status === 'fulfilled' && onfulfilled) {
        return promise2 = new Promise1((resolve, reject) => {
            setTimeout(() => {
                try {
                    const result = onfulfilled(this.text)
                    resolve(result)
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    if (this.status === 'rejected' && onrejected) {
        onrejected(this.err)
    }

    if (this.status === 'pending') {
        this.onfulfilled.push(onfulfilled)
        this.onrejected.push(onrejected)
    }
}

Promise1.resolve = function (text) {
    if (text instanceof Promise1) {
        return text
    } else {
        return new Promise1(resolve => {
            resolve(text)
        })
    }
}

module.exports = Promise1