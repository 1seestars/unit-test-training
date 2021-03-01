class Lodash {
    static compact(array){
        return array.filter(i => !!i)
    }
    static groupBy(array = [], prop){
        return array.reduce((acc, i) => {
            if (acc[prop(i)]) {
                acc[prop(i)].push(i)
            } else acc[prop(i)] = [i]

            return acc
        }, {})
    }
}

module.exports = Lodash