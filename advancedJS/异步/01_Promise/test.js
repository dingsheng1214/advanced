const Promise1 = require('./index.js')

describe('Promise1', () => {
    it('resolve', () => {
        new Promise1((resolve, reject) => {
            resolve('20')
        }).then(data => {
            expect(data).toBe('20')
        })
    })
    it('reject', () => {
        new Promise1((resolve, reject) => {
            reject('20')
        }).then(null, err => {
            expect(err).toBe('20')
        })
    })

    it('constructor error', (done) => {
        let p = new Promise1((resolve, reject) => {
            // 抛出异常
            setimeout(() => {
                resolve('20')
            }, 20)
        })
        p.then(null, err => {
            expect(err).toBeInstanceOf(Error)
            done()
        })
    })

    it('async resolve', (done) => {
        new Promise1((resolve, reject) => {
            setTimeout(() => {
                resolve('20')
            }, 20);
        }).then(data => {
            expect(data).toBe('20')
            done()
        })
    })
    it('async reject', (done) => {
        new Promise1((resolve, reject) => {
            setTimeout(() => {
                reject('20')
            }, 20);
        }).then(null, err => {
            expect(err).toBe('20')
            done()
        })
    })

    // 多个then
    it('multiple then', (done) => {
        expect.assertions(2)
        const p = new Promise1((resolve, reject) => {
            setTimeout(() => {
                resolve('20')
            })
        })

        p.then(data => {
            expect(data).toBe('20')
        })

        p.then(data => {
            expect(data).toBe('20')
            done()
        })
    })

    // then链式调用
    it('chain then', async () => {
        let p = new Promise1((resolve, reject) => {
            resolve(20)
        })

        // todo
    })

})