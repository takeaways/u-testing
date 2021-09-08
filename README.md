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
> test to success or fail