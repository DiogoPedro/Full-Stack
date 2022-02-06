import { render, screen } from '@testing-library/react';
import ListaLivros from './ListaLivros';

test('Renderizacao do link para Learn React', () => {
  render(<ListaLivros />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renderizacao da string save to reload', () => {
  render(<ListaLivros />);
  const stringText = screen.getByText(/save to reload/i);
  expect(stringText).toBeInTheDocument();
});

test('Testar o estado do Label', () => {
  render(<ListaLivros />);
  const StringLabel = screen.getByLabelText(/Nome/i);
  expect(StringLabel).toBeInTheDocument();
});