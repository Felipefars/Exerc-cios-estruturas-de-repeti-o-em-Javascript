let saldo = 1000;
let opcao;

do {
    
    console.log("\n*** Menu do Banco ***");
    console.log("1: Ver Saldo");
    console.log("2: Sacar");
    console.log("3: Depositar");
    console.log("4: Sair");
    opcao = prompt("Escolha uma opção (1-4):");

    opcao = parseInt(opcao);

    switch(opcao) {
        case 1:
          
            console.log(`Seu saldo atual é: R$${saldo}`);
            break;
        
        case 2:
          
            let saque = prompt("Digite o valor que deseja sacar: ");
            saque = parseFloat(saque);
            if (saque > saldo) {
                console.log("Saldo insuficiente!");
            } else if (saque <= 0) {
                console.log("Valor de saque inválido!");
            } else {
                saldo -= saque;
                console.log(`Você sacou R$${saque}. Saldo atual: R$${saldo}`);
            }
            break;

        case 3:
           
            let deposito = prompt("Digite o valor que deseja depositar: ");
            deposito = parseFloat(deposito);
            if (deposito <= 0) {
                console.log("Valor de depósito inválido!");
            } else {
                saldo += deposito;
                console.log(`Você depositou R$${deposito}. Saldo atual: R$${saldo}`);
            }
            break;

        case 4:
            
            console.log("Obrigado por usar o Banco. Até logo!");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
            break;
    }
} while (opcao !== 4);
