# Acessibilidade :wheelchair:



### Como utilizar a ferramenta:

* Crie dentro da pasta assets>vendor uma pasta chamada acessibilidade e adicione as pastas da pasta assets
* Adicione o css: `<link *rel*="stylesheet" *type*="text/css" *href*="assets/vendor/acessibilidade/css/acessibility.css">`
* Adicione o javascript:   `<script type="text/javascript" src="assets/js/acessibility.js"></script>`
* Copie o codigo que está dentro da tag body e insira no seu código;



Em caso de utilizar PHP(utilizando componentização):

* Crie dentro da pasta assets>vendor uma pasta chamada acessibilidade e adicione as pastas da pasta assets
* Adicione o css: `<link *rel*="stylesheet" *type*="text/css" *href*="assets/vendor/acessibilidade/css/acessibility.css">`
* Adicione o javascript:   `<script type="text/javascript" src="assets/js/acessibility.js"></script>`
* Altere o nome do arquivo acessibility.html para acessibility.php, apague todo o conteudo que não esteja dentro da tag body.
* mova o arquivo acessibility.php para assets>partias
* Em components>blocks>header.php adicione: `<?php include 'partials/acessibility.php'; ?>`

### Funcionamento da Ferramenta

#### Contraste 

**Variáveis:**

*htmlTag* : Essa constante recebe o elemento html através do DOM;

*stateConstrast*: Essa variável recebe o sessionStorage que será responsável por armazenar qual contraste o usuário selecionou e passar esse estado para as demais páginas internas que o usuário acessar ou caso a index seja recarregada. O 'estado' da funcionalidade contraste será esquecida quando o usuário fechar a página.

*radioButtons*: Essa variável recebe um array com todos os elementos do tipo checkboxs com o name 'constraste'



**Funções**

A função *radioConstrast* é responsável por aplicar as classes no html e fazer com que as cores, filtros e demais propriedades sejam aplicadas.

No inicio da função removemos o atributo class retirando todas as classes de contraste que estejam aplicadas na tag html e body, para evitar que as classes sejam sobrepostas.

As estruturas condicionais na função servem para adicionar as classes a tag html, dependendo  de qual checkbox esteja com o atributo *checked*. Dentro de cada condicional também é passado o valor para o sessionStorage.



#### Texto

A funções de allteração de tamanho da fonte, Espaçamento do texto, Espaçamento das linhas, lupa e destacar link funcionam de forma parecida, utilizando a funcionalidade de aumento de fonte.

**Variaveis**

*tamFont*: recebe a sessionStorage que será responsável por armazenar o valor do input que será utilizado quando o usuário mudar de página ou recarregar a index.

*RangeFontTag*: recebe o input através do DOM



**Funções**

A função *tamDaFonte* é chamada quando o usuário altera a posição do range e primeiro armazena o valor na sessionStorage através do valor da variável *tamanhoFonte*

Sempre que a função é chamada as classes tamFont1, tamFont2 e tamFont3 são removidas para que evite a sobreposição das classes.

As condicionais da função servem para definir quais das classes do css serão passadas para o html.

No switch_case logo abaixo da função serve passar o valor do sessionStorage pra página atual do usuário, o trecho do código: *rangeFontTag.setAttribute("value", tamFont);* altera a posição do indicador do range para a ultima opção passada pelo usuário.

No caso da necessidade de alterar os valores de tamanho da fonte, espaçamento do texto, espaçamento das letras e  zoom devem ser realizados no arquivo acessibility.css através das classes: *.tamFontx*, *.espacoTextx*, *espacoLinex* . o x ao fim das classe representa os números 1,2 e 3 sendo estes números o tamanho selecionado pelo usuario no input.

 

### Soluções para possiveis problemas	

Em primeiro lugar, é preciso deixar claro que cada projeto tem suas particularidades então será necessário fazer adaptações no arquivo acessibility.css, principalmente nas funções de modo escuro e autocontraste.

A classe responsável por acionar o autocontraste é a *.contrast_preto_branco_amarelo*
 e a classe responsável pelo modo escuro é a classe *.dark*

Em alguns casos como de algumas imagens ficando 'não-visiveis' por conta do fundo escuro no modo escuro ou autocontraste podem ser resolvido através do arquivo acessibility.js. Basta alterar o atributo src da imagem dentro de um dos if's da função que ativa as opções de contraste inserindo uma imagem de cor diferente. 

**Exemplo:**

`var imgExemplo = document.getElementById("imgLogo");`

`function radioContrast(){`

​    `htmlTag.removeAttribute("class");`

​    `document.body.removeAttribute("class");`

​    `if(radioButtons[0].checked){`

​        `htmlTag.classList.add("contrast_preto_branco_amarelo");`

​        `stateContrast = window.sessionStorage.setItem("contrast", "1");`

​		`**imgExemplo.removeAttibute(src);**`

​		`**imgExemplo.setAttribute("src", "url-nova-imagem.jpg")**`

​    `}`

`}`

Também é necessário fazer as mesma alterações na *sessionStorage* dentro do *switch case* para que a imagem não seja removida ao usuário recarregar ou mudar de página.

**Exemplo:**

`case "1":` 
		`htmlTag.classList.add("contrast_preto_branco_amarelo");`
		`document.getElementById("autocontraste").setAttribute("checked", "checked");`
		`imgExemplo.removeAttribute("src");`
		`imgExemplo.setAttribute("src", "url-nova-imagem.jpg");`
		`break;`





