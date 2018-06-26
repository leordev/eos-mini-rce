import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { icon, color, size, isLoading, text } = this.props

    const buttonClass = 'button' +
      (color ? ` is-${color}` : '') +
      (size ? ` is-${size}` : '') +
      (isLoading ? ` is-loading` : '')

    return( icon ?
        <a className={buttonClass} onClick={this.props.onClick}>
          <span className="icon">
            <i className={`fa fa-${icon}`}></i>
          </span>
          { (text || this.props.children) &&
            <span>
              {this.props.text}
              {this.props.children}
            </span> }
        </a>
      : <a className={buttonClass} onClick={this.props.onClick}>
        {this.props.text}
        {this.props.children}
      </a>
    )
  }
}

export default Button
