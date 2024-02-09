import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        HistoryPageComponent,
        PlayListBodyComponent,
        SearchComponent,
        OrderListPipe
    ]
});
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
