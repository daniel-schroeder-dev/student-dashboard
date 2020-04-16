/* eslint-disable import/first */
import student1 from '../fixtures/student-images/women-1.jpg';
import student2 from '../fixtures/student-images/men-1.jpg';
import student3 from '../fixtures/student-images/women-2.jpg';
import student4 from '../fixtures/student-images/men-2.jpg';
import student5 from '../fixtures/student-images/women-3.jpg';
import student6 from '../fixtures/student-images/men-3.jpg';
import student7 from '../fixtures/student-images/women-4.jpg';
import student8 from '../fixtures/student-images/men-4.jpg';
import student9 from '../fixtures/student-images/women-5.jpg';
import student10 from '../fixtures/student-images/men-5.jpg';

const faker = require('faker');

const images = [
  { 
    id: 1,
    src: student1, 
    name: faker.name.findName(),
  },
  { 
    id: 2,
    src: student2, 
    name: faker.name.findName(),
  },
  { 
    id: 3,
    src: student3, 
    name: faker.name.findName(),
  },
  { 
    id: 4,
    src: student4, 
    name: faker.name.findName(),
  },
  { 
    id: 5,
    src: student5, 
    name: faker.name.findName(),
  },
  { 
    id: 6,
    src: student6,
    name: faker.name.findName(),
  },
  { 
    id: 7,
    src: student7, 
    name: faker.name.findName(),
  },
  { 
    id: 8,
    src: student8, 
    name: faker.name.findName(),
  },
  { 
    id: 9,
    src: student9, 
    name: faker.name.findName(),
  },
  { 
    id: 10,
    src: student10,
    name: faker.name.findName(),
  },
];

export default images;
