
# Atividade Avaliativa III - Segunda Chamada - Prática

- Curso - Desenvolvimento de Sistemas
- Unidade Curricular - Lógica de Programação
- Docente - Gustavo Roberto de Souza

## Orientações Gerais
- A avaliação deverá ser realizada individualmente.
- Não é permitido o uso do celular durante a realização da atividade.
- Cada questão vale 2 pontos.
- Conceitos de entrada e saída de dados, variáveis, operadores e estruturas condicionais.
- A entrega deverá ser feita no AVA. Deve ser enviado apenas o link do repositório do github.

## Passo-a-Passo (Clonar e Entrega)
1. Você deve fazer um fork desse repositório, na parte superior dessa página clique na botão de fork. 
2. Depois disso, você deve clonar o repositório para o seu computador, usando o seguinte comando.
   1. Selecione uma pasta no computador.
   2. Abra o CMD (Terminal).
   3. Execute o seguinte comando `git clone <url_do_repositório>`
3. Abra no seu VS Code a pasta do projeto.
4. Desenvolva os exercícios.
5. Ao finalizar você precisa comittar e enviar novamente para o github suas modificações.
   1. Primeiro precisamos adicionar as alterações ao stage, usando o comando  `git add .`.
   2.  Depois disso, você vai de fato commitar, usando o comando `git commit -m "sua mensagem"`.
   3.  Por fim, você precisa fazer push para o github, com o comando `git push origin main`.
6. Por fim, você deve copiar o link do seu repositório e fazer o envio no AVA. 
   1. Você deve adicionar como comentário na entrega do AVA.

## Questões

### Questão 01
Escreva um algoritmo de uma calculadora. Você deve solicitar ao usuário dois números e a operação que o mesmo deseja fazer. Após isso,
o algoritmo deve realizar o calculo com base na operação e valores informados, e informar o resultado da operação.

---

### Questão 02
Escreva um algoritmo de conversão de moedas. Você deve solicitar um valor (Exemplo: 4.15), que será em real (R$), ao usuário e para qual moeda 
converter. Após isso, o algoritmo deve converter e mostrar o valor na moeda seleciona. Você precisa fazer a conversão para
apenas 2 moedas, Dólar e Euro. Você pode usar os seguintes valores. Dólar = 5.66, para Euro = 6.08;

Exemplo
- 1 Real = 5.66 Dólar
- 1 Real = 6.08 Euro

---

### Questão 03
Desenvolva um algoritmo de classificação de pessoas com base na idade. Você deve solicitar a idade ao usuário, e o algoritmo com
base na idade deve classificar como: Criança, Adolescente, Adulto ou Idoso.
- Criança - (0 até 12 anos);
- Adolescente - (13 até 17 anos);
- Adulto - (18 até 64 anos);
- Idoso - (mais de 65 anos);

---

### Questão 04
Escreva um algoritmo que receba três números inteiros e verifique se pelo menos dois deles são números iguais. Com base nisso, o
algoritmo deve informar ao usuário se há pelo menos 2 números iguais ou se são todos diferentes.

---

### Questão 05
Você deve desenvolver um algoritmo de uma calculadora de juros simples de empréstimo. Você deve solicitar ao usuário a valor do empréstimo,
a quantidade de anos do empréstimo e a taxa de juros. Ao final, você deve informar o valor do juros e o valor total a ser pago no empréstimo.
A formula para o calculo é o seguinte:

`VALOR JUROS = EMPRÉSTIMO x TEMPO x TAXA JUROS`

`VALOR TOTAL EMPRÉSTIMO = EMPRÉSTIMO + VALOR JUROS`

---


