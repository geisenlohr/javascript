var idade = 14
if (idade < 16) {
    console.log(`Você é tem ${idade} de idade e não pode votar`)
}else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
