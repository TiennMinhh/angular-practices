import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);  
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ])
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserSerive on init', () => {
    fixture.detectChanges(); // triggers ngOnInit
    expect(userServiceSpy).toHaveBeenCalled();
  })

  it('should retrieve from UserService when refreshButton is clicked', () => {
    fixture.detectChanges(); // triggers ngOnInit

    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  })

});
