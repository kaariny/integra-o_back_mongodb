  import express from "express";
  import connectDataBase from "./config/dbConnect.js";
  import KsaImports from "./models/KsaImports.js";

  const conexao = await connectDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão: ", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão com o banco realizada devidamente!")
  });

  const app = express();
  app.use(express.json())
  /*const KsaImports = [

       {id: 1, "CEP": 5101150},
       {id: 2, "data_nascimento": 1999-05-25},
       {id: 3, "email": "araujookariny@gmail.com"},
       {id: 4, "endereco": rua tome gibson},
       {id: 5, "telefone": 81998346398},
       {id: 6, "produto": "iphone pro max14"}

    ]
  */
    app.get('/', (req, res) => {
      res.status(200).send('KsaImports');
    }) 
    
    app.get('/KsaImports', async(req, res)=> {
      const listaKsaImports = await KsaImports.find({});
        res.status(200).json(listaKsaImports);
    })

   /* app.post('/KsaImports', (req, res) => {
      KsaImports.push(req.body);
      res.status(201).send('cadastrado com Sucesso!')
    })

    app.put('/KsaImports/:id', (req, res) => {
      let index = pesquisar(req.params.id);
      KsaImports[index].produto = req.body.produto;
      res.json(KsaImports);
    })
    
    app.get('/KsaImports/:id', (req, res)=>{
      const index = pesquisar(req.params.id);
      res.status(201).json(KsaImports[index]);

    })

    app.delete('/KsaImports/:id',(req, res)=>{
      const index = pesquisar(req.params.id);
      if (index !== -1) {
        KsaImports.splice(index, 1); // Remove 1 elemento a partir da posição index
        res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
      } else {
        res.status(404).send('Vaga não encontrada'); // Retorna um erro se o ID não for encontrado
      }
    })
    

    function pesquisar(id) {
      return KsaImports.findIndex(KsaImports => KsaImports.id == id)
    }*/
    export default app 

        

