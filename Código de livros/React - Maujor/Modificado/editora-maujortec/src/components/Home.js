import React from 'react';
import { Link } from 'react-router-dom'

function Home({ livros }) {
    return(
        <main className='principal'>
            <h2>Ultimos lancamentos</h2>
            {livros
                .filter((n, index) => index < 6)
                .map(livro => (
                    <div className='card' key={livro.id}>
                        <div className='thumb'>
                            <img
                                src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
                                alt="Thumbnail da capa do livro ..." 
                            />
                        </div>
                        {livros
                            .filter(c => c.slug === livro.slug)
                            .map((livro) => (
                                <Link to={`/livro/${livro.slug}`} key={livro.id}>
                                    {
                                        <div className='detalhes'>
                                            <h3>{livro.titulos}</h3>
                                            <p>{livro.descricao.slice(0,130) + "..."}</p>
                                            <p>Leia mais &gt;</p>
                                        </div>
                                    }
                                </Link>
                            ))
                        }
                    </div>
                ))
            }
        </main>
    );
};

export default Home;
