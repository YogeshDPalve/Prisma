import { PrismaClient } from "@prisma/client";
import { clearScreenDown } from "readline";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const newUser = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(newUser);
}

insertUser("user@email", "password", "John", "Doe");

type UpdateParams = {
  firstName: string;
  lastName: string;
};
clearScreenDown;
async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
	const updatedUser = await prisma.user.update({
		email: username,
	},
		data: {
			firstName,
			lastName

	})
}
