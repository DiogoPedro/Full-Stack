import { render, screen } from "@testing-library/react";
import ListaLivros from "./ListaLivros";

// Inserção dos testes propostos
describe("Teste de renderização", () => {
    test("texto lista de Livros", () => {
        render(<ListaLivros/>);
        const linkElement = screen.getByText(/lista de livros/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("Campo Input", () => {
        render(<ListaLivros/>);
        const inputElement = screen.getByLabelText(/Insira um livro/i);
        expect(inputElement).toBeInTheDocument();
    });

    // test("Testar o Botao", () => {
    //     render(<ListaLivros/>);
    //     const buttonElement = screen.getByTestId(/salvar/i);
    //     expect(buttonElement).toBeInTheDocument();
    // });

    // test("render options", () => {
    //     const { container } = render(<ListaLivros/>);
    //     console.log(container.innerHTML);
    // });
});