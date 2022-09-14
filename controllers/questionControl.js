import Question from '../models/Question.js';

const getAllQuestions = (req, res) => {
  Question.find((err, questions) => {
  });
};
const getQuestionById = (req, res) => {
  res.send('no lo hice todavia' + req.method);
};
const createQuestion = (req, res) => {
  res.send('no lo hice todavia' + req.method);
};
const updateQuestion = (req, res) => {
  res.send('no lo hice todavia' + req.method);
};
const deleteQuestion = (req, res) => {
  
  res.send('no lo hice todavia' + req.method);
};

const controller = {
  getAllQuestions,
  createQuestion,
  getQuestionById,
  updateQuestion,
  deleteQuestion
};

export default controller;
