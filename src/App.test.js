import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole("button",{name:/Change to blue/i});
  expect(colorButton).toHaveStyle({backgroundColor:'red'});
});

test('button toggles blue and red when clicked',()=>{
  render(<App/>);
  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  
  //click
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
  expect(colorButton.textContent).toBe('Change to red')

})

test('initial conditions', ()=>{
  render(<App/>)
  const colorButton = screen.getByRole('button', {name:'Change to blue'})
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
})