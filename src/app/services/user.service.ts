import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user';

@Injectable()
export class UserService {

    // `currentUser` contains the current user
    currentUser: Subject<User> = new BehaviorSubject<User>( null );

    public setCurrentUser( newUser: User ): void {
        this.currentUser.next( newUser );
    }
}

export const userServiceInjectables: Array<any> = [
    UserService
];
