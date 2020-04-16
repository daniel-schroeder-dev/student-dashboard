/* eslint-disable import/first */
import teacher1 from '../fixtures/student-images/women-6.jpg';
import teacher2 from '../fixtures/student-images/men-6.jpg';
import teacher3 from '../fixtures/student-images/women-7.jpg';
import teacher4 from '../fixtures/student-images/men-7.jpg';
import teacher5 from '../fixtures/student-images/women-8.jpg';
import teacher6 from '../fixtures/student-images/men-8.jpg';
import teacher7 from '../fixtures/student-images/women-9.jpg';
import teacher8 from '../fixtures/student-images/men-9.jpg';
import teacher9 from '../fixtures/student-images/women-10.jpg';
import teacher10 from '../fixtures/student-images/men-10.jpg';

const faker = require('faker');

const teachers = [
  { 
    id: 1,
    src: teacher1, 
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'Biology 201',
  },
  { 
    id: 2,
    src: teacher2, 
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'English 100',
  },
  { 
    id: 3,
    src: teacher3, 
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'Trigonometry 331',
  },
  { 
    id: 4,
    src: teacher4, 
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'Physics 224',
  },
  { 
    id: 5,
    src: teacher5, 
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'Algebra 203',
  },
  { 
    id: 6,
    src: teacher6,
    description: faker.lorem.paragraph(),
    name: faker.name.findName(),
    course: 'Anatomy 400',
  },
  // { 
  //   id: 7,
  //   src: teacher7, 
  //   description: faker.lorem.paragraph(),
  //   name: faker.name.findName(),
  //   course: 'World History 108',
  // },
  // { 
  //   id: 8,
  //   src: teacher8, 
  //   description: faker.lorem.paragraph(),
  //   name: faker.name.findName(),
  //   course: 'Civics 230',
  // },
  // { 
  //   id: 9,
  //   src: teacher9, 
  //   description: faker.lorem.paragraph(),
  //   name: faker.name.findName(),
  //   course: 'German Studies 301',
  // },
  // { 
  //   id: 10,
  //   src: teacher10,
  //   description: faker.lorem.paragraph(),
  //   name: faker.name.findName(),
  //   course: 'Philosophy 233',
  // },
];

export default teachers;
