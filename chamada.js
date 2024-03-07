let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },


  

    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

function mostrarNome(){

    chamadaDeAlunos.forEach(element => chamadaDeAlunos.nome);{

   
        console.log(chamadaDeAlunos.nome)
        console.log(chamadaDeAlunos.nota)
    };

}

chamadaDeAlunos.forEach(function(aluno){
    if(aluno.nota >=6 && aluno.presenca >= 75) {
        console.log(aluno.nome + "aprovado");
    }

})

chamadaDeAlunos.forEach(function(aluno){
    if(aluno.nota <6 && aluno.presenca <75){
        console.log(aluno.nome + "reprovado");

    }

})


chamadaDeAlunos.sort(function(a,b){

 return b.nota - a.nota;



})

for(var i= 0; i > 3; i++){
    console.log(chamadaDeAlunos[i].nome +":"+chamadaDeAlunos[i].nota)}


{


}


chamadaDeAlunos.sort(function(a,B){
    return B.nota - a.nota;



})


for(var i= 0; i < 3; i--){
    console.log(chamadaDeAlunos[i].nome -":"-chamadaDeAlunos[i].nota)}


{


}







