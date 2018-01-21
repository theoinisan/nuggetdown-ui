(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('moment'), require('styled-components'), require('react-youtube')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'moment', 'styled-components', 'react-youtube'], factory) :
	(factory((global.main = {}),global.React,global.moment,global.styled,global.YouTube));
}(this, (function (exports,React,moment,styled,YouTube) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
var styled__default = 'default' in styled ? styled['default'] : styled;
YouTube = YouTube && YouTube.hasOwnProperty('default') ? YouTube['default'] : YouTube;

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n"]);

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var FlexContainer = styled__default.div(_templateObject, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
});

var _templateObject$1 = _taggedTemplateLiteral$1(["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  border-radius: 50%;\n  overflow: hidden;\n"]);

function _taggedTemplateLiteral$1(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledWrapper = styled__default.div(_templateObject$1, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});

var _templateObject$2 = _taggedTemplateLiteral$2(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"], ["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);

function _taggedTemplateLiteral$2(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledImage = styled__default.img(_templateObject$2);

var Avatar = function Avatar(props) {
  return React.createElement(StyledWrapper, { size: props.size }, React.createElement(StyledImage, { src: props.pictureUrl }));
};

Avatar.defaultProps = {
  size: 40
};

var _templateObject$3 = _taggedTemplateLiteral$3(["\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n  height: 0;\n  overflow: hidden;\n"], ["\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n  height: 0;\n  overflow: hidden;\n"]);

function _taggedTemplateLiteral$3(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledWrapper$2 = styled__default.div(_templateObject$3);

var _templateObject$4 = _taggedTemplateLiteral$4(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);

function _taggedTemplateLiteral$4(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledImage$2 = styled__default.img(_templateObject$4);

var getRGBFromHex = function getRGBFromHex(hex, opacity) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var obj = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  if (obj) {
    return "rgba(" + obj.r + ", " + obj.g + ", " + obj.b + ", " + opacity + ")";
  } else {
    return null;
  }
};

var _templateObject$5 = _taggedTemplateLiteral$5(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1;\n  background-color: ", ";\n  opacity: 0;\n  cursor: pointer;\n  transition: 150ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  polyline {\n    fill: yellow;\n    fill-opacity: 0;\n    transition: fill-opacity 1.5s;\n  }\n  circle {\n    fill: transparent;\n    stroke: yellow;\n    stroke-width: 3;\n    stroke-dashoffset: 500;\n    stroke-dasharray: 534;\n    transition: stroke-dashoffset 1s;\n    -webkit-animation-play-state: running;\n    -moz-transform: rotate(-89deg) translateX(-190px);\n  }\n  &:hover {\n    opacity: 1;\n    circle {\n      stroke-dashoffset: 0;\n    }\n    polyline {\n      fill-opacity: 1;\n    }\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1;\n  background-color: ", ";\n  opacity: 0;\n  cursor: pointer;\n  transition: 150ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  polyline {\n    fill: yellow;\n    fill-opacity: 0;\n    transition: fill-opacity 1.5s;\n  }\n  circle {\n    fill: transparent;\n    stroke: yellow;\n    stroke-width: 3;\n    stroke-dashoffset: 500;\n    stroke-dasharray: 534;\n    transition: stroke-dashoffset 1s;\n    -webkit-animation-play-state: running;\n    -moz-transform: rotate(-89deg) translateX(-190px);\n  }\n  &:hover {\n    opacity: 1;\n    circle {\n      stroke-dashoffset: 0;\n    }\n    polyline {\n      fill-opacity: 1;\n    }\n  }\n"]);

function _taggedTemplateLiteral$5(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledButtonWrapper = styled__default.div(_templateObject$5, function (props) {
  return getRGBFromHex(props.theme.colors.primary, 0.4);
});

var CoverButton = function CoverButton() {
  return React.createElement(StyledButtonWrapper, null, React.createElement("svg", { width: "200", height: "200", viewBox: "0 0 200 200" }, React.createElement("circle", { cx: "95", cy: "95", r: "85", transform: "rotate(-90, 95, 95)" }), React.createElement("polyline", {
    className: "PlayIcon",
    x: "50",
    y: "50",
    width: "50",
    height: "50",
    transform: "translate(75, 55)",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "\r 0.375,0.375 45.63,38.087 0.375,75.8 "
  })));
};

var Cover = function Cover(props) {
  return React.createElement("div", { style: props.style }, React.createElement(StyledWrapper$2, null, React.createElement(CoverButton, null), React.createElement(StyledImage$2, { src: props.pictureUrl })));
};

var _templateObject$6 = _taggedTemplateLiteral$6(["\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n  height: 0;\n  overflow: hidden;\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 25px;\n  height: 0;\n  overflow: hidden;\n  iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n"]);

function _taggedTemplateLiteral$6(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledWrapper$4 = styled__default.div(_templateObject$6);

var PlayerYoutube = function PlayerYoutube(props) {
  return React.createElement("div", { style: props.style }, React.createElement(StyledWrapper$4, null, React.createElement(YouTube, { videoId: props.videoId, opts: { playerVars: { autoplay: 1 } } })));
};

var youtube = function youtube(post) {
  return post.medias.find(function (media) {
    return media.source === "YOUTUBE";
  });
};

var PlayerAll = function PlayerAll(props) {
  return React.createElement("div", null, !props.playing && React.createElement("div", { onClick: props.onPlay }, React.createElement(Cover, { pictureUrl: props.post.pictureUrl })), props.playing && youtube(props.post) && React.createElement(PlayerYoutube, { videoId: youtube(props.post).url }));
};

PlayerAll.defaultProps = {
  playing: false
};

var _templateObject$7 = _taggedTemplateLiteral$7(["\n  background: ", ";\n  border-radius: 3px;\n  margin-bottom: 20px;\n"], ["\n  background: ", ";\n  border-radius: 3px;\n  margin-bottom: 20px;\n"]);

function _taggedTemplateLiteral$7(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledWrapper$6 = styled__default.div(_templateObject$7, function (props) {
  return props.theme.colors.cardsBackground;
});

var _templateObject$8 = _taggedTemplateLiteral$8(["\n  padding: 15px;\n"], ["\n  padding: 15px;\n"]);

function _taggedTemplateLiteral$8(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledContainer = styled__default.div(_templateObject$8);

var _templateObject$9 = _taggedTemplateLiteral$9(["\n  font-style: italic;\n  font-size: 14px;\n  line-height: 20px;\n  max-width: 450px;\n  margin: 0 auto;\n"], ["\n  font-style: italic;\n  font-size: 14px;\n  line-height: 20px;\n  max-width: 450px;\n  margin: 0 auto;\n"]);

function _taggedTemplateLiteral$9(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledDescription = styled__default.p(_templateObject$9);

var _templateObject$10 = _taggedTemplateLiteral$10(["\n  font-weight: 300;\n  font-size: 14px;\n  &:before {\n    content: \"-\";\n    margin: 0 10px;\n  }\n"], ["\n  font-weight: 300;\n  font-size: 14px;\n  &:before {\n    content: \"-\";\n    margin: 0 10px;\n  }\n"]);

function _taggedTemplateLiteral$10(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledArtistName = styled__default.h4(_templateObject$10);

var _templateObject$11 = _taggedTemplateLiteral$11(["\n  background: ", ";\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  padding: 10px 15px;\n"], ["\n  background: ", ";\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  padding: 10px 15px;\n"]);

function _taggedTemplateLiteral$11(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledHeader = styled__default.div(_templateObject$11, function (props) {
  return props.theme.colors.backgroundSecondary;
});

var _templateObject$12 = _taggedTemplateLiteral$12(["\n  margin-left: 10px !important;\n  font-size: 12px;\n"], ["\n  margin-left: 10px !important;\n  font-size: 12px;\n"]);

function _taggedTemplateLiteral$12(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledUserName = styled__default.h5(_templateObject$12);

var _templateObject$13 = _taggedTemplateLiteral$13(["\n  font-size: 11px;\n"], ["\n  font-size: 11px;\n"]);

function _taggedTemplateLiteral$13(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledDate = styled__default.span(_templateObject$13);

var _templateObject$14 = _taggedTemplateLiteral$14(["\n  background: ", ";\n  transition: 250ms;\n  overflow: hidden;\n  border-radius: ", ";\n  transform: ", ";\n  margin: ", ";\n  &:hover {\n    border-radius: 3px;\n    transform: scale(1.1);\n    margin: 20px 0;\n  }\n"], ["\n  background: ", ";\n  transition: 250ms;\n  overflow: hidden;\n  border-radius: ", ";\n  transform: ", ";\n  margin: ", ";\n  &:hover {\n    border-radius: 3px;\n    transform: scale(1.1);\n    margin: 20px 0;\n  }\n"]);

function _taggedTemplateLiteral$14(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledPlayer = styled__default.div(_templateObject$14, function (props) {
  return props.theme.colors.cardsBackground;
}, function (props) {
  return props.playing ? "3px" : "0px";
}, function (props) {
  return props.playing ? "scale(1.1)" : "scale(1)";
}, function (props) {
  return props.playing ? "20px 0" : "0";
});

var CardPost = function CardPost(props) {
  return React.createElement(StyledWrapper$6, { style: props.style }, React.createElement(StyledHeader, null, React.createElement(FlexContainer, { alignItems: "center", justifyContent: "space-between" }, React.createElement("div", null, React.createElement(FlexContainer, { alignItems: "center" }, React.createElement(Avatar, { pictureUrl: props.post.user.pictureUrl, size: 25 }), React.createElement(StyledUserName, null, props.post.user.firstName + " " + props.post.user.lastName))), React.createElement(StyledDate, null, moment(props.post.postedAt).fromNow()))), React.createElement(StyledContainer, null, React.createElement(FlexContainer, { alignItems: "flex-end" }, React.createElement("h3", null, props.post.title), React.createElement(StyledArtistName, null, props.post.artist.name))), React.createElement(StyledPlayer, { playing: props.playing }, React.createElement(PlayerAll, {
    post: props.post,
    onPlay: props.onPlay,
    playing: props.playing
  })), React.createElement(StyledContainer, null, React.createElement(StyledDescription, null, props.post.description)));
};

CardPost.defaultProps = {
  playing: false
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ListPosts = function (_React$Component) {
  _inherits(ListPosts, _React$Component);

  function ListPosts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListPosts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListPosts.__proto__ || Object.getPrototypeOf(ListPosts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      postPlaying: null
    }, _this._play = function (id) {
      return function () {
        console.log(id);
        _this.setState(function () {
          return {
            postPlaying: id
          };
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListPosts, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          posts = _props.posts,
          style = _props.style;
      var postPlaying = this.state.postPlaying;

      return React.createElement("div", { style: style }, posts.map(function (post) {
        return React.createElement(CardPost, {
          post: post,
          key: post.id,
          onPlay: _this2._play(post.id),
          playing: postPlaying === post.id
        });
      }));
    }
  }]);

  return ListPosts;
}(React.Component);

var DefaultTheme = {
  fonts: {
    primary: "Raleway"
  },
  colors: {
    primary: "#009fe3",
    text: "#464646",
    background: "#e9ebee",
    backgroundSecondary: "#f7f7f7",
    cardsBackground: "#ffffff"
  }
};

var _templateObject$15 = _taggedTemplateLiteral$15(["\n  background: ", ";\n  font-family: ", ";\n  color: ", ";\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n"], ["\n  background: ", ";\n  font-family: ", ";\n  color: ", ";\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n  }\n"]);

function _taggedTemplateLiteral$15(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var StyledWrapper$8 = styled__default.div(_templateObject$15, function (props) {
  return props.theme.colors.background;
}, function (props) {
  return props.theme.fonts.primary;
}, function (props) {
  return props.theme.colors.text;
});

var ThemeProvider$1 = function ThemeProvider$$1(props) {
  return React.createElement(styled.ThemeProvider, { theme: props.theme }, React.createElement(StyledWrapper$8, null, props.children));
};

ThemeProvider$1.defaultProps = {
  theme: DefaultTheme
};

exports.CardPost = CardPost;
exports.ListPosts = ListPosts;
exports.ThemeProvider = ThemeProvider$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
