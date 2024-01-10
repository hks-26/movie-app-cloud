import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';
import { BackendService } from '../../service/backend.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let service: BackendService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent,NavBarComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service= TestBed.inject(BackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check get type  ',()=>{
    expect(service instanceof(BackendService)).toBeTruthy();
  });

  it('check inject type',inject([BackendService],(instanceService:BackendService)=>{
    expect(instanceService).toBeTruthy();
  }));


});
