import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NbdMessageService {
    private subject = new Subject<any>();

    sendMessage(message: string, type: string = '') {
        this.subject.next({ msg: message, type });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}