import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/cep/:cep", async (req, res) => {
  const cep = req.params.cep.replace(/\D/g, "");
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Erro ao consultar ViaCEP" });
  }
});

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
