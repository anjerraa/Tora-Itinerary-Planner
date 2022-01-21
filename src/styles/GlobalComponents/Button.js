import React from 'react'

import { ButtonBackPrimary, ButtonFrontPrimary, ButtonBackSecondary, ButtonFrontSecondary } from './index'

const ButtonPrimary = (props) => (
  <ButtonBackPrimary alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFrontPrimary alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFrontPrimary>
  </ButtonBackPrimary>
);

const ButtonSecondary = (props) => (
  <ButtonBackSecondary alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFrontSecondary alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFrontSecondary>
  </ButtonBackSecondary>
);

module.exports = {
  ButtonPrimary,
  ButtonSecondary
}
