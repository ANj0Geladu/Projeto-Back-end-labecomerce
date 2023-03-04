const minhaVz = process.argv[2]
const comptdr = Math.floor((Math.random()*10))
const reusult = minhaVz + comptdr

reusult %2 == 0 ? console.log(`O resultado foi ${reusult}, voce ganhou`): console.log(`Voce perdeu, o resultado foi ${reusult}`)