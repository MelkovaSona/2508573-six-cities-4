﻿import faker from 'faker';
import { Review } from '../entities/Review';
import { UserData } from '../entities/User';
import { generateUser } from './User';

export const generateReview = (userData: UserData = generateUser()): Review => ({
  id: faker.datatype.uuid(),
  date: faker.date.past().toISOString(),
  user: userData,
  comment: faker.lorem.paragraph(),
  rating: faker.datatype.number({ min: 1, max: 5 }),
});
