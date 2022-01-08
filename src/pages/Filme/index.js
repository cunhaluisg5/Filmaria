import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./filme-info.css";
import api from "../../services/api";

function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();


    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.length === 0){
                // Tentou acessar com id que não existe. Redireciona para home.
                navigate("/");
                return;
            }

            setFilme(response.data);
            setLoading(false);
        };

        loadFilme();

        return () => {
            console.log("COMPONENTE DESMONTADO!");
        }

    }, [navigate, id]);

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return(
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={() => {}}>Salvar</button>
                <button>
                    <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Filme;