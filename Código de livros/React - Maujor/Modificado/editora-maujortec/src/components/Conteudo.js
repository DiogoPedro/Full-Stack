import React from "react";
import NotFound from './NotFound';
import Livro from './Livro';
import { useParams } from "react-router-dom";

function Conteudo (props) {
  let { livroSlug } = useParams();
  console.log(livroSlug);
    const livro = props.livros.find(
        (livro) => {
          return livro.slug === livroSlug;
        }
      );
      if (livro) return (<Livro livro = {livro} />);
      else return <NotFound />;
};

export default Conteudo;