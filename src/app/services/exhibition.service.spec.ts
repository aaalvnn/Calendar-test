import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExhibitionService, Exhibition } from './exhibition.service';

describe('ExhibitionService', () => {
  let service: ExhibitionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExhibitionService]
    });

    service = TestBed.inject(ExhibitionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve exhibitions from the API via GET', () => {
    const dummyExhibitions: Exhibition[] = [
      { id: '1', title: 'Exhibition 1', date: '2024-07-20', venue: '1' },
      { id: '2', title: 'Exhibition 2', date: '2024-07-21', venue: '2' }
    ];

    service.getExhibitions().subscribe(exhibitions => {
      expect(exhibitions.length).toBe(2);
      expect(exhibitions).toEqual(dummyExhibitions);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyExhibitions);
  });

  it('should add an exhibition via POST', () => {
    const newExhibition: Exhibition = { title: 'New Exhibition', date: '2024-07-22', venue: '1' };

    service.addExhibition(newExhibition).subscribe(exhibition => {
      expect(exhibition).toEqual({ ...newExhibition, id: '123' });
    });

    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('POST');
    request.flush({ ...newExhibition, id: '123' });
  });

});
