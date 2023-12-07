function alertaFormulario() {
    event.preventDefault();
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Formulário Enviado com Sucesso!",
        showConfirmButton: false,
        timer: 10000
        
    });
     
  }
function reg() {
    for (let i = 1; i <= 10; i++) {
        let textareaId = 'form' + i;
        document.getElementById(textareaId).value = '';
    }
        alertaFormulario();
  }

  // function mostrarGif() {
  //   const gifContainer = document.getElementById('gifContainer');
  //   gifContainer.style.display = 'block';
  // }
  // setTimeout(mostrarGif, 60000);

  // $(function(){
  //   $("#abrir-modal").click(function(){
  //     $("#modal-pedro").modal();
  //   });
  // });