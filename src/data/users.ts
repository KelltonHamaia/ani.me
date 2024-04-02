type User = {
    id: number,
    username: string;
    avatar: string;
}

const pokeballMan:User = {
    id: 1,
    username: "PokeballMan",
    avatar: '/images/profiles/avatar-1.jpg',
}

const nagatoroIchibanFan:User = {
    id: 2,
    username: "nagatoroIchibanFan",
    avatar: '/images/profiles/avatar-2.jpg',
}

const kyon:User = {
    id: 3,
    username: "Kyon",
    avatar: '/images/profiles/avatar-3.jpg',
}

const endo:User = {
    id: 4,
    username: "guardiaN",
    avatar: '/images/profiles/avatar-4.jpg',
}

const ace:User = {
    id: 5,
    username: "Fire Fist Ace",
    avatar: '/images/profiles/avatar-5.jpg',
}

export default {
    pokeballMan, 
    nagatoroIchibanFan, 
    kyon,
    endo,
    ace
}