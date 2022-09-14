import express from 'express';
import questionController from '../controllers/questionController.js';

const router = express.Router();

router.route('/questions')
  .get(controller.getAllQuestions)
  .post(controller.ceateQuestion);

router.route('/questions/:id')
  .get(controller.getQuestionById)
  .put(controller.updateQuestion)
  .delete(controller.deleteQuestion);

router.get('/questions', (req, res) => {
  res.send()
});
export default router;
