const { loadData, saveData } = require("../../data")

module.exports = (req, res) => {
    const { id } = req.params
    const products = loadData()
    const productFilter = products.filter(p => p.id !== +id)
    
    saveData(productFilter)
    res.redirect('/')
}