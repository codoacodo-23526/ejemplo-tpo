// /*ALERT */
// alert("Hola");


// /*PROMPT */
// let nombreApellido = prompt("Ingrese su nombre y apellido");
// alert("Hola " + nombreApellido);


// /*CONFIRM */
// let resultado2 = confirm("Desea continuar?")


// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )


//   const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false
//   })
  
//   swalWithBootstrapButtons.fire({
//     title: 'Estas seguro?',
//     text: "You won't be able to revert this!",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {
//       swalWithBootstrapButtons.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else if (
//       /* Read more about handling dismissals below */
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelled',
//         'Your imaginary file is safe :)',
//         'error'
//       )
//     }
//   })

