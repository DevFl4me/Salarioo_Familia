// VARIAVEIS GLOBAIS
var salarioContribuicao1 = 806.80;
var salarioContribuicao2 = 1212.64;
var valorPorFilhos;

// FUNCTION BUTTON
    function getCalculo(){
        // GET VALORES
        let inputnome=document.querySelector("#name").value;
        let inputQtdFilhos=Number(document.querySelector("#filhos").value);
        let inputSalario=Number(document.querySelector("#salario").value).toFixed(2);
        let valorPorFilhos=0;
    
        // GET CALCULO
    
            if(inputSalario <= salarioContribuicao1){
                valorPorFilhos=41.37*inputQtdFilhos; 
                resposta(valorPorFilhos,inputnome);
            }else if(inputSalario >= salarioContribuicao1 && inputSalario <= salarioContribuicao2){
                valorPorFilhos=29.161*inputQtdFilhos;
                resposta(valorPorFilhos,inputnome);
            }else{
                resposta(valorPorFilhos,inputnome);
            };
};
// RESULTADO
    function resposta(valorPorFilhos,inputnome){
        let resultadoDiv=document.querySelector("#resultado");

        if(valorPorFilhos <= 0){
            resultadoDiv.innerHTML=`
            
            <div id="dados">

            ${inputnome}, você não tem direito ao salário família!
            
            </div>
            `
        }else{
            resultadoDiv.innerHTML=`
            
            <div id="dados">

            ${inputnome}, você tem direito ao salário família!
            o salário família é de R$${valorPorFilhos}

            </div>
            `
        };
    };
