import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        //Importaciones de modulos u objetos usados
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        //Declarar componentes o elementos, usados en el componente principal
        LoginPageComponent,
        
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //TODO Tu primer enunciado el cual debe de asegurar lo siguiente
  //TODO Debe de asegurarse que el formulario sea invalido cuando ingrese dato erroneo

  it('Deberia de retornar "invalido" el formulario', () => {
    //TODO Arrange
    const mockCredentials = {
      email:'0x0x02302s/',
      password: '111111111111111111'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    //TODO Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    //TODO Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('Deberia de retornar "valido" el formulario', () => {
    //TODO Arrange
    const mockCredentials = {
      email:'test@test.com',
      password: '12345678'
    }
    const emailForm = component.formLogin.get('email');
    const passwordForm = component.formLogin.get('password');

    //TODO Act
    emailForm?.setValue(mockCredentials.email);
    passwordForm?.setValue(mockCredentials.password);

    //TODO Assert
    expect(component.formLogin.invalid).toEqual(false);
  });

  it('El botón deberia de tener la palabra "Iniciar sesión"', () => {
    //TODO Arrange
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))

    //TODO Act
    const getInnerText = elementRef.nativeElement.innerText;

    //TODO Assert
    expect(getInnerText).toEqual('Iniciar sesión');
  });

});
