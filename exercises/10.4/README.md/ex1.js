const functions = {
  soma: (a, b) => a + b,
  createUser: () => {
    const obj1 = {
      name : 'Lucas'
    }
    obj1['lastName'] = 'Werner'
    return obj1
  }
 
}

module.exports = functions