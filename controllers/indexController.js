module.exports = {
    index : (req, res) => res.render('index', { title: 'Express' }),
    search : (req, res) => res.send('Buscador en construccion')
}