const data = {
  ducks: [
    {
      id: 0,
      name: "Dog Duck",
      description:
        'Esse pato raro foi avistado diversas vezes na Europa Central. Dizem que ele gosta de brincar com meias velhas que encontra na água. Tânia tinha 25 anos quando viu esse pato. Ela contou que "ele era um carinha pequeno e amigável. Em nenhum momento eu senti medo dele. Fiquei com ele por 15 ou 20 minutos, e então ele partiu! Ele saiu da água e atravessou o céu noturno como um cometa."',
      img: new URL("../assets/images/dog-duck.png", import.meta.url).href,
    },
    {
      id: 1,
      name: "Zebra Duck",
      description:
        "Essa beldade tímida foi avistada na África Central. Os criptoduckologistas afirmam que o melhor momento para observar um desses magníficos grasnadores é quando a lua cheia está em seu ponto mais alto em uma noite abafada.",
      img: new URL("../assets/images/zebra-duck.png", import.meta.url).href,
    },
    {
      id: 2,
      name: "Giraffe Duck",
      description:
        'Este é um dos criptoducks mais altos de que há registro. Uma testemunha ocular relatou um episódio terrível de um encontro com uma dessas criaturas. Thomas estava acampando com sua família em Nova Jersey no verão de 1962, "Eu tinha acabado de colocar as crianças para dormir quando ouvi um barulho em um arbusto próximo. Liguei a lanterna e foi aí que o vi. O pescoço devia ter um metro e meio de comprimento. Ainda me lembro daquele grasnado. Nossa, uma coisa horrível. Minha vida mudou aquela noite."',
      img: new URL("../assets/images/giraffe-duck.png", import.meta.url).href,
    },
    {
      id: 3,
      name: "UFO Duck",
      description:
        "Muitos já encontraram esse pato. Não sabemos por que eles continuam nos visitando. Talvez eles sejam observadores pacíficos, ou talvez tenham intenções mais sinistras. É possível que nunca saibamos.",
      img: new URL("../assets/images/ufo-duck.png", import.meta.url).href,
    },
  ],
};

export default data;
