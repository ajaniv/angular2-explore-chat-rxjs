import { Component } from '@angular/core';
import { MessageService, ThreadService, UserService } from './services/services';
import { ChatExampleData } from './chat-data';
@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor( public messagesService: MessageService,
        public threadsService: ThreadService,
        public userService: UserService ) {
        ChatExampleData.init( messagesService, threadsService, userService );
    }
}
