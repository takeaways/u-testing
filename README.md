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

> Assertion? [ko]:
> 프로그램의 특정 지점에 위치한 Assertion은 해당 지점에서 개발자가 반드시 참(true)이어야 한다고 생각하는 사항을 표현한 논리식이다.

## Assertion
1. expect
    - Jest global, starts the assertion
2. matcher
    - type of assertion
    - this matcher comes from Jest-DOM

```js
expect(linkElement).toBeInTheDocument();
//expect argument - subject of the assertion [expect]
//matcher argument - refines matcher [toBeInTheDocument]

expect(element.textContent).toBe("Hello");
//expect argument - subject of the assertion [expect]
//matcher argument - refines matcher [toBe]

expect(elementsArray).toHaveLength(7);
```

3. jest-dom
    - comes with create-react-app
    - src/setupTests.js imports it before each test, makes matchers available
    - DOM-based matchers
        - example: toBeVisible() or toBeChecked()

## Jest
- React Testing Library helps with
    - rendering components into virtual DOM
    - searching virtual DOM
    - Interacting with virtual DOM
- Needs a test runner
    - Find tests, run them, make assertions
- Jest
    - is recommended by Testing Library
    - comes with create-react-app

> How does Jest Work?  
> 1. global test method has two argument:  
> - [1] string description  
> - [2] test function  
> 2. Test fails if error is thrown when running function:  
> - [1] assertions throw errors when expectation fails  
> 3. No Error -> tests pass
> - [1] Empty test passes!

`npm test or yarn test`


## TDD (Test-Driven Development)
- Write tests before writing code
    - then write code according to "spec" set by tests
- "red-green" testing
    - Tests fail before code is written

1. Write "shell" function
2. Write tests
3. Tests fail
4. Write code
5. Tests pass!

### Why TDD?
- Makes a huge difference in how it feels to write tests
    - part of the coding process, not a "chore" to do at the end
- More efficient
    - Re-run tests "for free" after changes

## React Testing Library Philosophy?
- Creates virtual DOM for testing
    - and utilities for interacting with DOM
- Allows testing without a browser

## Types of Tests
- Unit tests
    - Tests one unit of code in isolation
- Integration tests
    - How multiple units work together
- Functional Tests
    - Tests a particular function of software
- Acceptance / End-to-end (E2E) Tests
    - Use actual browser and server (Cypress, Selenium)

## Function Testing vs Unit Testing
1. different mindset from unit testing
    - Unit Testing
        - Isolated: mock dependencies, test internals
        - Very easy to pinpoint failures
        - 👎Further from how users interact with software
        - 👎More likely to break with refactoring
    - Functional Testing
        - Include all relevant units, test behavior
        - Close to how users interact with software
        - Robust tests
        - 👎More difficult to debug failing tests

## TDD vs BDD
- Quick detour for BDD: Behavior-Driven Development
- Testing Library encourage testing behavior over implementation
- So shouldn't we be calling this BDD instead of TDD?
    - actually, no.
- BDD is very explicitly defined
    - involves collaboration between lots of roles
        - developers, QA, business partners, etc
    - defines process for different groups to interact
