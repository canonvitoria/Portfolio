<?php
  //Variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $telefone = $_POST['telefone'];
  $assunto = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];
  $data_envio = date('d/m/Y');

  //Compo E-mail
  $arquivo = "
    <html>
      <p><b>Nome: </b>$nome</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Telefone: </b>$telefone</p>
      <p><b>Assunto: </b>$assunto</p>
      <p><b>Mensagem: </b>$mensagem</p>
      <p>Este e-mail foi enviado em <b>$data_envio</b></p>
    </html>
  ";
  
  //Emails para quem será enviado o formulário
  $destino = "contatovitoriacanon@gmail.com";
  $sobre = "Contato pelo formulário";

  //Este sempre deverá existir para garantir a exibição correta dos caracteres
  $headers  = "MIME-Version: 1.0\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\n";
  $headers .= "From: $nome <$email>";

  //Enviar
  mail($destino, $sobre, $arquivo, $headers);
  
  echo "<meta http-equiv='refresh' content='10;URL=../Pages/formulario.html'>";

?>