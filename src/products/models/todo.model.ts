export class Todo
{
    id:number; 
    description:string; 
    category:string;
    subCategory:string; 
    assignedTo:string; 
    severity:string;
    createdBy:string;
    createdOn:Date;
    dueBy:Date;
    prior:number; 
    done:boolean;
    relatedPerson:string[];
    remarks:string;
}