import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ExhibitionsComponent } from '../components/exhibitions/exhibitions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, ExhibitionsComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass the selected venue from header to exhibitions', () => {
    const headerComponent: HeaderComponent = fixture.debugElement.children[0].componentInstance;
    const exhibitionsComponent: ExhibitionsComponent = fixture.debugElement.children[1].componentInstance;

    spyOn(exhibitionsComponent, 'onVenueChanged');

    headerComponent.venueChanged.emit('1');
    fixture.detectChanges();

    expect(exhibitionsComponent.onVenueChanged).toHaveBeenCalled
  });
});
