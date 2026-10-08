export const googleRating = {
  score: '5,0',
  count: 75,
} as const

export type Review = {
  id: string
  name: string
  rating: number
  text: string
}

export const reviews: Review[] = [
  {
    id: 'jose-fernando-gomes',
    name: 'Jose Fernando Gomes',
    rating: 5,
    text: 'Eu conheci a LaSiciliana por acaso ainda quando estavam na Guaicanãs, o Giuliano e o Fábio são duas pessoas maravilhosas super educados e corteses. Em relação ao Canoli AH O CANOLLI !!! E simplesmente divino, precisam experimentar para comprovar ele deixa no chão o que se diz melhor de São Paulo. As massas também são deliciosas e a pastiera de grano uma tentação. Assim virei cliente e amigo desses camaradas aí parabéns amigos muito sucesso para vocês.',
  },
  {
    id: 'ale-ur',
    name: 'Ale Ur',
    rating: 5,
    text: 'Ótimos produtos e bom atendimento, com preços justos. Recomendo as massas caseiras e o strudel. E, lógico, tem os cannolis que são muito bons!',
  },
  {
    id: 'formigas-pelo-mundo',
    name: 'Formigas Pelo Mundo',
    rating: 5,
    text: 'Os melhores cannoli de SP! Além de massas frescas, molhos e antepastos artesanais e feitos com ingredientes italianos. Amamos tudo e com certeza voltaremos!',
  },
  {
    id: 'guilherme-maida',
    name: 'Guilherme Maida',
    rating: 5,
    text: 'Tudo lá é excelente! Peguei grissini (com alecrim) que é sensacional! Peguei biscoito de cebola, também muito bons, mas o ponto alto, mesmo, são o tiramisu e canoli! São divinos! Vale a pena você parar lá e comprar tudo pra levar pra sua casa',
  },
  {
    id: 'triz-lacerda',
    name: 'Triz Lacerda',
    rating: 5,
    text: 'Massa maravilhosa, muito leve. Entrega muita qualidade por um preço justo, ideal de levar pra casa e comer com a família numa refeição deliciosa. Ainda não provei o canoli mas pretendo logo mais. Parabéns pelo ótimo trabalho!',
  },
  {
    id: 'sp-aondeir',
    name: 'SP.AONDEIR no instagram',
    rating: 5,
    text: 'O atendimento dos proprietários é impecável, são atenciosos e muito gente boa. Os doces seguem a tradição italiana fielmente e são deliciosos. A massa artesanal, nem se fala, maravilhosa!!! Provei o ravioli de mussarela, sensacional. Vale muitoooo conhecer!!!',
  },
]
