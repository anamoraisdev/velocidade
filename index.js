// velocidade maxima 70km
// a cada 5km acima do limite 1 ponto 
// pontos > 12 pontos carteira suspensa


verificarVelocidade(100);
function verificarVelocidade (velocidade) {
    let limite = 70;
    let pontoPorKm = 5;
    if( velocidade <= 70)
    console.log("É isso ai! ");
    else {
        const pontos = Math.floor((velocidade - limite )/ pontoPorKm);
        if (pontos >= 12)
            console.log ("Carteira Suspensa");
        else {
            console.log("Pontos por velocidade:" +   pontos);
        }
    } 
}