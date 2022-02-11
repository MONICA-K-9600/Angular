import { ReturnStatement } from "@angular/compiler";
import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
    allowNewServer =false;
    serverCreationStatus="No Task was created ";
    serverUser='TestServer';
    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000);
    }
    ngOnInit(){}
serverId=10;taskCreated=false;
serverName='monica';
servers=[];

onCreateServer(){
    this.taskCreated=true;
    this.serverCreationStatus='online';
}
onUpdateTaskName(event:any){
    this.serverUser = (<HTMLInputElement>event.target).value;}
getServerStatus(){
    return this.serverCreationStatus;
}

    getColor(){
    return this.serverCreationStatus == 'online'?'green':'red'
}
}