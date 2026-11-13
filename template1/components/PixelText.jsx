import Image from "next/image"

export default function PixelText() {
    return (
        <>
            <Image
                src="/piyusx-light.png"
                alt="PiyusX"
                width={300}
                height={120}
                className="block w-full max-w-[300px] dark:hidden"
            />
            <Image
                src="/piyusx-dark.png"
                alt="PiyusX"
                width={300}
                height={120}
                className="hidden w-full max-w-[300px] dark:block"
            />
        </>
    )
}