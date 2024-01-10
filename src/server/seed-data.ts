import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const fakePostHistory = () => faker.helpers.multiple(() => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}), {count: {min: 1, max: 3}});

const fakeUser = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  posts: {
    create: faker.helpers.multiple(() => ({
      published: faker.datatype.boolean(),
      likes: faker.number.int({min: 0, max: 100}),
      postHistory: {
        create: fakePostHistory(),
      },
    }), {count: {min: 3, max: 5}}),
  }
});

const fakeComments = (postId: string, userIds: string[]) => faker.helpers.multiple(() => ({
  likes: faker.number.int({min: 0, max: 10}),
  text: faker.lorem.sentence(),
  postId,
  authorId: faker.helpers.arrayElement(userIds),
}), {count: {min: 1, max: 3}});


// const fakeUser = () => ({
//   name: faker.person.fullName(),
//   email: faker.internet.email(),
// });

// const fakePost = (authorId: ) => ({
//   published: faker.datatype.boolean(),
//   likes: faker.number.int({min: 0, max: 100}),
// });

// const fakePosts = () => faker.helpers.multiple(() => ({
export const generateSeedData = async (): Promise<void> => {
  const prisma = new PrismaClient();

  const fakeUsers = faker.helpers.multiple(() => fakeUser(), {count: 10});

  const users = await Promise.all(
    fakeUsers.map(async (user) => await prisma.user.create({data: user}))
  );
  
  const userIds = users.map(user => user.id);
  const posts = await prisma.post.findMany({select: {id: true}});
  const comments = posts.flatMap(post => fakeComments(post.id, userIds));

  await await Promise.all(
    comments.map(async (comment) => await prisma.comment.create({data: comment}))
  );
};
