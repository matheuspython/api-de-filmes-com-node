const express = require('express')
const cors = require("cors")

const port = process.env.PORT || 8878;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
  return res.json([
    {
      filme:'Interstellar',
      descricao: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB"
    },
    {
      filme: "Dragon Ball Super: Broly",
      descricao: "Earth is at peace after The Tournament of Power but Goku continues to train, knowing there are ever-stronger forces in the universe. With the arrival of a Saiyan warrior named Broly, Goku and Vegeta face their most dangerous challenge yet.",
      img: "https://upload.wikimedia.org/wikipedia/pt/a/a1/Doragon_b%C3%B4ru_ch%C3%B4_Buror%C3%AE.jpg"
    },
    {
      filme: "The Mask (A Máscara)",
      descricao: "Stanley, a meek bank employee, turns into an eccentric and maniacal green-skinned superhero who can bend reality, after wearing a wooden mask that was created by Loki, the Norse god of mischief.",
      img: "https://upload.wikimedia.org/wikipedia/pt/f/fe/Themaask.jpg"
    },
    {
      filme:"The Last: Naruto the Movie (The Last - Naruto O Filme)",
      descricao:"Two years after the Fourth Shinobi World War, Naruto must stop Toneri Otsutsuki, a descendant of Hamura Otsutsuki, after Toneri causes the moon to descend toward Earth.",
      img: "https://upload.wikimedia.org/wikipedia/pt/f/f5/The_Last_Naruto_the_Movie.jpg"
    }
  ])
})




app.listen(port, console.log('server iniciado'))