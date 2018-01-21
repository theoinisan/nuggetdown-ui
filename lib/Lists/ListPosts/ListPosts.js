var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from "react";

import CardPost from "../../Cards/CardPost/CardPost";

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

      return React.createElement(
        "div",
        { style: style },
        posts.map(function (post) {
          return React.createElement(CardPost, {
            post: post,
            key: post.id,
            onPlay: _this2._play(post.id),
            playing: postPlaying === post.id
          });
        })
      );
    }
  }]);

  return ListPosts;
}(React.Component);

export default ListPosts;