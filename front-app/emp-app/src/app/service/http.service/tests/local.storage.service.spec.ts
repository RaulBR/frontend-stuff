import { TestBed } from '@angular/core/testing';
import { User } from 'src/app/shared/models/user.model';
import { LocalStorageService } from '../../localStorage';
const dumyUser: User = {
    email: 'TestMail@test.com',
    token: '1234567890123545678fsdfsdf',
    _id: 'qweqweqweqwe',
    password: 'not'
}
describe('HttpService', () => {
    let service: LocalStorageService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            // imports: [HttpClientTestingModule],
            providers: [LocalStorageService]
        });
        service = TestBed.get(LocalStorageService);
    });
    it('Should set correct data to local Storage', () => {
        const dumyUser: User = {
            email: 'TestMail@test.com',
            token: '1234567890123545678fsdfsdf',
            _id: 'qweqweqweqwe',
            password: 'not'
            
        }
        service.setToLocalStorage(dumyUser);
        expect(dumyUser.email).toEqual(service.getEmail());
        expect(dumyUser._id).toEqual(service.getId());
        expect(dumyUser.token).toEqual(service.getToken());
    });
    it('Should get email', () => {
        service.setToLocalStorage(dumyUser);
        expect(dumyUser.email).toEqual(service.getEmail());
    });
    it('Should get token', () => {
        service.setToLocalStorage(dumyUser);
        expect(dumyUser.token).toEqual(service.getToken());
        
    });
    it('Should get Id', () => {
        service.setToLocalStorage(dumyUser);
        expect(dumyUser._id).toEqual(service.getId());
        
    });
    it('Should get Id', () => {
        service.setToLocalStorage(dumyUser);
        expect(dumyUser._id).toEqual(service.getId());
        
    });
    it('Should Not get rong Id', () => {
        service.setToLocalStorage(dumyUser);
        expect(dumyUser._id).not.toEqual(service.getId()+'added');
        
    });
});


