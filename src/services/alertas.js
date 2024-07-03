import Swal from 'sweetalert2'

const acceptPopUp = (title, confirmText, denyText) => {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(confirmText, '', 'success');
          resolve(true);
        } else if (result.isDenied) {
          Swal.fire(denyText, '', 'info');
          resolve(false);
        } else {
          resolve(false);
        }
      });
    });
  };

export {acceptPopUp}