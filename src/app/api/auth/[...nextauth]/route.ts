import { api } from "@/utils/api";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        signIn: async (data) => {
            const profile = data.profile as any

            const username = profile.login
            const name = profile.name
            const email = profile.email
            const password = `${profile.id}!aA`
            const image = data.profile.image

            try {
                const user = await api.post("Users/SignUp", {
                    fullName: name,
                    username: username,
                    email: email,
                    password,
                    age: 18,
                    job: "string",
                    image: image ? image : ""
                })
            } catch (err) {
                console.log(err)
            }
            
            return true
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }