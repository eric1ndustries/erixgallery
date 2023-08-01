import HomeButton from '@component/components/HomeButton'

export default function Resume() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <iframe
                src="/resume2023.pdf"
                title="Resume 2023"
                height="900"
                width="900"
            />
            <HomeButton />
        </main>
    )
}
