# Especificações do Projeto

O projeto trará uma aplicação voltada para motoristas e motoqueiros(as) com funcionalidades para facilitar seu cotidiano, eles poderam solicitar serviços tais como: solicitar um borracheiro para realizar a troca, manutenção, montar, desmontar, calibrar, balancear e alinhar pneus. prestar socorro aos veículos que sofrem alguma colisão nas rodas, além de conseguir localizar borracharias próxima a sua localização atual cadastradas e verificadas pelo aplicativo

A aplicação será desenvolvida utilizando as seguintes tecnologias:
FrontEnd - HMTL+CSS, Bootstrap, Jquery
BackEnd  - JavaScript, LocalStorage, Crud Server Json

## Personas

* Cléber tem 42 anos, é um motorista de transporte escolar que diariamente realiza o transporte de crianças e adolescentes até suas determinadas escolas ou casas e para isso precisa sempre manter o seu veículo funcionando e seguro, o pior cenário possível seria que ocorresse algum problema no veículo que de alguma forma prejudicasse o seu trabalho, com isso, impossibilitando o transporte, como por exemplo o pneu furado. Em casos assim ele deve procurar uma borracharia para que conseguia realizar a manutenção do pneu furado, mas como achar uma borracharia em um lugar que ele nem mesmo conhece, nesse momento que o aplicativo entra, ele pode tanto pedir ajuda para o local possibilitando assim a finalização do trajeto ou encontrar a borracharia mais perto para ir até o local fazer a manutenção.
  
* Douglas de Andrade,35 anos ,classe alta ,graduado e pós graduado em direito,trabalha como advogado em um prédio de advocacia no centro de Contagem.
É um homem muito ocupado, ele trabalha de segunda a sexta ,no período de 8:00 até as 17:30.
Por ser um homem de negócios,sempre vai para o trabalho de terno.Caso ocorra algum contratempo,por exemplo seu pneu seja furado,o mesmo não possui condições de realizar a troca ,já que não pode em hipótese alguma suja seu "uniforme de trabalho".
O aplicativo perfeito para este tipo de pessoa,um cara ocupado que não tem tempo a perder.
O aplicativo o salvaria neste tipo de situação,pelo fato de que com apenas um simples toque ,ele é capaz de contatar o borracheiro mais próximo para ajudá-lo a lidar com este problema,para que ele consiga ultrapassar este obstáculo e chegar devidamente apto para mais um dia de trabalho.

* Larissa Rafaela tem 23 anos, acabou de se formar em Biomedicina e está a caminho de sua formatura, ao passar em um buraco não sinalizado teve um de seus pneus furados, ela deseja um tipo de serviço com que ela consiga solicitar um borracheiro próximo a ela para realizar a manutenção de seu pneu para que ela não se atrase e nem atrapalhe sua roupa de formanda.


* Carlos Nascimento, tem 58 anos, e aposentado e autonomo. Ele trabalha como motorista de aplicativo nas horas vagas, em media ele trabalha 6 horas por dia, e muitas das vezes seus deslocamentos são distantes e em locais deconhecidos. Em um dia do seu cotidiano, um de seus pneus furou e local onde ele se encontra e desconhecido , e ele precisa encontrar uma borracharia proxima e segura para realizar a troca do pneu furado,ou que o borracheiro se desloque ate o local, para fazer a troca do pneu.

* Júnior, 21 anos, estudante de Análise e Desenvolvimento de Sistemas e possui um carro de coleção. Júnior por conta de não ter tempo para calibrar os pneus de seu carro, ele resolve deixar o carro parado. O nosso aplicativo estaria disponivel para abrir um ChatBox ou mostrar quais são as borracharias proximas para o Júnior estar levando seu carro a borracharia ou o borracheiro se locomover até ele.

* Felipe Anderson, tem 25 anos ele é Tecnico Químico. Ele se desloca em media 30 km por dia para ir para o trabalho, ele faz esse deslocamento de moto, e muitas das vezes ele esta em locais desconhecidos, e não sabe de borracharias de qualidades e confiaveis. Durante uma trajetoria do seu cotidiano ele depara que um dos seus pneus furaram e que precisa de uma borracharia próxima para realizar a troca ou, que um borracheiro se desloque ate local do ocorrido para realizar a troca do pneu com segurança.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`    | QUERO/PRECISO ... `FUNCIONALIDADE`                        |PARA ... `MOTIVO/VALOR`                           |
|------------------------|-----------------------------------------------------------|--------------------------------------------------|
|Como motorista          | preciso de garantias da qualidade do serviço prestado     | para reduzir os riscos a que me exponho          |
|Como motorista          | gostaria de uma borracharia por perto                     | para ser atendido o mais breve possível          |
|Como motorista          | gostaria de saber das formas de pagamentos previamente    | para me ajudar a evitar mal-entendidos           |
|Como micro-empresário   | gostaria de aumentar o número de clientes                 | para aumentar o faturamento                      |
|Como micro-empresário   | gostaria de ter publicidade                               | para divulgar o bom serviço que presto           |
|Como micro-empresário   | gostaria de ter um registro do serviço prestado           | para poder recuperar em casos de intercorrências |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                        | Prioridade | Responsável         |
|------|-------------------------------------------------------------------------------|------------|---------------------|
|RF-001| Permitir que o usuário cadastre os dados                                      |    ALTA    | Davi                |
|RF-002| Permitir que o prestador de serviço cadastre os dados                         |    ALTA    | Arthur              |
|RF-003| Permitir que o usuário contacte com o prestador de serviço através do chatbox |    ALTA    | Matheus             |
|RF-004| Localizar borracharias próximas ao usuário                                    |    ALTA    | Fernando e Alexandre|
|RF-005| Permitir que o usuário comente e dêem nota referente ao serviço prestado      |    MEDIO   | Luis                |
|RF-006| Historico do serviço prestado (Formulário com os dados completos)             |    MEDIO   | Wagner              |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                                              |Prioridade |
|-------|-------------------------------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel                   |   ALTA    | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s                               |   BAIXA   | 
|RNF-003| O sistema tomara como referência a localização do usuario e do prestador de serviço |   ALTA    |
|RNF-004| Ocorrera atuaizações de acordo com o Google Maps, para melhor precisão              |   ALTA    |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Usuário precisa ter acesso a internet                 |

