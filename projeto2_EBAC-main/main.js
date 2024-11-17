document.getElementById("form-contato").addEventListener("submit", function(event) {
        event.preventDefault(); 
        var nome = document.getElementById("nome").value;
        var telefone = document.getElementById("telefone").value;
        
        
        var tabela = document.getElementById("tabela-contatos");
        var linhas = tabela.getElementsByTagName("tr");
        var telefoneExiste = false;
        for (var i = 1; i < linhas.length; i++) { 
            var numeroTelefone = linhas[i].getElementsByTagName("td")[1].textContent;
            if (numeroTelefone === telefone) {
                telefoneExiste = true;
                break;
            }
        }
        
        if (!telefoneExiste) {
            adicionarContato(nome, telefone);
            document.getElementById("form-contato").reset(); 
        } else {
            alert("Este número de telefone já está na agenda.");
        }
    });

    function adicionarContato(nome, telefone) {
        var tabela = document.getElementById("tabela-contatos").getElementsByTagName("tbody")[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);
        var colunaNome = novaLinha.insertCell(0);
        var colunaTelefone = novaLinha.insertCell(1);
        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;
    }