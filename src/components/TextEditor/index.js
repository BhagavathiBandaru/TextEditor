import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {ButtonIcon, TextArea} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onCLickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onCLickUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  onCLickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'

    return (
      <div className="app-container">
        <div className="text-editor-cards-container">
          <div className="left-Block">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image-element"
            />
          </div>

          <div className="right-block">
            <ul className="icons-container">
              <li className="icon-element">
                <ButtonIcon
                  className="btn-styling"
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onCLickBold}
                >
                  <VscBold size={25} />
                </ButtonIcon>
              </li>
              <li className="icon-element">
                <ButtonIcon
                  className="btn-styling"
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onCLickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonIcon>
              </li>

              <li className="icon-element">
                <ButtonIcon
                  className="btn-styling"
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onCLickItalic}
                >
                  <GoItalic size={25} />
                </ButtonIcon>
              </li>
            </ul>
            <TextArea
              isBold={isBold}
              isUnderline={isUnderline}
              isItalic={isItalic}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
