/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Container = __webpack_require__(3);

	var _Container2 = _interopRequireDefault(_Container);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.app = _reactDom2.default.render(_react2.default.createElement(_Container2.default, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _constants = __webpack_require__(4);

	var _Question = __webpack_require__(5);

	var _Question2 = _interopRequireDefault(_Question);

	var _Timer = __webpack_require__(13);

	var _Timer2 = _interopRequireDefault(_Timer);

	var _FinishScreen = __webpack_require__(14);

	var _FinishScreen2 = _interopRequireDefault(_FinishScreen);

	var _WelcomeScreen = __webpack_require__(15);

	var _WelcomeScreen2 = _interopRequireDefault(_WelcomeScreen);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_Component) {
		_inherits(Container, _Component);

		function Container(props) {
			_classCallCheck(this, Container);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, props));

			_this.state = {
				allowRootContainerHeight: false,
				timeRemaining: true
			};
			return _this;
		}

		_createClass(Container, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				_reactDom2.default.findDOMNode(this).style.minHeight = viewportHeight + "px";

				window.allowRootContainerHeight = function () {
					_this2.allowRootContainerHeight();
				};

				window.showFinishScreen = function () {
					_this2.showFinishScreen();
				};
			}
		}, {
			key: 'showFinishScreen',
			value: function showFinishScreen() {
				this.setState({
					timeRemaining: false
				});
			}
		}, {
			key: 'allowRootContainerHeight',
			value: function allowRootContainerHeight() {
				this.setState({
					allowRootContainerHeight: true
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _classNames;

				var componentClass = (0, _classnames2.default)(_styles2.default.Container, (_classNames = {}, _defineProperty(_classNames, '' + _styles2.default.AsMuchHeightAsNeeded, this.state.allowRootContainerHeight), _defineProperty(_classNames, '' + _styles2.default.ShowingFinishScreen, !this.state.timeRemaining), _classNames));

				return _react2.default.createElement(
					'div',
					{ className: componentClass },
					_react2.default.createElement(_WelcomeScreen2.default, null),
					_react2.default.createElement(_Question2.default, null),
					_react2.default.createElement(_Timer2.default, null),
					_react2.default.createElement(_FinishScreen2.default, null)
				);
			}
		}]);

		return Container;
	}(_react.Component);

	exports.default = Container;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GAME_DATA = exports.GAME_DATA = {
	  correct: 0,
	  incorrect: 0,
	  score: 0,
	  incorrect_questions: []
	};

	var ANSWERS = exports.ANSWERS = {
	  "Alabama": "Montgomery",
	  "Alaska": "Juneau",
	  "Arizona": "Phoenix",
	  "Arkansas": "Little Rock",
	  "California": "Sacramento",
	  "Colorado": "Denver",
	  "Connecticut": "Hartford",
	  "Delaware": "Dover",
	  "Washington D.C.": "District Of Columbia",
	  "Florida": "Tallahassee",
	  "Georgia": "Atlanta",
	  "Hawaii": "Honolulu",
	  "Idaho": "Idaho",
	  "Illinois": "Boise",
	  "Indiana": "Indianapolis",
	  "Iowa": "Des Moines",
	  "Kansas": "Topeka",
	  "Kentucky": "Frankfort",
	  "Louisiana": "Baton Rouge",
	  "Maine": "Augusta",
	  "Maryland": "Annapolis",
	  "Massachusetts": "Boston",
	  "Michigan": "Lansing",
	  "Minnesota": "Saint Paul",
	  "Mississippi": "Jackson",
	  "Missouri": "Jefferson City",
	  "Montana": "Helena",
	  "Nebraska": "Lincoln",
	  "Nevada": "Carson City",
	  "New Hampshire": "Concord",
	  "New Jersey": "Trenton",
	  "New Mexico": "Santa Fe",
	  "New York": "Albany",
	  "North Carolina": "Raleigh",
	  "North Dakota": "Bismarck",
	  "Ohio": "Columbus",
	  "Oklahoma": "Oklahoma City",
	  "Oregon": "Salem",
	  "Pennsylvania": "Harrisburg",
	  "Puerto Rico": "San Juan",
	  "Rhode Island": "Providence",
	  "South Carolina": "Columbia",
	  "South Dakota": "Pierre",
	  "Tennessee": "Nashville",
	  "Texas": "Austin",
	  "Utah": "Salt Lake City",
	  "Vermont": "Montpelier",
	  "Virginia": "Richmond",
	  "Washington": "Olympia",
	  "West Virginia": "Charleston",
	  "Wisconsin": "Madison",
	  "Wyoming": "Cheyenne"
	};

	var ARRAY = exports.ARRAY = [];

	var SHOWNQUESTIONS = exports.SHOWNQUESTIONS = [];

	(function () {
	  var i = 0;
	  for (var key in ANSWERS) {
	    ARRAY[i] = [key, ANSWERS[key]];
	    i++;
	  }
	})();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constants = __webpack_require__(4);

	var _functions = __webpack_require__(7);

	var _Option = __webpack_require__(8);

	var _Option2 = _interopRequireDefault(_Option);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Question = function (_Component) {
	    _inherits(Question, _Component);

	    function Question(props) {
	        _classCallCheck(this, Question);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Question).call(this, props));

	        _this.state = {
	            state: null,
	            options: {}
	        };
	        return _this;
	    }

	    _createClass(Question, [{
	        key: 'shuffle',
	        value: function shuffle(a) {
	            for (var i = a.length; i; i -= 1) {
	                var j = Math.floor(Math.random() * i);
	                var x = a[i - 1];
	                a[i - 1] = a[j];
	                a[j] = x;
	            }
	            return a;
	        }
	    }, {
	        key: 'generateOptions',
	        value: function generateOptions() {

	            var rand = (0, _functions.getRandomIndex)();

	            if (_constants.SHOWNQUESTIONS.length < _constants.ARRAY.length) {

	                while (_constants.SHOWNQUESTIONS.indexOf(_constants.ARRAY[rand][0]) > -1) {
	                    rand = (0, _functions.getRandomIndex)();
	                }

	                // Grab the correct option to the state, to make sure it's in the list.
	                var correctOption = [_constants.ARRAY[rand]];

	                // Make a copy of the array so we can do stuff to it.
	                var cleanedArray = _constants.ARRAY.slice();

	                // Remove the correct option as a possible other option.
	                cleanedArray.splice(rand, 1);

	                // Set the other options by shuffling our array copy and getting three options.
	                var otherOptions = this.shuffle(cleanedArray).slice(0, 3);

	                // Add the correct option we saved earlier to the list to get our final set of options.
	                var options = this.shuffle(correctOption.concat(otherOptions));

	                this.setState({ state: _constants.ARRAY[rand][0], city: _constants.ARRAY[rand][1], options: options });
	            } else {
	                window.showFinishScreen();
	            }
	        }
	    }, {
	        key: 'onOptionClick',
	        value: function onOptionClick(context) {
	            context.generateOptions();
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.generateOptions();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.addEventListener('keydown', function (event) {
	                switch (event.which) {
	                    case 37:
	                        document.querySelectorAll("[data-index='3']")[0].click();
	                        break;
	                    case 38:
	                        document.querySelectorAll("[data-index='0']")[0].click();
	                        break;
	                    case 39:
	                        document.querySelectorAll("[data-index='1']")[0].click();
	                        break;
	                    case 40:
	                        document.querySelectorAll("[data-index='2']")[0].click();
	                        break;
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)(_styles2.default.Question, this.props.className) },
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    this.state.state
	                ),
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    this.state.options.map(function (item, index) {
	                        return _react2.default.createElement(
	                            _Option2.default,
	                            {
	                                index: index,
	                                thisThing: this,
	                                onOptionClick: this.onOptionClick,
	                                questionValue: this.state.state,
	                                optionValue: item[0],
	                                optionCorrectAnswer: this.state.city,
	                                key: item[1] },
	                            item[1]
	                        );
	                    }.bind(this))
	                )
	            );
	        }
	    }]);

	    return Question;
	}(_react.Component);

	exports.default = Question;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRandomIndex = getRandomIndex;
	exports.hasClass = hasClass;

	var _constants = __webpack_require__(4);

	function getRandomIndex() {
	  return Math.floor(Math.random() * _constants.ARRAY.length);
	}

	function hasClass(element, myClass) {
	  return (' ' + element.className + ' ').indexOf(' ' + myClass + ' ') > -1;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _constants = __webpack_require__(4);

	var _classnames2 = __webpack_require__(6);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Option = function (_Component) {
	  _inherits(Option, _Component);

	  function Option(props) {
	    _classCallCheck(this, Option);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Option).call(this, props));

	    _this.handleSelection = _this.handleSelection.bind(_this);

	    _this.state = {
	      clickedCorrect: false,
	      clickedIncorrect: false
	    };
	    return _this;
	  }

	  _createClass(Option, [{
	    key: 'handleSelection',
	    value: function handleSelection(e) {
	      var _this2 = this;

	      if (this.props.optionValue === this.props.questionValue) {

	        this.setState({
	          clickedCorrect: true
	        });

	        _constants.GAME_DATA.correct++;
	        window.updateTimer();
	      } else {

	        this.setState({
	          clickedIncorrect: true
	        });

	        _constants.GAME_DATA.incorrect++;

	        _constants.GAME_DATA.incorrect_questions.push({
	          index: _constants.GAME_DATA.incorrect_questions.length,
	          state: this.props.questionValue,
	          yourAnswer: this.props.children,
	          correctAnswer: this.props.optionCorrectAnswer
	        });
	      }

	      // push to SHOWNQUESTIONS array so we don't show a question that's already been shown.
	      _constants.SHOWNQUESTIONS.push(this.props.questionValue);

	      window.updateScore();

	      setTimeout(function () {
	        _this2.props.onOptionClick(_this2.props.thisThing);
	      }, 150);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var componentClass = (0, _classnames3.default)(_styles2.default.Option, (_classnames = {}, _defineProperty(_classnames, '' + _styles2.default.clickedCorrect, this.state.clickedCorrect), _defineProperty(_classnames, '' + _styles2.default.clickedIncorrect, this.state.clickedIncorrect), _classnames));
	      return _react2.default.createElement(
	        'li',
	        { 'data-index': this.props.index, className: componentClass, onClick: this.handleSelection },
	        this.props.children
	      );
	    }
	  }]);

	  return Option;
	}(_react.Component);

	exports.default = Option;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?insertAt=top&modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js?insertAt=top&modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]!./../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct display in IE 9-.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Restore the font weight unset by the previous rule.\n */\noptgroup {\n  font-weight: bold; }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n.Container-rn67 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n.AsMuchHeightAsNeeded-1ZgH {\n  position: relative; }\n\n.ShowingFinishScreen-3P5p .FinishScreen-2G5K {\n  opacity: 1;\n  z-index: 1; }\n\n.ShowingFinishScreen-3P5p .Timer-2-GR,\n.ShowingFinishScreen-3P5p .Question-2vqi {\n  opacity: 0; }\n\n.FinishScreen-2G5K {\n  transition: opacity .25s ease-in-out;\n  background: #232830;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  z-index: -1; }\n\n.WelcomeScreen-2P2R {\n  transition: all .25s ease-in-out;\n  background: #232830;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n  .WelcomeScreen-2P2R.isInvisible-3y0S {\n    opacity: 0;\n    z-index: -1; }\n  .WelcomeScreen-2P2R .InnerContainer-2k9q {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n.WelcomeScreen-header-rAYh {\n  margin: 0; }\n\n.WelcomeScreen-instructions-22x- {\n  display: block;\n  margin-bottom: 2rem; }\n\n.WelcomeScreen-button-30AN {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  color: #ffffff;\n  padding: 1rem;\n  left: 50%;\n  width: auto;\n  min-width: 200px;\n  border-radius: 5px;\n  border: 3px solid #ffffff;\n  transform: translateX(-50%);\n  transition: all .15s ease-in-out;\n  transform: none;\n  left: auto; }\n  .WelcomeScreen-button-30AN:hover {\n    color: #232830;\n    background: #ffffff;\n    max-width: calc(100% + 10px); }\n\n.Question-2vqi {\n  transition: all .25s ease-in-out;\n  text-align: center;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  .Question-2vqi h2 {\n    margin-bottom: 5rem; }\n  .Question-2vqi ul {\n    flex-direction: column;\n    list-style: none;\n    padding: 0;\n    display: flex; }\n\n.Timer-2-GR {\n  display: inline-block;\n  position: absolute;\n  bottom: 2rem;\n  left: 2rem;\n  width: auto; }\n\n.Option-2yGX {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  color: #ffffff;\n  padding: 1rem;\n  left: 50%;\n  width: auto;\n  min-width: 200px;\n  border-radius: 5px;\n  border: 3px solid #ffffff;\n  transform: translateX(-50%);\n  transition: all .15s ease-in-out;\n  position: relative; }\n  .Option-2yGX:hover {\n    color: #232830;\n    background: #ffffff;\n    max-width: calc(100% + 10px); }\n  .Option-2yGX:nth-child(1) {\n    transform: translate(-50%, -50%); }\n  .Option-2yGX:nth-child(2) {\n    transform: translate(7%, 0); }\n  .Option-2yGX:nth-child(3) {\n    transform: translate(-50%, 50%); }\n  .Option-2yGX:nth-child(4) {\n    transform: translate(-107%, -200%); }\n  .Option-2yGX.clickedCorrect-1MHy {\n    background: #22a47b;\n    color: #ffffff; }\n  .Option-2yGX.clickedIncorrect-2Z-8 {\n    background: #dc2e3c;\n    color: #ffffff; }\n\nhtml {\n  font-size: 62.5%;\n  background: #232830; }\n\n* {\n  font-family: 'Raleway', sans-serif;\n  font-weight: 300;\n  font-size: 3rem;\n  box-sizing: border-box;\n  color: #ffffff; }\n\nh1, h2, h3, h4, h5 {\n  font-family: 'Oswald', sans-serif;\n  font-weight: normal;\n  text-transform: uppercase; }\n\nbody {\n  font-size: 1.6rem;\n  -webkit-font-smoothing: subpixel-antialiased;\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n  body > div {\n    flex: 1; }\n\ntable {\n  border-collapse: collapse; }\n  table th {\n    width: 33.333%; }\n  table th,\n  table td {\n    border: 3px solid rgba(255, 255, 255, 0.5);\n    padding: .75rem 3rem; }\n\n.InnerContainer-2k9q {\n  background: none;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  padding: 0 2rem;\n  max-width: 940px; }\n", ""]);

	// exports
	exports.locals = {
		"Container": "Container-rn67",
		"AsMuchHeightAsNeeded": "AsMuchHeightAsNeeded-1ZgH",
		"ShowingFinishScreen": "ShowingFinishScreen-3P5p",
		"FinishScreen": "FinishScreen-2G5K",
		"Timer": "Timer-2-GR",
		"Question": "Question-2vqi",
		"WelcomeScreen": "WelcomeScreen-2P2R",
		"isInvisible": "isInvisible-3y0S",
		"InnerContainer": "InnerContainer-2k9q",
		"WelcomeScreen-header": "WelcomeScreen-header-rAYh",
		"WelcomeScreen-instructions": "WelcomeScreen-instructions-22x-",
		"WelcomeScreen-button": "WelcomeScreen-button-30AN",
		"Option": "Option-2yGX",
		"clickedCorrect": "clickedCorrect-1MHy",
		"clickedIncorrect": "clickedIncorrect-2Z-8"
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _functions = __webpack_require__(7);

	var _constants = __webpack_require__(4);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Timer = function (_Component) {
	  _inherits(Timer, _Component);

	  function Timer(props) {
	    _classCallCheck(this, Timer);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this, props));

	    _this2.state = {
	      count: 30000 // the initial amount of time a player starts with
	    };
	    return _this2;
	  }

	  _createClass(Timer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.thisTimer = this;
	      window.updateTimer = this.updateTimer;
	      window.startTimer = this.startTimer;
	    }
	  }, {
	    key: 'startTimer',
	    value: function startTimer() {
	      var _this = window.thisTimer;
	      _this.timeInterval = setInterval(function () {
	        _this.countdown();
	      }, 1000);
	    }
	  }, {
	    key: 'updateTimer',
	    value: function updateTimer() {
	      thisTimer.state.count = thisTimer.state.count + 1000;
	    }
	  }, {
	    key: 'countdown',
	    value: function countdown() {
	      this.setState({ count: this.state.count - 1000 });

	      if (this.state.count === 0) {
	        clearInterval(this.timeInterval);
	        window.showFinishScreen();

	        setTimeout(function () {
	          window.allowRootContainerHeight();
	        }, 250);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(_styles2.default.Timer, this.props.className) },
	        _react2.default.createElement(
	          'span',
	          null,
	          'Time Remaining: '
	        ),
	        _react2.default.createElement(
	          'span',
	          { id: 'seconds' },
	          this.state.count / 1000
	        )
	      );
	    }
	  }]);

	  return Timer;
	}(_react.Component);

	exports.default = Timer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _constants = __webpack_require__(4);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FinishScreen = function (_Component) {
	  _inherits(FinishScreen, _Component);

	  function FinishScreen(props) {
	    _classCallCheck(this, FinishScreen);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FinishScreen).call(this, props));

	    _this.state = {
	      timeRemaining: true
	    };
	    return _this;
	  }

	  _createClass(FinishScreen, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.updateScore = function () {
	        _this2.forceUpdate();
	      };
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var $container = document.querySelector('.' + _styles2.default.Container + '.' + _styles2.default.AsMuchHeightAsNeeded);

	      if ($container) {
	        var containerHeight = $container.scrollHeight;
	        console.log(containerHeight);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var totalQuestions = _constants.GAME_DATA.correct + _constants.GAME_DATA.incorrect;

	      return _react2.default.createElement(
	        'div',
	        { className: _styles2.default.FinishScreen },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_styles2.default.InnerContainer) },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Great job!'
	          ),
	          _react2.default.createElement(
	            'span',
	            null,
	            'You answered ',
	            _constants.GAME_DATA.correct,
	            ' out of ',
	            totalQuestions,
	            ' correctly.'
	          ),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Final Score: ',
	            _constants.GAME_DATA.correct
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Incorrect Answers'
	          ),
	          _react2.default.createElement(
	            'table',
	            { className: _styles2.default.ResultsTable },
	            _react2.default.createElement(
	              'thead',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'State'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Your Answer'
	                ),
	                _react2.default.createElement(
	                  'th',
	                  null,
	                  'Correct Answer'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _constants.GAME_DATA.incorrect_questions.map(function (item) {
	                return _react2.default.createElement(
	                  'tr',
	                  { key: item.index },
	                  _react2.default.createElement(
	                    'td',
	                    null,
	                    item.state
	                  ),
	                  _react2.default.createElement(
	                    'td',
	                    null,
	                    item.yourAnswer
	                  ),
	                  _react2.default.createElement(
	                    'td',
	                    null,
	                    item.correctAnswer
	                  )
	                );
	              })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return FinishScreen;
	}(_react.Component);

	exports.default = FinishScreen;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _config = __webpack_require__(16);

	var _config2 = _interopRequireDefault(_config);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WelcomeScreen = function (_Component) {
	  _inherits(WelcomeScreen, _Component);

	  function WelcomeScreen(props) {
	    _classCallCheck(this, WelcomeScreen);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WelcomeScreen).call(this, props));

	    _this.state = {
	      isVisible: true
	    };

	    _this.startGame = _this.startGame.bind(_this);
	    return _this;
	  }

	  _createClass(WelcomeScreen, [{
	    key: 'startGame',
	    value: function startGame() {

	      this.setState({
	        isVisible: false
	      });

	      // Actually start the timer only after the opacity transition has finished.
	      setTimeout(function () {
	        window.startTimer();
	      }, 250);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var componentClass = (0, _classnames2.default)(_styles2.default.WelcomeScreen, _defineProperty({}, '' + _styles2.default.isInvisible, !this.state.isVisible));

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(componentClass) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)(_styles2.default.InnerContainer) },
	          _react2.default.createElement(
	            'h1',
	            { className: (0, _classnames2.default)(_styles2.default['WelcomeScreen-header']) },
	            _config2.default.welcome_header
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: (0, _classnames2.default)(_styles2.default['WelcomeScreen-instructions']) },
	            _config2.default.instructions
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: (0, _classnames2.default)(_styles2.default['WelcomeScreen-button']), onClick: this.startGame },
	            'Start'
	          )
	        )
	      );
	    }
	  }]);

	  return WelcomeScreen;
	}(_react.Component);

	exports.default = WelcomeScreen;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
		"welcome_header": "Welcome to the State Game.",
		"instructions": "Choose the correct capital for each state that's shown. For each correct answer, you'll get 5 points and additional second on the clock. For each incorrect answer, you'll lose 2 points. If you make it through all the questions before time expires, you'll recieve an additional 5 points for each second remaining."
	};

/***/ }
/******/ ]);