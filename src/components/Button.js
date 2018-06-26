import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { icon, color, size, isLoading, text } = this.props

    const buttonClass = 'button' +
      (color ? ` is-${color}` : '') +
      (size ? ` is-${size}` : '') +
      (isLoading ? ` is-loading` : '')

    return( icon ?
        <a className={buttonClass}>
          <span className="icon">
            <i className={`fa fa-${icon}`}></i>
          </span>
          { text || this.props.children ?
            <span>
              {this.props.text}
              {this.props.children}
            </span>
          : null }
        </a>
      : <a className={buttonClass}>
        {this.props.text}
        {this.props.children}
      </a>
    )
  }
}

export default Button
