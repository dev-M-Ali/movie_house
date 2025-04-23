import Link from "next/link"

export default function NotFoundPage() {

    //I hope this is user-friendly enough

    return <div>
        <h1>We could not find what you are looking for.</h1>
        <h1>＞﹏＜</h1>
        <Link href="/"><button>Let's go home!</button></Link>

        <h1>Still here? We understand, everyone likes our company!</h1>
        <h1>＼(((￣(￣(￣▽￣)￣)￣)))／</h1>
    </div>
}