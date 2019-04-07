import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TIPost } from 'src/app/shared/models/testing.models/post.model';
import { LocalStorageService } from '../../localStorage';
import { HttpService } from '../http.service';
const dumyPost: TIPost[] = [
    { userId: '1', id: 1, body: 'Hello world', title: 'Testin Angular' },
    { userId: '2', id: 2, body: 'Hello world2', title: 'Testin Angular2' }
];
describe('HttpService', () => {
    let service: HttpService;
    let httpMock: HttpTestingController
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpService, LocalStorageService]
        });
        service = TestBed.get(HttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('Should POST form the api', () => {
        service.post<TIPost[]>('', dumyPost).subscribe(posts => {
            expect(posts).toEqual(dumyPost);
        });
        const request = httpMock.expectOne(`${service.URL}`);
        expect(request.request.method).toBe('POST');
        request.flush(dumyPost);
    });


    it('Should  GET form the api', () => {
        service.get<TIPost[]>('').subscribe(posts => {
            expect(posts).toEqual(dumyPost);
        });
        const request = httpMock.expectOne(`${service.URL}`);
        expect(request.request.method).toBe('GET');
        request.flush(dumyPost);
    });
    it('Should  DELETE form the api', () => {
        service.delete('').subscribe(posts => {
            expect(posts).toEqual(dumyPost);
        });
        const request = httpMock.expectOne(`${service.URL}`);
        expect(request.request.method).toBe('DELETE');
        request.flush(dumyPost);   
    });
    it('Should UPDATE form the api', () => {
        service.edit<TIPost[]>('', dumyPost).subscribe(posts => {
            expect(posts).toEqual(dumyPost);
        });
        const request = httpMock.expectOne(`${service.URL}`);
        expect(request.request.method).toBe('PUT');
        request.flush(dumyPost);   
    });
});


