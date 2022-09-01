const router = require('express').Router();
const { notes } = require ('/Code/Note_taker/Develop/db/db.json');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  module.exports = router;