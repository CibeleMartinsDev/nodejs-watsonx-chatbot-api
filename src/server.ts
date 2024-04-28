import { app } from "./app";
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * process.on('SIGINT', ...) - Isso configura um ouvinte de evento para o sinal SIGINT, 
 * que é o sinal enviado quando você pressiona Ctrl+C no terminal.
 * server.close(); - Isso fecha o servidor Node.js. Quando você pressiona Ctrl+C, 
 * o servidor precisa ser encerrado adequadamente para liberar recursos e liberar a porta que estava ocupando.
 */
process.on('SIGINT', () =>{
  server.close();
  console.log('Sever finalised!')
})