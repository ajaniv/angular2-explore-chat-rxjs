import { Component,   ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadService } from '../services/services';
@Component( {
    selector: 'app-chat-threads',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './chat-threads.component.html',
    styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {

    threads: Observable<any>;

    constructor( public threadsService: ThreadService ) {
        this.threads = threadsService.orderedThreads;
    }

    ngOnInit() {
    }

}

