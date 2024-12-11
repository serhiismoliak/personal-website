import { signal, effect } from "@preact/signals"

export const backgroundColor = signal("#ffffff")

effect(() => {
    document.body.style.backgroundColor = backgroundColor.value
})