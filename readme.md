# Desafio Amigo Secreto

## Índice
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Demonstração da Aplicação](#demonstração-da-aplicação)
- [Acesso ao Projeto](#acesso-ao-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Pessoas Contribuidoras](#pessoas-contribuidoras)


## Descrição
O **Desafio Amigo Secreto** foi uma atividade proposta na primeira etapa do **ONE NEXT EDUCATION**, uma parceria entre a Oracle e a Alura, que, semestralmente distribui vagas gratuitas para formar novos profissionais na área de programação. Neste projeto, fomos desafiados a colocar nossa lógica de programação(que estudamos no módulo) em prática ao desenvolver um projeto amigo secreto.

Neste projeto, o objetivo principal foi criar uma lista de pessoas e, a partir dessa lista, sortear aleatoriamente uma delas. 


## Funcionalidades

O código contém dois blocos principais: um responsável por adicionar pessoas à lista e outro dedicado ao sorteio de um amigo secreto entre os participantes.

- **Adicionar Pessoas à Lista**: Permite incluir pessoas na lista de participantes do sorteio.
- **Sortear Amigo Secreto**: Sorteia aleatoriamente um amigo secreto dentre as pessoas cadastradas na lista.

De forma mais técnica, no bloco **Adicionar Pessoas à Lista**, usamos uma array no JS para armazenar os nomes e dentro da função adicionarNome(), usamos um metodo push para que os nomes fossem inseridos ao final da lista, em seguida, os métodos map e join foram utilizados para que a array e seus elemntos fosse 'tranformados' em <li> no HTML
Além disso, nesse bloco, a cada nome adicionado é somado somado a variavel numeroDeNomes +1, para nos auxiliar no próximo bloco, o sorteio de nomes.

No bloco, **Sortear Amigo Secreto**, utilizei o Math.random para gerar um número aleatorio de acordo com o valor da variavel numeroDeNomes, em seguida informei ao código que o resultado que deveria ser exibido era igual ao nome inserido no indice indice sorteado anteriormente.

Além disso, coloquei algumas informações serem exibidas no console, como, array e número de nomes na lista atualizados a cada clique e o indice sorteado.

Decidi também manter alguns comentarios durante o código para me ajudar no desenvolvimento e releitura do mesmo.


## Demonstração da Aplicação



## Acesso ao Projeto
Você pode acessar a demonstração do projeto pelo link: 

[Desafio Amigo Secreto](https://desafio-amigo-secreto-nu.vercel.app/)


## Tecnologias utilizadas
O projeto foi desenvolvido com as seguintes tecnologias:

![Javascript](https://camo.githubusercontent.com/d02d3808d64cbb1d1512689cbbdc9dac2186bca44408b53847327a7a09568b9d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176617363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
![HTML](https://camo.githubusercontent.com/10c7a8fa2cf317cc7c4af6f13efac086a9f0ea010f0dfc746c94e5cde310b339/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465) 
![CSS](https://camo.githubusercontent.com/001d4637c08910acf414f12a1682879a1f99867f6f9a3550f0541e7d03dd34a2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)


## Pessoas Contribuidoras
Este projeto foi realizado por Kimberly Souza em parceria com:

- **ONE NEXT EDUCATION**
- **Alura**
