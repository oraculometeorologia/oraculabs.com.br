export default async function() {
    if (typeof window !== "undefined") {
        const router = useRouter()
        
        router.afterEach(async (to, from) => {
            console.log('to:', to)
            if (to.hash) {
                const targetElement = document.querySelector(to.hash)

                if (targetElement) {
                    await targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    })
                    return
                }
            }

            window.scrollTo({ top: 0, behavior: "smooth"})
        })
    }
}