# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Gerando e Servindo um Projeto Angular usando Angular-CLI

Isso deve criar uma nova pasta chamada conFusion dentro de sua pasta Angular e criar o aplicativo Angular nessa pasta.

ng new ConFusion

Isso compilará o projeto e abrirá uma guia em seu navegador padrão no endereço http://localhost:4200 .

ng serve --open

## Visão geral da arquitetura de aplicativos com Angular

Os aplicativos em angular são construídos como uma combinaçãode HTML e TypeScript ou JavaScript.
Usaremos o TypeScript como a linguagem de escolha para construir nosso aplicativo Angular.O próprio Angular consiste em várias bibliotecas,algumas delas chamadas bibliotecas e outras são bibliotecas opcionais.Dependendo do tipo de aplicativo Angular que você está tentando construir,você incluirá alguns deles em seu aplicativo.Como já aprendemos, Angular é um framework JavaScript e vamos aproveitar isso para construir nosso aplicativo.

Para resumir a aplicação Angular é modular em sua natureza e consistirá em vários componentes, juntamente com seus templates, que compóem a aplicação. Os componentes , e outras partes do aplicativo Angular, como  os serviços , serão organizados  em módulos. Esses Módulos por sua vez serão utilizados por módulos de nível superior.

Então um aplicativo Angular pode ser visto como tendo uma arquitetura modular, com um módulo raiz no topo, que conta com a ajuda de outros módulos organizados em sua hierrquia de modulos. 

![image](https://user-images.githubusercontent.com/52088444/186511694-9186f51c-c6d1-4ec4-b367-f7507137642f.png)


O módulo raiz padrão do angular é chamado de app.module.


## Angular material instalação CLI

ng add @angular/material

## Flex layout

Getting Started
Start by installing the Angular Layout library from npm

npm i -s @angular/flex-layout @angular/cdk

Next, you'll need to import the Layout module in your app's module.

app.module.ts

import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});
After that is configured, you can use the Angular Layout attributes in your HTML tags for flex layout:

<div fxLayout="row" fxLayoutAlign="space-between">
</div>
Check out all of the available options for using Angular Layout in your application.

## Instalando hammer js

npm install --save angular-hammer


## Inversão de controle

Na engenharia de software , a inversão de controle ( IoC ) é um princípio de programação. IoC inverte o fluxo de controle em comparação com o fluxo de controle tradicional. Em IoC, partes personalizadas de um programa de computador recebem o fluxo de controle de uma estrutura genérica . Uma arquitetura de software com esse design inverte o controle em relação à programação procedural tradicional : na programação tradicional, o código personalizado que expressa o objetivo do programa chamaem bibliotecas reutilizáveis ​​para cuidar de tarefas genéricas, mas com a inversão de controle, é a estrutura que chama o código personalizado ou específico da tarefa.
A inversão de controle é usada para aumentar a modularidade do programa e torná-lo extensível , [1] e tem aplicações em programação orientada a objetos e outros paradigmas de programação . 

## Componentes angulares

Um componente é uma "versão" simplificada de uma diretiva, que basicamente são marcadores ou extensões de elementos que compõem o DOM, estes marcadores informam ao AngularJS para inserir alguma funcionalidade específica a esse elemento.

Uma das principais vantagens do uso de componentes é criar trechos de códigos reaproveitáveis de maneira trivial, o que substitui a criação de diretivas com configurações mais complexas.

![image](https://user-images.githubusercontent.com/52088444/186658826-e1395cfe-9adb-4108-b385-a1d883bad2a7.png)

O componente é definido especificando o código e também especificando o modelo correspondente.

Então, dentro do código você pode definir propriedades e métodos que estará acessível a partir do seu modelo.

Nos metadados, no decorator de componentes,você especificou o nome do arquivo de modelo como uma das propriedades para sua classe de componente. Da mesma forma, quaisquer propriedades e métodos que você definir em seu componente estará acessível a partir de seu modelo.

Não é apenas isso , você também pode ter um Event Binding  do seu modelo de volta aos seus componentes.Portanto, se algum evento for gerado em seus modelos, por exemplo clicar em um botão em seu modelo que pode acionar chamadas para métodos dentro do seu código e também um property binding É um método de ligação unidirecional, pois os valores vão do componente para a camada do modelo e as alterações feitas no componente atualizam as propriedades vinculadas no modelo

Os componentes em um aplicativo Angular podem ser organizados em uma hierarquia. Portanto, você sempre terá um componente raiz. Então, para nossa aplicação,o arquivo app.component.ts e o modelo HTML correspondente forma o componente raiz para nosso aplicativo e esse componente raiz pode conter componentes para baixo em uma hierarquia e podem incluir componentes na hierarquia.

Assim, você pode ter vários componentes sendo incluído em seu componente raiz e esses componentes, por sua vez, podem usar outros componentes que estão incluídos dentro deles.Portanto, essa hierarquia de componentes é o que permite projetar a tela do seu aplicativo.

## Componentes Angulares Parte 1

Adicionando um componente de menu

 use o comando ng generate da CLI para gerar um novo componente chamado menu da seguinte forma:

ng generate component menu

Isso criará os arquivos necessários para o componente de menu em uma pasta chamada menu e também importará esse componente para app.module.ts .

Em seguida, abra o arquivo app.component.html e adicione o seguinte após a barra de ferramentas:

<app-menu></app-menu>

Agora criaremos uma pasta para compartilhar(shared) , e usaremos como se fosse o banco de dados.

Em seguida, crie uma pasta chamada shared na pasta src/app . A esta pasta, adicione um arquivo chamado dish.ts (pratos do restaurante)com o seguinte código:

export class Dish {
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
}

Atualize menu.component.ts da seguinte forma para adicionar os dados de quatro itens de menu:

import { Dish } from '../shared/dish';
. . .

export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
    },
    {
      id: '1',
      name: 'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      featured: false,
      label: '',
      price: '1.99',
      description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      featured: false,
      label: 'New',
      price: '1.99',
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
    },
    {
      id: '3',
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      featured: false,
      label: '',
      price: '2.99',
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
    }
   ];
. . .
}

Em seguida, atualize o modelo menu.component.html da seguinte forma:

<div class="container"
     fxLayout="column"
     fxLayoutGap="10px">

  <mat-list fxFlex>
    <mat-list-item *ngFor="let dish of dishes">
      <img matListAvatar src={{dish.image}} alt={{dish.name}}>
      <h1 matLine> {{dish.name}} </h1>
      <p matLine>
        <span> {{dish.description}} </span>
      </p>
    </mat-list-item>
  </mat-list>

</div>

Em seguida, abra app.module.ts e atualize-o da seguinte forma:


import { MatListModule } from '@angular/material/list';

. . .

  imports: [
    . . .,
    MatListModule,
    . . .
  ],

. . .


Adicione a seguinte classe CSS ao arquivo styles.scss:

.container {
    margin: 20px;
    display:flex;
}

## Diretivas estruturais

As diretivas são marcadores em um elemento DOM (como um atributo) que informam ao Angular para anexar um comportamento especificado a um elemento existente.

As diretivas existem desde o AngularJS; na nova versão são usadas com componentes, principalmente para criar tags personalizadas em uma aplicação Angular. Existem muitas diretivas prontas que podemos usar e também podemos criar nossas próprias diretivas.

Uma diretiva pode ser definida em Angular como uma classe com o decorator @Directive

As diretivas  nos ajudam a permitir dar instruções ao angular sobre como renderizar modelos para o DOM.


Um componente é um tipo especial de diretiva que tem seu próprio modelo associado a ele, também temos outros dois tipos diretivas estruturais e atributos.

Algumas diretivas podem mudar completamente a estrutura da saída do template do componente. Essas diretivas podem alterar o layout do DOM adicionando e removendo elementos DOM de visualização. Podemos classificar essas diretivas em estruturais :

NgIf
NgFor
NgSwitch, NgSwitchWhen, NgSwitchDefault

O que percebemos ao usar as diretivas estruturais  é que eles nos ajudam a alterar o layout, ajudando a Adicionar, substiruir e remover elementos do DOM. Ou seja você pode usar diretivas estruturais a um elemnto do html, normalmente uma div ou um item de lista no DOM e também para seus filhos.
Uma das diretivas estruturais mais comuns é a *ngIf. Um exemplo se aplicar a diretiva *ngIf:
<div *ngIf="selectedDish">...</div>
Se o selectDish não for nulo, então este div será adicionado ao DOM.Se for nulo esse selectDish não será adicionado ao DOM então vocâ literalmente removendo do DOM se o valor for falso.

NgFor
<mat-list-item *ngFor=let dish of dishes></mat-lis>
Isso nos permite iterar sobre a matriz de pratos(dishes)

Outras diretivas podem simplesmente alterar a aparência dos itens gerados pelo modelo. Vamos chamar essas diretivas não estruturais :

NgSwitch
Permite que adicione seletivamente certos elementos ao DOM especificando uma condição, dependendo do que a condição for avaliada.

NgClass
NgStyle
NgControlName
NgModel



## Diretiva ngFor

Esta é uma diretiva para processar cada item de um objeto iterável, gerando uma marcação para cada um. Ela é conhecida como uma diretiva estrutural porque pode alterar o layout do DOM adicionando e removendo elementos DOM de visualização.

Assim, a diretiva ngFor é útil para gerar conteúdo repetido, como uma lista de clientes, elementos de um menu suspenso e assim por diante. Cada item processado do iterável tem variáveis ​​disponíveis em seu contexto de modelo, como mostrado na tabela abaixo:

Variável	Descrição
  item	 Ex: ngFor="#nome of nomes". Neste caso o item possui a variável nome

- ngFor:  O atributo ngFor me permite iterar sobre uma matriz de objetos.Então, "dish" aqui são uma variedade de objetos de dishes.Então, quando eu digo let dish of dishes ,este dish me dará acesso a cada elemento de minha matriz de dishes e eu itero sobre cada elemento da matriz e então estarei criando este conteúdo para cada um deles.Então, este item de lista vazio,essencialmente atua como um loop for de sua linguagem de computador tradicional e, em seguida, itera sobrea  lista de dishes(pratos) e, em seguida, apresenta cada um deles na minha tela.


## Data Binding

Mecanismo para coordenar o fluxo de informação entre o model e o componente. Ou entre o DOM e o component.

- Template -> DOM
- cOMPONENT -> pROPERTY

No nível do componente, é algum tipo de propriedade ou um método que precisa ser fornecido ao modelo ou invocado do DOM. 
Ou no lado do modelo, pode ser alguma informação que é exigido pelo modelo para ser renderizado no DOM ou mesmo do DOM capturado e enviado de volta ao seu componente.

Então, tudo isso requer que os dados fluam do componente parao modelo ou eventos que são coletados do DOM oupara ser enviado de volta ao seu componente para que ele atue sobre esses eventos.Isso pode ser manipulado no framework angular usando quatro diferentes tipos de fluxo de informações que resumiremos.

Interação entre o component e o template:

## Aplicativos de Página Unica (Single Page Applications)

Design SPA using Angular

Use the Angular router module to construct SPA

Um aplicativo de página única é um aplicativo web ou um site que se encaixa em uma única página. Você não
precisa recarregar a página toda vez que um usuario interage com o aplicativo.
A UX é mais como um desktop ou um aplicativo nativo.
A maioria dos recursos necessários para o aplicativo são baixados na primeira instância, com o carregamento da primeira página.

Depois disso apenas parte das páginas são redesenhadas  com base na interação do usuário, e isso acontece sem exigir que seja dado 
uma ida e volta no servidor.


## ActivedRoute Service

Essa lib facilita a recuperação de parâmetros.

O serviço ActivedRoute fornece três coisas diferentes.
Fornece acesso a informações sobre uma rota associada a um componente carregado em uma tomada. 
Use para percorrer a RouterStateárvore e extrair informações dos nós.

é aqui que a biblioteca do Angular Router forneceum serviço chamado como o serviço ActivatedRoute.Este serviço ActivatedRoute pode ser aproveitado para poder recuperar esses valores. Agora, em particular, para facilitar essa recuperação de parâmetros,o serviço ActivatedRoute fornece três coisas diferentes:

- url: um Observable de um caminho(path) de um rota, representada como um array de strings para cada caminho de rota. ActivedRoute fornece um Observable.
- params: (o serviço ActivesRoute também fornece outro Observable chamado params)disponibiliza para um componente os valores
de parametros que estão sendo passdos como o parametro route. Então esse parametro Observable é aquele que vamos usar para recuperar esse valor dentro do component.
- queryParams(parametros de consulta): podemos passar parametros de consulta para outro componente. Um Observable que contaim o parametro de consulta avalia todas as rotas.


## Angular Template- driven Forms

- formularios orientados a modelos

imports:
- agrupa itens de formulário
import { MatFormFieldModule} from '@angular/material/form-field'
- suporta o campo de formulario input HTML
import { MatInputModule} from '@angular/material/input'
- suporta checkbox
import { MatCheckboxModule} from '@angular/material/checkbox';
- suporta formulários orientados por modelo em angular
import { FormsModule} from '@angular/forms';



## Angular form validation

HTML5 já vem com algum suporte incorporado para a validação de formulários.
Mas quando usamos Angular na nossa aplicação temos que desativar a validação de formulário HTML5,
para que a responsabilidade seja transferida para o Aplicativo Angular. Incluimos o atributo <form novalidate>


![image](https://user-images.githubusercontent.com/52088444/191495280-12db9075-9576-4bdc-bfce-75b2d665518a.png)

Nesse caso, o formulário de login e o nome de usuário são todas variáveis de referência de modelo.
Essas variáveis de referência de modelo podem ser usadas dentro do nosso modelo Angular para fazer referência a esses campos.
Então, no próprio modelo,você pode verificar os estados de controle para esses campos, incluindo coisas como se o campo é válido,
ou tem alguns erros.

## Control States

![image](https://user-images.githubusercontent.com/52088444/191495878-a8536e71-5817-4724-8fa3-af6dc6392147.png)

vamos aproveitaras variáveis de referência do modelo para reunir o estado de controle para verificar as informações.Assim, 
por exemplo, você pode dizer username.pristine dentro do seu template.Então, isso se refere à verificação do estado,se o 
controle específico está no estado original,significando que não foi tocado e modificado pelo usuário até agora.O sujo
é o oposto do puro,o que significa que quando um campo está sujo,isso significa que o campo foi modificado pelo usuário no passado.
Assim, por exemplo, você pode verificar se declarou um campo como obrigatório,isso significa que você esperava que o usuário para digitar
pelo menos algumas informações no campo. A ausência de informações no campo em seu formulário significa que o campo é inválido.
Da mesma forma, você pode especificar o o comprimento máximo de um valor de campo,para que você possa verificar 
facilmente se o número de caracteresdentro de um campo é aproximadamente o comprimento principal,ou abaixo do comprimento
máximo, e assim por diante.

![image](https://user-images.githubusercontent.com/52088444/191496569-91eeb57e-e662-431b-b095-26fd4a92ec34.png)
  
  Da mesma forma, para campos específicos,você pode verificar se o campo foi preenchido ou não.Portanto, se você especificar que um campo específico é obrigatório especificando o atributo obrigatório para o campo de entrada,então você pode verificar para ver se há um erro deo tipo necessário gerado para o elemento de campo específico lá.
  Então, no seu código, por exemplo,você pode até especificar para informar o usuário sobreo fato de que um determinado campo está incorreto.Você usa o erro mat para significar isso.Então, a tag mat-error, que vem de,novamente, o suporte de forma de material Angular como você vê aqui,se o ngIf for verdadeiro,então essa mensagem será exibida abaixo no campo de entrada,e semelhante ao campo de entrada,será marcado em vermelho na tela.Então, isso é algo que você vai verificar egarantindo e também entregando mensagens de erro ao usuário.

  ![image](https://user-images.githubusercontent.com/52088444/191497491-810abdc4-b6c9-4cc2-9b5e-de9b4c90bd5c.png)

## Validando a entrada em formulários orientados por modelo

Para adicionar validação a um formulário orientado por modelo, você adiciona os mesmos atributos de validação que faria com
validação de formulário HTML nativo
. Angular usa diretivas para combinar esses atributos com funções validadoras na estrutura.

Toda vez que o valor de um controle de formulário é alterado, o Angular executa a validação e gera uma lista de erros de validação que resulta em um INVALID status ou null, que resulta em um status VALID.

Você pode então inspecionar o estado do controle exportando ngModelpara uma variável de modelo local. O exemplo a seguir exporta NgModelpara uma variável chamada name:
<input type="text" id="name" name="name" class="form-control"
      required minlength="4" appForbiddenName="bob"
      [(ngModel)]="hero.name" #name="ngModel">

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert">

  <div *ngIf="name.errors?.['required']">
    Name is required.
  </div>
  <div *ngIf="name.errors?.['minlength']">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors?.['forbiddenName']">
    Name cannot be Bob.
  </div>

</div>

ex: https://angular.io/guide/form-validation


## Reactive Forms

Os formulários reativos fornecem uma abordagem baseada em modelo para lidar com entradas de formulário cujos valores mudam ao longo do tempo.

Os formulários reativos usam uma abordagem explícita e imutável para gerenciar o estado de um formulário em um determinado momento. Cada alteração no estado do formulário retorna um novo estado, que mantém a integridade do modelo entre as alterações. Formulários reativos são construídos em torno de fluxos observáveis , onde entradas e valores de formulários são fornecidos como fluxos de valores de entrada, que podem ser acessados ​​de forma síncrona.

Os formulários reativos também fornecem um caminho direto para o teste, pois você tem certeza de que seus dados são consistentes e previsíveis quando solicitados. Quaisquer consumidores dos fluxos têm acesso para manipular esses dados com segurança.

Os formulários reativos diferem dos formulários orientados por modelo de maneiras distintas. Os formulários reativos fornecem acesso síncrono ao modelo de dados, imutabilidade com operadores observáveis ​​e rastreamento de alterações por meio de fluxos observáveis.

Os formulários orientados por modelo permitem que o acesso direto modifique os dados em seu modelo, mas são menos explícitos do que os formulários reativos porque dependem de diretivas incorporadas ao modelo, juntamente com dados mutáveis ​​para rastrear alterações de forma assíncrona.

sobre formulários: https://angular.io/guide/forms-overview

Os formulários Reactives são suportados para algumas classes que estão disponíveis para biblioteca de formulários angular.
Um deles é a classe :

- FormControl: que alimenta o controle de forma individual e também permite rastrear o valor desses limites e fazer validação desse elemento. 
- FormControl: group de FormControl , portanto quando você deseja organizar FormControls juntos como um grupo e em seguida rastrear informações sobre esses grupos como um todo , então o FormGroup aglomerar um grupo de FormGroup.
- Abstract Control: que é um resumo da classe baseada para classes FormControl, que também pode ser usado para nossa vantagem.
- FormArray: permite que você defina uma matriz numericamente indexaa de instancias AbstractControl.

FormBuilder: permite o uso para criar formulários dentro do nosso código typescript e em seguida ser capaz de amarrá-los com os controles de modelo. Para usar a classe FormBuilder você importa a partir dos forms do angular. E em seguida voc~e pode usar o contrutor de formulário.

## Populando Form Model

- Form Model e Data Model são separados;
- Todas as alterações que você fizer nos elementos DOM fluirão para o modelo de formulário
e você tem que refletir explicitamente os dados do formulário de volta para esse modelo de dados;
- Dois métodos polulares para popular(preencher) o form model (modelo de formulário) a partir de um modelo de dados:
    - setValue(): que nos permite atribuir  cada controle de formulário a um valor específico do modelo de dados ;
    - patchValue():permite atualizar apenas alguns controles dentro do seu modelo de formulário. Assim que voc~e obter o delo de dados do backend, do modelo de dados você pode aplicar os valores em seu modelo de formulário ou mapear os valores do seu modelo de dados em seu modelo de formulário, muitas vezes vamos criar o modelo de dados, que espelha de perto a estrutura do formulário.


Validadores utilizando FormBuilder

Aplicando os validadores podemos inspecionar as propriedades de controle para descobrir se há erros;

![image](https://user-images.githubusercontent.com/52088444/191755143-8fa744aa-ba85-4bc2-9b9b-7901bc7f3635.png)




## Referencias

- https://github.com/angular/flex-layout
- https://angular.io/
- https://angular.io/cli
- https://material.angular.io/
- https://material.angular.io/components/toolbar/overview
- https://github.com/angular/flex-layout
- https://github.com/angular/flex-layout/wiki/API-Documentation
- https://www.netguru.com/blog/imperative-vs-declarative
- https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282#.tt1k09l1d
- http://codenugget.co/2015/03/05/declarative-vs-imperative-programming-web.html
- https://github.com/angular/flex-layout/wiki/Using-Angular-CLI
- https://www.macoratti.net/18/06/ang_diret1.htm
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
- https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries




<<<<<<< HEAD
- teste
=======
>>>>>>> 7c391ba36625d709111eefd266a910795e92af7d
