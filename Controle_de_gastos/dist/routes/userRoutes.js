"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _userControllerjs = require('../controllers/userController.js'); var _userControllerjs2 = _interopRequireDefault(_userControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express2.default)();

router.get('/', _userControllerjs2.default.index);
router.get('/:id', _loginRequiredjs2.default, _userControllerjs2.default.show);

router.post('/', _userControllerjs2.default.store);
router.put('/', _loginRequiredjs2.default, _userControllerjs2.default.update);
router.delete('/', _loginRequiredjs2.default, _userControllerjs2.default.deleteOne);

exports.userRoutes = router;