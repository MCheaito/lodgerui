import { TodosService } from './todos.service';
import { EnumsService} from './enums.service';

export const services: any[] = [TodosService,EnumsService];

export * from './todos.service';
export * from './enums.service';

