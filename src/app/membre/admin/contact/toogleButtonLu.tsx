"use client"

import { useTransition } from "react"
import { changerStatutLu } from "./action"

interface ToggleLuProps {
    id: number
    estLu: boolean
}

export default function ToggleButtonLu({ id, estLu }: ToggleLuProps) {
    const [isPending, startTransition] = useTransition()

    const handleToggle = () => {
        startTransition(async () => {
            await changerStatutLu(id, !estLu)
        })
    }

    return (
        <div className="flex items-center gap-2">

            <button
                type="button"
                role="switch"
                aria-checked={estLu}
                disabled={isPending}
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none disabled:opacity-50 ${estLu ? "bg-green-600" : "bg-gray-300"
                    }`}
            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${estLu ? "translate-x-6" : "translate-x-1"
                        }`}
                />
            </button>

            <span className="text-xs font-medium text-white">
                {estLu ? "Lu" : "Non lu"}
            </span>
        </div>
    )
}