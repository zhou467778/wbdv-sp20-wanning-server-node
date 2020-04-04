const questions  = require('./questions');

const findAllQuestions = () => questions;

const findQuestionById = (qid) =>
    questions.find(q => q._id === qid);

const findQuestionsForQuiz = (qzid) =>
    questions.filter(q => q.quizId === qzid);

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}


