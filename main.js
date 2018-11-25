/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoElementSize", function() { return videoElementSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageCharacteristics", function() { return pageCharacteristics; });
/* harmony import */ var _createSearchString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _resizing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



Object(_createSearchString__WEBPACK_IMPORTED_MODULE_0__["createSearchString"])();
Object(_createSearchString__WEBPACK_IMPORTED_MODULE_0__["createContainer"])();
var videoElementSize = 344;
var pageCharacteristics = {
  counterSlide: 0,
  previousSlide: 0,
  deltaSlide: 0,
  oldSize: Math.round(document.getElementsByClassName('container')[0].clientWidth / videoElementSize)
};
Object(_slider__WEBPACK_IMPORTED_MODULE_1__["addSliding"])(document.getElementsByClassName('container')[0]);
Object(_resizing__WEBPACK_IMPORTED_MODULE_2__["default"])(window);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSearchString", function() { return createSearchString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainer", function() { return createContainer; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function createNewVideoContainer() {
  if (document.getElementsByClassName('video-container')[0]) {
    document.getElementsByClassName('video-container')[0].remove();
  }

  var videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');
  document.getElementsByClassName('container')[0].appendChild(videoContainer);
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide = 0;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide = 1;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].previousSlide = 1;
}

function handlerForSubmit(event) {
  event.preventDefault();
  createNewVideoContainer();
  var searchedText = document.getElementsByClassName('input-text-search-string')[0].value;
  var url = "https://www.googleapis.com/youtube/v3/search?maxResults=15&part=snippet&key=AIzaSyAx5ynl8fhsONLGs1QfqcMb9Mz-75QhDrk&q=".concat(searchedText, "&type=video");
  Object(_HttpRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(url, true);
}

function createSearchString() {
  var formSearchString = document.createElement('form');
  var inputSubmitSearchString = document.createElement('input');
  var inputTextSearchString = document.createElement('input');
  var iconSearchString = document.createElement('span');
  iconSearchString.classList.add('icon-search-string', 'fas', 'fa-search');
  inputSubmitSearchString.classList.add('input-submit-search-string');
  inputTextSearchString.classList.add('input-text-search-string');
  inputTextSearchString.setAttribute('type', 'text');
  inputTextSearchString.setAttribute('placeholder', 'Awesome Javascript');
  inputSubmitSearchString.setAttribute('type', 'submit');
  formSearchString.append(inputSubmitSearchString, iconSearchString, inputTextSearchString);
  document.body.appendChild(formSearchString);
  formSearchString.addEventListener('submit', handlerForSubmit);
}
function createContainer() {
  var container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeRequest; });
/* harmony import */ var _createVideoElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _paging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function makeRequest(url, firstTime) {
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (response) {
    for (var i = 0; i < response.items.length; i += 1) {
      Object(_createVideoElement__WEBPACK_IMPORTED_MODULE_0__["default"])(response.items[i], i);
    }

    makeRequest.nextPage = response.nextPageToken;
    if (firstTime) Object(_paging__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createVideoElement; });
function createImage(infoAboutVideo) {
  var picture = document.createElement('img');
  picture.setAttribute('src', infoAboutVideo.snippet.thumbnails.medium.url);
  picture.classList.add('video-img');
  return picture;
}

function createTitle(infoAboutVideo) {
  var title = document.createElement('div');
  title.innerHTML = infoAboutVideo.snippet.title;
  title.classList.add('video-title');
  return title;
}

function createChanelName(infoAboutVideo) {
  var chanel = document.createElement('div');
  var chanelIcon = document.createElement('span');
  chanel.classList.add('video-info');
  chanelIcon.classList.add('fas', 'fa-male');
  chanel.innerHTML = infoAboutVideo.snippet.channelTitle;
  chanel.prepend(chanelIcon);
  return chanel;
}

function getDate(val) {
  var year = val.getFullYear();
  var month = val.getMonth() + 1;
  month = month < 10 ? "0".concat(month) : month;
  var day = val.getDate();
  day = day < 10 ? "0".concat(day) : day;
  return "".concat(year, "-").concat(month, "-").concat(day);
}

function createDateOfPublishing(infoAboutVideo) {
  var date = document.createElement('div');
  var dateIcon = document.createElement('span');
  date.classList.add('video-info');
  dateIcon.classList.add('fas', 'fa-calendar-alt');
  var publishedDate = new Date(infoAboutVideo.snippet.publishedAt);
  date.innerHTML = getDate(publishedDate);
  date.prepend(dateIcon);
  return date;
}

function createViewNumber(infoAboutVideo) {
  var idOfVideo = infoAboutVideo.id.videoId;
  var url = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAx5ynl8fhsONLGs1QfqcMb9Mz-75QhDrk&id=".concat(idOfVideo, "&part=statistics");
  var viewNumber = document.createElement('div');
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (response) {
    viewNumber.innerHTML = response.items[0].statistics.viewCount;
    var viewNumberIcon = document.createElement('span');
    viewNumber.classList.add('video-info');
    viewNumberIcon.classList.add('far', 'fa-eye');
    viewNumber.prepend(viewNumberIcon);
  });
  return viewNumber;
}

function createVideoDescription(infoAboutVideo) {
  var description = document.createElement('div');
  description.classList.add('video-description');
  description.innerHTML = infoAboutVideo.snippet.description;
  return description;
}

function createVideoElement(infoAboutVideo) {
  var image = createImage(infoAboutVideo);
  var title = createTitle(infoAboutVideo);
  var chanel = createChanelName(infoAboutVideo);
  var date = createDateOfPublishing(infoAboutVideo);
  var view = createViewNumber(infoAboutVideo);
  var description = createVideoDescription(infoAboutVideo);
  var div = document.createElement('div');
  div.classList.add('video-element');
  div.append(image, title, chanel, date, view, description);
  document.getElementsByClassName('video-container')[0].appendChild(div);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addPaging; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function createContainerForPageNumbers() {
  // remove old pageNumberContainer and create the new one
  if (document.getElementsByClassName('page-number-container')[0]) {
    document.getElementsByClassName('page-number-container')[0].remove();
  }

  var pageNumberContainer = document.createElement('div');
  pageNumberContainer.classList.add('page-number-container');
  document.body.appendChild(pageNumberContainer);
}

function createIconForPageNumbers(totalAmountOfPages, numberOfVisiblePageIcons) {
  // create first two (1 and 2) icons of pages
  var pageNumberContainer = document.getElementsByClassName('page-number-container')[0];
  var i = 0;

  while (totalAmountOfPages > i) {
    if (i >= numberOfVisiblePageIcons) {
      pageNumberContainer.classList.add('three-dots-after');
      break;
    }

    var pageNumberIcon = document.createElement('div');
    pageNumberIcon.classList.add('page-number-icon');
    pageNumberIcon.innerHTML = i + 1;
    pageNumberContainer.appendChild(pageNumberIcon);
    i += 1;
  }

  pageNumberContainer.firstElementChild.classList.add('current-page-icon');
}

function clickToRightButton() {
  if (document.getElementsByClassName('page-number-icon')[1].classList.contains('current-page-icon')) return;
  document.getElementsByClassName('page-number-icon')[0].classList.remove('current-page-icon');
  document.getElementsByClassName('page-number-icon')[1].classList.add('current-page-icon');
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].previousSlide = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide += 1;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide -= document.getElementsByClassName('container')[0].clientWidth;
  document.getElementsByClassName('video-container')[0].style.transform = "translateX(".concat(_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide, "px)");
}

function clickToLeftButton() {
  if (document.getElementsByClassName('page-number-icon')[0].classList.contains('current-page-icon')) return;
  document.getElementsByClassName('page-number-icon')[1].classList.remove('current-page-icon');
  document.getElementsByClassName('page-number-icon')[0].classList.add('current-page-icon');
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].previousSlide = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide -= 1;
  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide += document.getElementsByClassName('container')[0].clientWidth;
  document.getElementsByClassName('video-container')[0].style.transform = "translateX(".concat(_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide, "px)");
}

function addPaging() {
  createContainerForPageNumbers();
  var totalNumberOfLoadedPages = document.getElementsByClassName('video-container')[0].childNodes.length / _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].oldSize;
  createIconForPageNumbers(totalNumberOfLoadedPages, 2);
  document.getElementsByClassName('page-number-icon')[0].addEventListener('click', clickToLeftButton);
  document.getElementsByClassName('page-number-icon')[1].addEventListener('click', clickToRightButton);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPageNumber", function() { return addPageNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSliding", function() { return addSliding; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



function addPageNumber(counterSlide, previousSlide) {
  var pageNumberContainer = document.getElementsByClassName('page-number-container')[0];

  if (counterSlide > previousSlide) {
    // add "1..." before page container
    if (previousSlide === 2) {
      pageNumberContainer.classList.add('three-dots-and-1-after');
    }

    pageNumberContainer.childNodes[0].innerHTML = previousSlide;
    pageNumberContainer.childNodes[1].innerHTML = counterSlide;

    if (pageNumberContainer.childNodes[0].classList.contains('current-page-icon')) {
      pageNumberContainer.childNodes[0].classList.toggle('current-page-icon');
      pageNumberContainer.childNodes[1].classList.toggle('current-page-icon');
    }
  } else {
    // remove "1..." before page container
    if (counterSlide === 1) {
      pageNumberContainer.classList.remove('three-dots-and-1-after');
    }

    pageNumberContainer.childNodes[0].innerHTML = counterSlide;
    pageNumberContainer.childNodes[1].innerHTML = previousSlide;

    if (pageNumberContainer.childNodes[1].classList.contains('current-page-icon')) {
      pageNumberContainer.childNodes[0].classList.toggle('current-page-icon');
      pageNumberContainer.childNodes[1].classList.toggle('current-page-icon');
    }
  }
}

function loadNextChank() {
  var maxCurrVideoElem = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide * _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].oldSize;
  var numOfLoadedVideo = document.getElementsByClassName('video-container')[0].childNodes.length;
  var keyVideoElem = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].oldSize * 2;

  if (numOfLoadedVideo - maxCurrVideoElem <= keyVideoElem) {
    var searchedText = document.getElementsByClassName('input-text-search-string')[0].value;
    var url = "https://www.googleapis.com/youtube/v3/search?maxResults=15&part=snippet&key=AIzaSyAx5ynl8fhsONLGs1QfqcMb9Mz-75QhDrk&q=".concat(searchedText, "&type=video&pageToken=").concat(_HttpRequest__WEBPACK_IMPORTED_MODULE_1__["default"].nextPage);
    Object(_HttpRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(url, false);
  }
}

function handlerForMouseDown(evnt) {
  var container = document.getElementsByClassName('container')[0];
  var videoContainer = document.getElementsByClassName('video-container')[0];
  var slidingStage = 1; // stage of DragAndDrop event: 1 - MouseDown, 2 - MouseMove, 3 - MouseUp

  var startClientX = evnt.clientX;

  function handlerForMouseMove(event) {
    event.preventDefault();
    var delta = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide + event.clientX - startClientX;
    if (delta !== 0 && slidingStage === 1) slidingStage = 2; // move to stage MouseMove

    if (slidingStage === 2) {
      videoContainer.style.transform = "translateX(".concat(delta, "px)");
    }
  }

  container.addEventListener('mousemove', handlerForMouseMove);
  container.addEventListener('touchmove', handlerForMouseMove);

  function handlerForMouseUp(event) {
    if (slidingStage === 2) {
      _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].previousSlide = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide;

      if (event.clientX - startClientX > 0) {
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide -= 1;
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide += document.getElementsByClassName('container')[0].clientWidth;
      } else {
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide += 1;
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide += -document.getElementsByClassName('container')[0].clientWidth;
      }

      if (_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide > 0) {
        // try to move on the 0 page
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide = 0;
        _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide = 1;
      } else {
        loadNextChank();
        addPageNumber(_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide, _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].previousSlide);
      }

      videoContainer.style.transform = "translateX(".concat(_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].deltaSlide, "px)");
      slidingStage = 0;
    }

    container.removeEventListener('mousemove', handlerForMouseMove);
    container.removeEventListener('touchmove', handlerForMouseMove);
    videoContainer.removeEventListener('mousemove', handlerForMouseMove);
    videoContainer.removeEventListener('touchmove', handlerForMouseMove);
  }

  container.addEventListener('touchend', handlerForMouseUp);
  container.addEventListener('mouseup', handlerForMouseUp);
}

function addSliding(container) {
  container.addEventListener('mousedown', handlerForMouseDown);
  container.addEventListener('touchstart', handlerForMouseDown);
} // 1 2 3 4(3)
// 1 2(*) 3 4 5 6 7 8(2)
// 1 2 3 4 5 6(*) 7 8 9 10 11 12(1)
// 1 2 3 4 5 6 7 8 9 10(*) 11 12 13 14 15
// 1 2 3 4 5 6 7 8 9 10 11 12 13(*) 14 15 16 17 18 19(3) 
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17(*) 18 19(3) 
//2 6 10 13 17 21...

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addResizing; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function resize() {
  var VIDEOELEMENTSIZE = 344;
  var pageNumberContainer = document.getElementsByClassName('page-number-container')[0];
  var size = Math.floor(document.getElementsByClassName('container')[0].clientWidth / VIDEOELEMENTSIZE); // calculate the number of page for resized page

  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide = Math.ceil(((_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide - 1) * _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].oldSize + 1) / size); // if active slide is the first slide, then do nothing

  if (_index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide !== 1) {
    pageNumberContainer.childNodes[0].innerHTML = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide - 1;
    pageNumberContainer.childNodes[1].innerHTML = _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].counterSlide;

    if (pageNumberContainer.childNodes[0].classList.contains('current-page-icon')) {
      pageNumberContainer.childNodes[0].classList.toggle('current-page-icon');
      pageNumberContainer.childNodes[1].classList.toggle('current-page-icon');
    }
  }

  _index__WEBPACK_IMPORTED_MODULE_0__["pageCharacteristics"].oldSize = size;
}

function addResizing(window) {
  window.addEventListener('resize', resize);
}

/***/ })
/******/ ]);