
describe('Cadastro', function (){
    function AcessoCadastro(){
        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
        cy.contains('Formulário').click()
        cy.contains('Criar Usuários').click()
    }
    function CamposObrigatorios(){
        cy.get('#user_name').type('Usuario')
        cy.get('#user_lastname').type('Teste')
        cy.get('#user_email').type('usuario.teste@email.com')
    }
    function CamposNaoObrigatorios(){
        cy.get('#user_address').type('Rua A')
        cy.get('#user_university').type('Universidade Federal de Lavras')
        cy.get('#user_profile').type('QA')
        cy.get('#user_gender').type('Masculino')
        cy.get('#user_age').type('27')
    }
    function Editar(){
        cy.get('#user_name').clear().type('João')
        cy.get('#user_lastname').clear().type('Silva')
        cy.get('#user_email').clear().type('joao.silva@email.com')
    }
    it('Validação mensagem de cadastro sem "Nome"',function(){
        AcessoCadastro()
        cy.get('#user_lastname').type('Teste')
        cy.get('#user_email').type('usuario.teste@email.com')
        CamposNaoObrigatorios()
        cy.get(".green").click()
        cy.contains("Name translation missing: pt-BR.activerecord.errors.models.user.attributes.name.blank")
       
    })
    it('Validação mensagem de cadastro sem "Ultimo Nome"',function(){
        AcessoCadastro()
        cy.get('#user_name').type('Usuario')
        cy.get('#user_email').type('usuario.teste@email.com')
        CamposNaoObrigatorios()
        cy.get(".green").click()
    })
    it('Validação mensagem de cadastro sem "Email"',function(){
        AcessoCadastro()
        cy.get('#user_name').type('Usuario')
        cy.get('#user_lastname').type('Teste')
        CamposNaoObrigatorios()
        cy.get(".green").click()
    })

    it('Validação Cadastro Realizado',function(){
        AcessoCadastro()
        CamposObrigatorios()
        CamposNaoObrigatorios()
        cy.get(".green").click()
        cy.contains("Usuário Criado com sucesso")
    })
    it('Validação Cadastro Realizado sem campos não obrigatorios',function(){
        AcessoCadastro()
        CamposObrigatorios()
        cy.get(".green").click()
        cy.contains("Usuário Criado com sucesso")
    })
    it('Validação botão "Voltar"',function(){
        AcessoCadastro()
        cy.contains('Voltar').click()
        cy.contains("Bem vindo ao Site de Automação do Batista.")
    })
    it('Validação Editar Usuário',function(){
        AcessoCadastro()
        CamposObrigatorios()
        CamposNaoObrigatorios()
        cy.get(".green").click()
        cy.contains("Editar").click()
        Editar()
        cy.get(".green").click()
    })
})