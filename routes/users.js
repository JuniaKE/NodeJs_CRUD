const express = require('express');

const router = express.Router();
const users = [{
        id: 1,
        name: 'Brian',
    },
    {
        id: 2,
        name: 'James',
    },
    {
        id: 3,
        name: 'Duke',
    },
    {
        id: 1,
        name: 'Daisy',
    },
];
router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == parseInt(req.params.id));
    if (!user) res.status(404).send(`The user with id ${req.params.id} was not found`);

    res.send(user);
});

module.exports = router;