import { Component, Input, OnInit } from '@angular/core';
import { Message, User } from '../models/models';
import { UserService } from '../services/services';
@Component( {
    selector: 'app-chat-message',
    templateUrl: './chat-message.component.html',
    styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

    @Input() message: Message;
    currentUser: User;
    incoming: boolean;

    constructor( public userService: UserService ) {
    }

    ngOnInit(): void {
        this.userService.currentUser
            .subscribe(
            ( user: User ) => {
                this.currentUser = user;
                if ( this.message.author && user ) {
                    this.incoming = this.message.author.id !== user.id;
                }
            });
    }

}
