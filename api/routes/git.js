const { Router } = require('express');
const { getCreationDateByReleaseTag } = require('../controllers/GitController');

const router = Router();

router.get('/:tag', getCreationDateByReleaseTag)

module.exports = router;