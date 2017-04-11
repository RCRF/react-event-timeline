'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineEvent = function (_Component) {
  _inherits(TimelineEvent, _Component);

  function TimelineEvent() {
    _classCallCheck(this, TimelineEvent);

    return _possibleConstructorReturn(this, (TimelineEvent.__proto__ || Object.getPrototypeOf(TimelineEvent)).apply(this, arguments));
  }

  _createClass(TimelineEvent, [{
    key: 'mergeNotificationStyle',
    value: function mergeNotificationStyle(iconColor) {
      return iconColor ? _extends({}, _styles2.default.eventType, { color: iconColor, borderColor: iconColor }) : _styles2.default.eventType;
    }
  }, {
    key: 'mergeContentStyle',
    value: function mergeContentStyle(contentStyle) {
      var messageStyle = this.showAsCard() ? _styles2.default.cardBody : _styles2.default.message;
      return contentStyle ? _extends({}, messageStyle, contentStyle) : messageStyle;
    }
  }, {
    key: 'timeStyle',
    value: function timeStyle() {
      return this.showAsCard() ? _extends({}, _styles2.default.time, { color: '#fff' }) : _styles2.default.time;
    }
  }, {
    key: 'showAsCard',
    value: function showAsCard() {
      var container = this.props.container;

      return container === 'card';
    }
  }, {
    key: 'containerStyle',
    value: function containerStyle() {
      var style = this.props.style;

      var userStyle = style || {};
      return this.showAsCard() ? _extends({}, _styles2.default.eventContainer, _styles2.default.card, userStyle) : _styles2.default.eventContainer;
    }
  }, {
    key: 'cardTitleStyle',
    value: function cardTitleStyle() {
      return this.showAsCard() ? _styles2.default.cardTitle : {};
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          createdAt = _props.createdAt,
          title = _props.title,
          contentStyle = _props.contentStyle,
          buttons = _props.buttons,
          icon = _props.icon,
          iconColor = _props.iconColor,
          otherProps = _objectWithoutProperties(_props, ['createdAt', 'title', 'contentStyle', 'buttons', 'icon', 'iconColor']);

      return _react2.default.createElement(
        'div',
        { style: _styles2.default.event },
        _react2.default.createElement(
          'div',
          { style: this.mergeNotificationStyle(iconColor) },
          _react2.default.createElement(
            'span',
            { style: _styles2.default.materialIcons },
            icon
          )
        ),
        _react2.default.createElement(
          'div',
          _extends({}, otherProps, { style: this.containerStyle() }),
          _react2.default.createElement('div', { style: _styles2.default.eventContainerBefore }),
          _react2.default.createElement(
            'div',
            { style: this.cardTitleStyle() },
            _react2.default.createElement(
              'div',
              { style: this.timeStyle() },
              createdAt
            ),
            _react2.default.createElement(
              'div',
              null,
              title
            ),
            _react2.default.createElement(
              'div',
              { style: _styles2.default.actionButtons },
              buttons
            )
          ),
          _react2.default.createElement(
            'div',
            { style: this.mergeContentStyle(contentStyle) },
            this.props.children,
            _react2.default.createElement('div', { style: _styles2.default.messageAfter })
          )
        ),
        _react2.default.createElement('div', { style: _styles2.default.eventAfter })
      );
    }
  }]);

  return TimelineEvent;
}(_react.Component);

TimelineEvent.propTypes = {
  children: _react2.default.PropTypes.node.isRequired,
  title: _react2.default.PropTypes.node.isRequired,
  createdAt: _react2.default.PropTypes.node.isRequired,
  buttons: _react2.default.PropTypes.node,
  container: _react2.default.PropTypes.string,
  icon: _react2.default.PropTypes.node,
  iconColor: _react2.default.PropTypes.string,
  contentStyle: _react2.default.PropTypes.object,
  style: _react2.default.PropTypes.object
};

exports.default = TimelineEvent;