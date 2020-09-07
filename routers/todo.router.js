const { Router } = require('express');
const todoController = require('../controllers/todo.controller');
const authController = require('../controllers/auth.controller');
const router = Router();

router.route('/users/:userId/todos')
    .post(authController.authenticate, todoController.createTodo)
    .patch(authController.authenticate, todoController.completeAllTodos)
    .delete(authController.authenticate, todoController.deleteCompletedTodos);

router.route('/users/:userId/todos/:todoId')
    .patch(authController.authenticate, todoController.toggleTodo)
    .delete(authController.authenticate, todoController.deleteTodo);

module.exports = router;
