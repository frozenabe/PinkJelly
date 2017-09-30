const router = require('express').Router();
const runDarknet = require('./runDarknet');

router.post('/', (req, res) => {
  const userEmail = req.body.userEmail || 'test%40test.com' // @ -> %40

  runDarknet(userEmail)
    .then(data => res.status(200).send(data))
    .catch(err => console.log(err));
});

module.exports = router;
