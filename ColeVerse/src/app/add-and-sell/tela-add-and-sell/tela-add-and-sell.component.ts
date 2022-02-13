import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tela-add-and-sell',
  templateUrl: './tela-add-and-sell.component.html',
  styleUrls: ['./tela-add-and-sell.component.css']
})
export class TelaAddAndSellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    let timerInterval
    Swal.fire({
      title: 'Logging out!',
      html: 'You will LogOut in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    setTimeout(() => {
      this.router.navigate(['/'])
    }, 2000);

    

  }

}
