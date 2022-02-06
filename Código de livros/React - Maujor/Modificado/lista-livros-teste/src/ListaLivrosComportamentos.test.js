import { render, screen, fireEvent } from "@testing-library/react"
import ListaLivros from "./ListaLivros"

// describe("Testes de Comportamento", () => {
//     test("click no botao Salvar", () => {
//         render(<ListaLivros/>);
//         const botaoSalvar = screen.getByTestId(/Salvar/i);
//         expect(console.log(botaoSalvar));
//     });
// });

describe("Teste de Comportamento", ()=>{
    test("evento change e form submit", () => {
        const { container } = render(<ListaLivros/>);
        //expect(container.innerHTML);
        const input = screen.getByTestId("titulo");
        const [form] = container.querySelectorAll("form");
        fireEvent.change(input, {target: {value: "React JS"} });
        fireEvent.submit(form);

        //expect(console.log(container.innerHTML));
        const livroItem = screen.getByTestId("ReactJS");    //O id foi determinado em ListaLivroJS como /\s/g
        const boleano = livroItem.hasChildNodes("React JS");
        expect(boleano).toBeTruthy();
    });

    test("Testar o botao delete", () => {
        const { container } = render(<ListaLivros/>);

        //Adicionando um livro, para fazer a verificacao do delete;
        const input = screen.getByTestId("titulo");
        const [form] = container.querySelectorAll("form");
        fireEvent.change(input, {target: {value: "Livro Teste"} });
        fireEvent.submit(form);

        //Simulando a utilizacao do botao;
        const botaoDeletar = screen.getByTestId("removerDataId");
        fireEvent.click(botaoDeletar);

        //Realizando a busca pelo conteudo inserido anteriormente para teste;
        const LivroSearch = screen.queryByText("Livro Teste");
        expect(LivroSearch).toBeNull();
    });
});
