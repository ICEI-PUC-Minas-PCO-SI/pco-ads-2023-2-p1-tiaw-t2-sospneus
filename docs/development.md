# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve exibir uma apresentação do Sistema e seu propósito. | ALTA | index.html |
|RF-002| Usuários autenticados podem solicitar serviços. | ALTA | cadastro-demanda.html |
|RF-003| O sistema deve permitir que o usuário comente e dêem nota referente ao serviço prestado. | MÉDIA | cadastro-demanda.html |
|RF-004| Sistema deve disponibilizar tela com histórico do serviço prestado (Formulário com os dados completos). | MÉDIA | historico-demanda.html |

### Requisitos Não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel. | ALTA | Todas as telas |
|RNF-002| O sistema deve processar requisições do usuário em no máximo 3 segundos. | ALTA | cadastro-demanda.html |
|RNF-003| O sistema deve tomar como referência a localização do usuario e do prestador de serviço. | MÉDIA | cadastro-demanda.html |
|RNF-004| Sistema deve buscar atualizações de acordo com o Google Maps, para melhor precisão. | ALTA | cadastro-demanda.html |

## Descrição das estruturas:

## Notícia
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro incremental)  | Identificador único da demanda aberta            | 10000001                                              |
| Nome do usuario         | Texto             |Nome do usuário do Sistema                         | Maria da Silva Dias                                   |
| Demanda      | Texto             | Descrição da demanda                      | Estou com o pneu traseiro furado de um Palio 2008                            |
| Data da demanda | Data  | Data e hora em que a demanda foi aberta | 15/09/2023 14:32                                              |

