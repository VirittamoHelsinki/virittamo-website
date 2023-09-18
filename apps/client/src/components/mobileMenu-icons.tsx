import { motion } from "framer-motion";

function Hamburger() {
    return (
        <motion.svg
            viewBox="0 0 100 80"
            width="30"
            height="30"
            fill="#050505"
            id="header__hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
            }}
        >
            <rect width="100" height="14"></rect>
            <rect y="30" width="100" height="14"></rect>
            <rect y="60" width="100" height="14"></rect>
        </motion.svg>
    )
}

function Hamburger_X() {
    return (
        <motion.svg
            viewBox="0 0 100 100"
            width="30"
            height="30"
            fill="#050505"
            id="header__hamburger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.5,
            }}
        >
            <rect
                x="0"
                y="42"
                width="100"
                height="16"
                transform="rotate(45 50 50)"
            ></rect>
            <rect
                x="0"
                y="42"
                width="100"
                height="14"
                transform="rotate(-45 50 50)"
            ></rect>
        </motion.svg>
    )
}

export { Hamburger, Hamburger_X }
