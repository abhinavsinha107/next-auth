import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async ({ email, password }) => {
        if (typeof email !== "string")
          throw new CredentialsSignin({ message: "Please enter valid email" });
        const user = { email, id: "as" };
        if (password !== "passcode")
          throw new CredentialsSignin({ message: "Please enter valid email" });
        else return user;
      },
    }),
  ],
});
