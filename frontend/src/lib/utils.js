export function fromatMeassageTimer(date) {
    return new Date(date).toLocaleTimeString("en-us", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })
}