import Link from 'next/link'

export default function Resume() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <iframe
                src="/resume2023.pdf"
                title="Resume 2023"
                height="1000"
                width="1000"
            />
            <Link href="/"> Home </Link>
        </main>
    )

}