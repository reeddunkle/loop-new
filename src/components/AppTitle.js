import React, { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import slice from 'lodash/slice';
import Emoji from './Emoji';

const SPACE = ' ';

const ReplaceIndexWithSymbol = ({ index, symbol, text }) => (
  <span>
    {slice(text, 0, index)}
    <Emoji label="curly_loop" spinning symbol={symbol} />
    {slice(text, index + 1, text.length)}
  </span>
);

function moveSymbolThroughCharacters(index, text, setIndex) {
  const nextLetter = text[index + 1];
  const isEndOfText = index >= text.length;
  if (!isEndOfText) {
    nextLetter === SPACE ? setIndex(index + 2) : setIndex(index + 1);
  }
}

function SymbolThroughText({ symbol, title, transitionSpeed = 600 }) {
  const [symbolIndex, setSymbolIndex] = useState(0);

  useEffect(
    () => {
      if (!(symbolIndex >= title.length)) {
        setTimeout(() => {
          moveSymbolThroughCharacters(symbolIndex, title, setSymbolIndex);
        }, transitionSpeed);
      }
    },
    [symbolIndex]
  );

  return (
    <Header as="h1">
      <ReplaceIndexWithSymbol
        index={symbolIndex}
        symbol={symbol}
        text={title}
      />
    </Header>
  );
}

export default SymbolThroughText;
