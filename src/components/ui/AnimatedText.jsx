import React, { useEffect } from 'react';
import clsx from 'clsx';

const wrapWords = (text) => {
  return text.split(' ').map((word, index) => (
    <span key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      {word}{' '}
    </span>
  ));
};

const AnimatedText = ({ chats, inputValue }) => {
  const chat = chats?.find((chat) => chat.id === inputValue);

  return (
    <div>
      <p className="text-2xl text-gray-400">
        {wrapWords(`On ${chat?.date}, you remarked that`)}
        <span className="italic fade-in" style={{ animationDelay: `${wrapWords.length * 0.1}s` }}>
          &quot;{chat?.chat}&quot;
        </span>
        {wrapWords(". This indicates symptoms of")}
        <span className="italic text-black fade-in" style={{ animationDelay: `${wrapWords.length * 0.1}s` }}>
          {chat?.data.category}{' '}
        </span>
        {wrapWords("with intensity of")}
        <span className="italic text-black fade-in" style={{ animationDelay: `${wrapWords.length * 0.1}s` }}>
          {chat?.data.intensity}{' '}
        </span>
        {wrapWords("and is")}
        <span
          className={clsx(
            "italic text-black fade-in",
            chat?.data.type === "positive"
              ? "text-green-500"
              : chat?.data.type === "negative"
              ? "text-red-500"
              : ""
          )}
          style={{ animationDelay: `${wrapWords.length * 0.1}s` }}
        >
          {chat?.data.type}{' '}
        </span>
        {wrapWords("for you.")}
      </p>
    </div>
  );
};

export default AnimatedText;