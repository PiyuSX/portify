"use client"
import { useEffect, useState } from "react"

const AgeCounter = ({ dob }) => {
    const [age, setAge] = useState(0)


    useEffect(() => {
        const birthDate = new Date(`${dob}T00:00:00Z`);

        const updateAge = () => {
            const elapsed = Date.now() - birthDate.getTime()
            const years = elapsed / (365.2425 * 24 * 60 * 60 * 1000)
            setAge(years)
        }

        updateAge()

        const interval = setInterval(updateAge, 50)

        return () => clearInterval(interval)
    }, [dob])

    if (age === null) return null

    return <span>{age.toFixed(9)}</span>
}

export default AgeCounter