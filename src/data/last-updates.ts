type LastUpdates = {
    id: number,
    title: string,
    episode: string,
    image: string,
    synopsis: string,
    studio: string,
    genre: string[]
}

export const lastUpdatesData:LastUpdates[] = [
    {
        id: 1, 
        title: "Shigatsu wa Kimi no Uso",
        episode: "22",
        image: "/images/updates/your-lie-in-april.jpg",
        synopsis: "Um pianista prodígio se torna incapaz de ouvir sua própria música após o trauma de perder sua amada mãe e professora. Com isso arrancado dele, a vida de Kousei Arima se torna monótona e sem brilho. Um dia, Kousei é apresentado a uma violinista chamada Kaori Miyazono. Apesar da péssima primeira impressão que Kaori causa, sua música encanta completamente o rapaz. Livre, poderosa e apaixonada, a performance audaciosa de Kaori traz de volta a Kousei a luz da vida. Reunidos pela música, poderão as sinceras notas do violino da garota fazer com que o rapaz volte a tocar piano?",
        genre: ["Drama", "Música", 'Romance', "Shounen"],
        studio: 'A-1 Pictures'
    },
    {
        id: 2, 
        title: "Ijiranaide, Nagatoro san: 2nd Attack!",
        episode: "11",
        image: "/images/updates/ijiranaide-nagatoro-san.png",
        synopsis: '"Uma garota mais nova que eu me fez chorar!" Certo dia, ao visitar a biblioteca do colégio, Senpai vira o alvo de uma novata super-sádica! O nome da garota que provoca, atormenta e bulina o Senpai é Nagatoro! Ela é pentelha, mas adorável. Estar ao lado dela é agonizante, mas irresistível. Esta é a história de uma garota extremamente sádica e temperamental que vai despertar algo dentro de você.',
        genre: ["Comédia", "Romance"],
        studio: 'Telecom Animation Film'
    },
    {
        id: 3, 
        title: "Uzaki-chan wa Asobitai!",
        episode: "07",
        image: "/images/updates/uzaki-chan.jpg",
        synopsis: "O estudante universitário Shinichi Sakurai se sente confortável sendo um solitário introvertido e não se importa com o que os outros pensam. A estudante vívida Hana Uzaki não entende isso nem um pouco. Um tornado de alegria, ela decidiu torná-lo mais social. Começando a gostar da companhia dela, ele admitiu que eles são amigos. É possível se divertir tanto com outra pessoa quanto ele se divertiria sozinho?",
        genre: ["Comédia", "Romance"],
        studio: 'Engi'
    },
    {
        id: 4, 
        title: "Made in Abyss",
        episode: "11",
        image: "/images/updates/made-in-abyss.jpeg",
        synopsis: "Nas profundezas do Abismo, uma garota chamada Riko se depara com um robô que parece um menino. Riko e seu novo amigo descem a um território desconhecido para desvendar seus mistérios, mas o que os espera na escuridão?",
        genre: ["aventura", "drama", "fantasia", "ficção científica"],
        studio: 'Kinema Citrus'
    },
    {
        id: 5, 
        title: "One Piece",
        episode: "1059",
        image: "/images/updates/one-piece.jpg",
        synopsis: 'Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. "Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!". Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!',
        genre: ["aventura", "Ação", "Fantasia", ""],
        studio: 'Toei Animation'
    },
    {
        id: 6, 
        title: "One Punch Man!",
        episode: "10",
        image: "/images/updates/one-punch-man.png",
        synopsis: "O super-herói mais forte do mundo pode matar qualquer um com um só golpe. Mas, com uma vida sem desafios, ele sofre com o tédio e a depressão.",
        genre: ["Ação", "Comédia", "Shounen"],
        studio: 'Madhouse'
    },
    {
        id: 7, 
        title: "Shadowverse: Flame!",
        episode: "16",
        image: "/images/updates/shadowverse-flame.jpeg",
        synopsis: 'A batalha mais quente do momento vai começar! Estudante da Academia Tensei, Hiiro Ryugasaki acaba adquirindo um misterioso smartphone que veio instalado com o famoso jogo de cartas Shadowverse. Encontrar novos rivais, enfrentar torneios importantes, forjar laços com amigos... O Shadowverse faz Hiiro conhecer uma série de novas experiências, que o ajudarão a "evoluir"...',
        genre: ["Ação", "Shounen"],
        studio: 'Zexcs'
    },
    {
        id: 8, 
        title: "Suzumiya Haruhi no Yuuutsu!",
        episode: "23",
        image: "/images/updates/suzumiya-haruhi.jpg",
        synopsis: "Haruhi Suzumiya não gosta de coisas comuns. Ela prefere encontrar alienígenas, viajantes do tempo ou espers. E os clubes? Entediantes! Graças ao curioso Kyon, ela criará seu próprio clube! A Brigada SOS!",
        genre: ["Comédia", "Romance", "Mistério", "Ficção Científica"],
        studio: 'Kyoto Animations'

    },
    {
        id: 9, 
        title: "Dr. Stone",
        episode: "10",
        image: "/images/updates/doctor-stone.jpg",
        synopsis: "Milhares de anos após um misterioso fenômeno transformar a humanidade inteira em pedra, desperta um garoto extraordinariamente inteligente e motivado pela ciência - Senku Ishigami. Diante de um mundo de pedra e do colapso generalizado da civilização, Senku decide usar sua mente para reconstruir o mundo. Ao lado de Taiju Oki, seu amigo de infância absurdamente forte, eles começam a reestabelecer a civilização do zero. Representando os dois milhões de anos da história da ciência, desde a Idade da Pedra até os dias atuais, esta aventura científica sem precedentes está prestes a começar!",
        genre: ["Comédia", "Aventura", "Ficção Científica"],
        studio: 'TMS Entertainment'
    },
    {
        id: 10, 
        title: "Boruto: Next Generations",
        episode: "36",
        image: "/images/updates/boruto.jpg",
        synopsis: 'Uzumaki Boruto, filho de Uzumaki Naruto, o Sétimo Hokage, se inscreveu na Academia Ninja para aprender a ser um verdadeiro ninja. Os outros estudantes o ignoram por ser "apenas o filho do Hokage", mas a paixão e a personalidade do Boruto vai acabar com todos esses preconceitos. Quando uma série de misteriosos eventos começa a se desenrolar, cabe a Boruto e seus novos amigos a investigá-los. Como um tornado, Boruto entra no coração de todos: sua história está prestes a começar!',
        genre: ["Ação", "Aventura", "Fantasia", "Shounen"],
        studio: 'Pierrot'
    },
    {
        id: 11, 
        title: "Golden Time",
        episode: "19",
        image: "/images/updates/golden-time.jpg",
        synopsis: "Tada Banri é o mais novo aluno na escola de direito particular de Tóquio. Contudo, devido a um acidente, ele perde suas memórias. Durante sua integração, ele encontra outro calouro, Yanagisawa Mitsuo. Sem se lembrarem um do outro, suas vidas começam a se tornar cada vez mais interligadas, como se fosse obra do destino. Mas qual é o destino deles? Haverá felicidade ou somente outra memória a ser esquecida?",
        genre: ["Comédia", "Drama", "Romance"],
        studio: 'J.C.Staff'
    },
    {
        id: 12, 
        title: "Inazuma Eleven",
        episode: "12",
        image: "/images/updates/inazuma-eleven.jpg",
        synopsis: "10 anos após o FFI, uma escuridão despercebida esconde-se atrás do país. O Japão e o que costumava ser futebol mudou durante os 10 anos que se passaram. Neste momento, o futebol é diferente de antes e se tornou uma razão para as pessoas perderem a esperança e deixarem de jogar para quem gosta de futebol. O novo protagonista principal, Matsukaze Tenma, tenta o time de futebol e passa, mas em uma partida com outro time, ele logo percebe que o futebol é muito diferente do que ele esperava. que seja",
        genre: ["Esporte"],
        studio: 'OLM'

    }
]

export const getAnime = (id: number, episode: string) => lastUpdatesData.find(anime => anime.id === id && anime.episode === episode)