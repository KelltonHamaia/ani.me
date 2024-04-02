export type Anime = {
    id: number,
    title: string,
    image: string,
    image_alternative?: string,
    description: string
}

const lastNewsData:Anime[] = [
    {
        id: 1,
        title: "One Punch Man!",
        image: "bg-one-punch-man",
        description: "Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch Man!, divulgou um comunicado confirmando a produção de uma terceira temporada da adaptação para o anime […]"
    },
    {
        id: 2,
        title: "Inazuma Eleven GO!",
        image: "bg-inazuma-eleven",
        description: "10 anos após o FFI, uma escuridão despercebida esconde-se atrás do país. O Japão e o que costumava ser futebol mudou durante os 10 anos que se passaram. Neste momento, o futebol é diferente de antes e se tornou uma razão para as pessoas perderem a esperança e deixarem de jogar para quem gosta de futebol. O novo protagonista principal, Matsukaze Tenma, tenta o time de futebol e passa, mas em uma partida com outro time, ele logo percebe que o futebol é muito diferente do que ele esperava. que seja"
    },
    {
        id: 3,
        title: "Suzumiya Haruhi no Yuuutsu",
        image: "bg-suzumiya-haruhi",
        image_alternative: "/images/suzumiya-haruhi-no-yuuutsu-alt",
        description: "Haruhi Suzumiya não gosta de coisas comuns. Ela prefere encontrar alienígenas, viajantes do tempo ou espers. E os clubes? Entediantes! Graças ao curioso Kyon, ela criará seu próprio clube! A Brigada SOS!"
    },
    {
        id: 4,
        title: "Ijiranaide, Nagatoro-san!",
        image: "bg-nagatoro-san",
        image_alternative: "/images/ijiranaide-nagatoro-san-alt.png",
        description: "'Uma garota mais nova que eu me fez chorar!' Certo dia, ao visitar a biblioteca do colégio, Senpai vira o alvo de uma novata super-sádica! O nome da garota que provoca, atormenta e bulina o Senpai é Nagatoro! Ela é pentelha, mas adorável. Estar ao lado dela é agonizante, mas irresistível. Esta é a história de uma garota extremamente sádica e temperamental que vai despertar algo dentro de você."
    },
    {
        id: 5,
        title: "Shigatsu wa Kimi no Uso",
        image: "bg-your-lie-in-april",
        description: "Um pianista prodígio se torna incapaz de ouvir sua própria música após o trauma de perder sua amada mãe e professora. Com isso arrancado dele, a vida de Kousei Arima se torna monótona e sem brilho. Um dia, Kousei é apresentado a uma violinista chamada Kaori Miyazono. Apesar da péssima primeira impressão que Kaori causa, sua música encanta completamente o rapaz. Livre, poderosa e apaixonada, a performance audaciosa de Kaori traz de volta a Kousei a luz da vida. Reunidos pela música, poderão as sinceras notas do violino da garota fazer com que o rapaz volte a tocar piano?"
    }
]

export const getBannerData = () => lastNewsData[Math.floor(Math.random() * lastNewsData.length)]
