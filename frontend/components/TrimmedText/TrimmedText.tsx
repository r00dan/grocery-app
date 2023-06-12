'use client';

import { useState } from 'react';

import style from './TrimmedText.module.scss';

interface TrimmedText {
  text: string;
  length?: number;
}

export function TrimmedText({
  text,
  length = 10,
}: TrimmedText) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  if (text.length <= length) {
    return (
      <div>{text}</div>
    )
  }
  const result = text.slice(0, length).toString();

  return (
    <div>
      {isExpanded ? result : text}
      <div
        className={style.action}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '... more' : ' less'}
      </div>
    </div>
  )
}
