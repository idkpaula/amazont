import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaItemComponent } from './categoria-item.component';

describe('CategoriaItemComponent', () => {
  let component: CategoriaItemComponent;
  let fixture: ComponentFixture<CategoriaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
