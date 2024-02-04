import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//TODO Componente de prueba
@Component({
  template: '<img class="testing-direct" appImgBroken src="srckMock">'
})
class TestComponent {
  public srckMock: any = null;
}

//TODO La prueba de ImgBroken es la siguiente
describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  // (fixture) Nos ayuda a obtener las propiedades necesarias para poder interacturar con el componente
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {

    const mockElement = new ElementRef('');

    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('💹💹TestComponent deberia instanciarse correctamente', () => {

    expect(component).toBeTruthy();

  });

  it('💹💹Directiva deberia de cambiar la imagen por un base64', (done:  DoneFn) => {

    //TODO Arrange
    
    const beforeImgElement = fixture.debugElement.nativeElement.querySelector('img');
    const beforeImgSrc = beforeImgElement?.src //TODO Tenemos la url antes de ser cambiada por la directiva
    component.srckMock = undefined;
    // const imgLinkTest = 'https://phantom-marca.unidadeditorial.es/540b56905f8b83fd8b0d1e7229d879ff/resize/828/f/jpg/assets/multimedia/imagenes/2023/03/01/16776867288099.jpg';

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.nativeElement.querySelector('img');
      const afterImgSrc = afterImgElement?.src //TODO Tenemos la url despues de ser cambiada por la directiva

      expect(afterImgSrc).toMatch('data:image');
      done();
    }, 3000);


  });

});
