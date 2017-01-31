import { messageServiceInjectables } from './message.service';
import { threadServiceInjectables } from './thread.service';
import { userServiceInjectables } from './user.service';

export * from './message.service';
export * from './thread.service';
export * from './user.service';

export const servicesInjectables: Array<any> = [
  messageServiceInjectables,
  threadServiceInjectables,
  userServiceInjectables
];
