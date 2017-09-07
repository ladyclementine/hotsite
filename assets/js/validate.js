
$(function(){
    
    $("#form").validate({
    	rules: {
    		nome: {
    			required: true,
    			nome: true
    			
    		}, 
    		email: {
    			required: true,
    			email: true
    		}, 

    		wpp: {
    			required: true,
    			number: true
    		}


    	},
    	messages: {

    		nome: {
    			required: 'Não esqueça de colocar seu nome!'
    		},
    		email: {
    			required: 'Ei! Está faltando o email.',
    			email: 'Entre com um email válido'
    		},
    		wpp: {
    			required: 'Não esqueça de colocar seu whatsapp!',
    			number: 'Precisar ser um número, tá?'
    		}
    	}

    });
});