import { createSignal } from "solid-js";
import CepForm from "../components/CepForm";
import CepCard from "../components/CepCard";
import { buscarCEP } from "../api/cepService";

export default function Home() {
    const [lista, setLista] = createSignal([]);
    const [erro, setErro] = createSignal("");

    const buscar = async (cep) => {
        setErro("");
        try {
            const resultado = await buscarCEP(cep);
            setLista([...lista(), resultado]);
        } catch (e) {
            setErro(e.message);
        }
    };

    const excluir = (cep) => {
        setLista(lista().filter((item) => item.cep !== cep));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>CRUD ViaCEP - SolidJS</h1>

            <CepForm onBuscar={buscar} />

            {erro() && <p style={{ color: "red" }}>{erro()}</p>}

            {lista().map((item) => (
                <CepCard dados={item} onExcluir={excluir} />
            ))}
        </div>
    );
}
