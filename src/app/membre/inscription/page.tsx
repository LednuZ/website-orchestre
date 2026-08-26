import { getSessionUser } from "@/lib/auth"
import { redirect } from "next/navigation"
import RegisterForm from "./registerForm"

export default async function Page() {
    const user = await getSessionUser()

    if (user) {
        redirect('/membre')
    }

    return (
        <div className='flex flex-col max-w-md mx-auto'>
            <h1 className="text-center pb-5">S'inscrire</h1>
            <RegisterForm />
        </div>
    )
}