import {NextRequest, NextResponse} from "next/server";
import {createMiddlewareSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {redirect} from "next/navigation";


export async function middleware(req:NextRequest){
    const res = NextResponse.next()
    const supabase = createMiddlewareSupabaseClient({req,res})
    const {
        data:{session},
    } = await  supabase.auth.getSession()

    if(!session && req.nextUrl.pathname.startsWith('/auth/todo-crud')){
        const redirectUrl = req.nextUrl.clone()
        redirectUrl.pathname = '/auth'
        return NextResponse.redirect(redirectUrl)


    return res
}