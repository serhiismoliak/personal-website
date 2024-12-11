import { signal, effect } from "@preact/signals"

export const fontSize = signal(16)

effect(() => {
    (document.documentElement.style.fontSize = `${fontSize.value}px`)
})
