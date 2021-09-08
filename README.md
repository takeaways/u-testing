# 리액트 테스팅을 어떻게 하는게 좋을까? 기본부터 이해 하기

## 시작해보기
`yarn test`

```jsx
//App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
render
 - Create virtual DOM form argument JSX
 - Access virtual DOM via screen global

screen.getByText()
 - Find element by display text

expect(element).toBeInTheDocument()
 - assertion, causes test to succeed to fail

*/
```

> Assertion?  
> 프로그램의 특정 지점에 위치한 Assertion은 해당 지점에서 개발자가 반드시 참(true)이어야 한다고 생각하는 사항을 표현한 논리식이다.

## Assertion
1. expect
  - Jest global, starts the assertion
2. matcher
  - type of assertion
  - this matcher comes from Jest-DOM