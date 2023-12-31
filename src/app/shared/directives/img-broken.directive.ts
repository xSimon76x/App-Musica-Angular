import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // solo aplicado para elementos html img
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log("La img de la cancion de nombre: '" + elNative.alt + "'. A reventado ");
    // Imagen de respaldo, en caso de que alguna no cargue
    elNative.src = 'https://marketing4ecommerce.mx/wp-content/uploads/2015/01/song_list.jpg'

  }

  constructor( private elHost: ElementRef) { }

}
