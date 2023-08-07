const express = require('express');
const app = express();

app.use(express.json());


// Dados iniciais (simulando um banco de dados)
let teams = [
   { id: 1, name: 'Machester City', points: 89 },
   { id: 2, name: 'Arsenal', points: 84 },
   { id: 3, name: 'Manchester United', points: 75 },
   { id: 4, name: 'Newcastle', points: 71 },
];

// Rota para obter a classificação
app.get('/classificacao', (req,res) => {
  const sortedTeams = teams.sort ((a, b) =>  b.points - a.points);
  res.json(sortedTeams);
});

// Rota para adicionar pontos a um time
app.post('/add-points/:id' , (req, res) => {
  const id = parseInt(req,params.id);
  const pointsToAdd = parseInt(req.body.points);

  const team = teams.find(t => t.id === id);
  if (!team) {
    return res.status(404).json({ message: 'Time não encontrado'});
}

team.points += pointsToAdd;
res.json({ message:'Pontos adicionados com sucesso', team });
});

app.listen(4000, () => {
    console.log('Servidor foi Iniciado');

});