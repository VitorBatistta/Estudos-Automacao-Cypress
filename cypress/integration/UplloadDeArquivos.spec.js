

describe('Cadastro', function (){
    const FileInput = "#upload"
    function AcessoUpload(){
        cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
        cy.contains('Outros').click()
        cy.contains('Upload de Arquivo').click()
    }
    it('Validação upload de arquivo',function(){
        AcessoUpload()
        
        cy.get(FileInput).attachFile("example.json")
     
    })
})