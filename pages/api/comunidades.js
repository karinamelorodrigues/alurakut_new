import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    //TOKEN de full access do Dato
    const TOKEN = "b93a20a43a9adab22c90b701405781";
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      // ID do Model de "Communities" criado automaticamente pelo Dato ao criar o modelo
      itemType: "1075206",
      ...request.body,
    });

    console.log(registroCriado);

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
