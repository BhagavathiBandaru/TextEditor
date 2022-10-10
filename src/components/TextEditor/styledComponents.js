import styled from 'styled-components'

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: ${props => props.colorText};
`

export const TextArea = styled.textarea`
  height: 100%;
  background-color: #25262c;
  border: none;
  border-top: 2px solid #334155;
  width: 100%;
  outline: none;
  font-size: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  color: #f8fafc;
  padding: 20px;
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`
