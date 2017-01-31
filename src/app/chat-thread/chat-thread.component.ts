import { Component, Input, OnInit } from '@angular/core';
import { Thread } from '../models/models';
import { ThreadService } from '../services/services';
@Component( {
    selector: 'app-chat-thread',
    templateUrl: './chat-thread.component.html',
    styleUrls: ['./chat-thread.component.css']
})

export class ChatThreadComponent implements OnInit {

    @Input() thread: Thread;

    selected: boolean = false;  // tslint:disable-line

    constructor( public threadsService: ThreadService ) {
    }

    ngOnInit(): void {
        this.threadsService.currentThread
            .subscribe(( currentThread: Thread ) => {
                this.selected = currentThread &&
                    this.thread &&
                    ( currentThread.id === this.thread.id );
            });
    }

    clicked( event: any ): void {
        this.threadsService.setCurrentThread( this.thread );
        event.preventDefault();
    }
}

