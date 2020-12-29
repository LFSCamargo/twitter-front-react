import { transparentize } from 'polished';

const makeTransparent = transparentize(50);

const blue = '#1E96EB';
const yellow = '#FEA432';
const purple = '#6D42B8';
const green = '#1EB65F';
const orange = '#F15429';
const pink = '#DA2454';
const black = '#000';
const bluishGrey = '#151D26';
const white = '#FFF';
const lightenGrey = '#7D8E9B';
const grey = '#576A7B';
const whiterGrey = '#e8ebee';

const accents = {
  blue,
  transparentBlue: makeTransparent(blue),
  yellow,
  transparentYellow: makeTransparent(yellow),
  pink,
  transparentPink: makeTransparent(pink),
  purple,
  transparentPurple: makeTransparent(purple),
  orange,
  transparentOrange: makeTransparent(orange),
  green,
  transparentGreen: makeTransparent(green),
};

export const DarkTheme = {
  colors: {
    backgroundColor: bluishGrey,
    textColor: white,
    greyedText: lightenGrey,
    selectionColor: white,
    greySearchInput: lightenGrey,
    accents,
  },
};

export const Theme = {
  colors: {
    backgroundColor: white,
    textColor: black,
    greyedText: grey,
    selectionColor: black,
    greyTextInput: whiterGrey,
    accents,
  },
};
