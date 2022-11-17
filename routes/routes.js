const express = require('express');
const controller = require('./../controllers/controller');

const router = express.Router();

// router.param('id', tourController.checkID);


router
  .route('/')
  .get(controller.getAll)
  .post(controller.create);

router
  .route('/:id')
  .get(tourController.getOne)
  .patch(tourController.update)
  .delete(tourController.delete);

module.exports = router;
