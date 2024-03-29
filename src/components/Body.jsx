import styles from "./Body.module.css"
import Bodybox from "./Bodybox";

const categories = [
    {
        category: "Food",
        emoji: "🥘",
        places: [
            { name: "Leo's Pizzeria", href: "https://maps.app.goo.gl/xHNWT8jckqdMbgDh6" },
            { name: "Kheer, Roseate House", href: "https://maps.app.goo.gl/Lo6wSQnQwaNFtw1c8" },
            { name: "Little Saigon", href: "https://maps.app.goo.gl/t2Zr1oxGrdkjrVPC6" },
            { name: "Jai Maa Durga Chaat Corner", href: "https://maps.app.goo.gl/ZeP5tfLQuuQAWMZs8" },
            { name: "Shudh Vaishno Dhaba", href: "https://maps.app.goo.gl/2eNXZCQUsbDfnpDd7" },
            { name: "Kori's", href: "https://maps.app.goo.gl/srBt7DFogLoUJsteA" },
            { name: "Tee Dee", href: "https://maps.app.goo.gl/X3Kxt2mvqUXqsXyL9" },
            { name: "Jain Chawal Wale", href: "https://maps.app.goo.gl/Y2cXm7TcVkQxUwtTA" },
            { name: "Amrik Sukhdev", href: "https://maps.app.goo.gl/K3h1gTsYERkqvjie9" },
            { name: "Jhakkas Pav Bhaji", href: "https://maps.app.goo.gl/PdwEx1h3CbwJJ9Sh9" },
        ]
    },
    {
        category: "Coffee",
        emoji: "☕",
        places: [
            { name: "Sardar-Ji-Bakhsh", href: "https://maps.app.goo.gl/7UdGdrEFUqTKRUhZA" },
            { name: "Perch", href: "https://maps.app.goo.gl/3b1SergcLE9MWESx6" },
            { name: "Coffee Kala", href: "https://maps.app.goo.gl/2FNyz6utjhdtWqQY6" },
            { name: "Cafe Tesu", href: "https://maps.app.goo.gl/YegfPftxwyTQaKVy9" },
            { name: "Coffee Home", href: "https://maps.app.goo.gl/2TahhZNXKyoAdHS27" },
            { name: "Cha Bar", href: "https://maps.app.goo.gl/gDMcniMKGt22wt1h9" },
            { name: "Coffee Bond", href: "https://maps.app.goo.gl/mfdUiGWhz8abizWU8" },
            { name: "Subko at Sidecar", href: "https://maps.app.goo.gl/ugXuKF47jSve17Mx9" },
            { name: "Cafe Dori", href: "https://maps.app.goo.gl/wnZT3jJiPZnjRxRS8" },
            { name: "Depaul's", href: "https://maps.app.goo.gl/6h1LyVAgQCz1DPWD6" },
        ]
    },
    {
        category: "Gyms",
        emoji: "🏋️",
        places: [
            { name: "367Crossfit", href: "https://maps.app.goo.gl/WNaZ9kH9ft7XPTM4A" },
            { name: "Crosstrain Fight Club", href: "https://maps.app.goo.gl/zjDhWAFHVAQkSgq88" },
            { name: "BJJ India", href: "https://maps.app.goo.gl/3tRYmyA7JmUAors67" },
            { name: "Warrior's Cove", href: "https://maps.app.goo.gl/gaRhkMd7xMoyaQSy8" },
            { name: "BoulderBox", href: "https://maps.app.goo.gl/r99Hqk7iGzN54NPN6" },
            { name: "CalFunc", href: "https://maps.app.goo.gl/eKc6q4QYWewmi7zy7" },
        ]
    },
    {
        category: "Co-working (we don't work)",
        emoji: "💻",
        places: [
            { name: "WeWork", href: "https://maps.app.goo.gl/rwY6zupSWkYKub6G6" },
            { name: "HKV Social", href: "https://maps.app.goo.gl/vpyH6GfZos9U6nc18" },
            { name: "Third Wave, CP", href: "https://maps.app.goo.gl/JkQtmwvnzgAQAK4c6" },
            { name: "Sardar-Ji-Bakhsh", href: "https://maps.app.goo.gl/7UdGdrEFUqTKRUhZA" },
            { name: "Perch (2)", href: "https://maps.app.goo.gl/pxnnLQx7qUzsC3KH7" },
            { name: "Starbucks", href: "https://maps.app.goo.gl/aMg62JCg7Cn2jXUb9" }
        ]
    },
    {
        category: "Chole Bhature",
        emoji: "🫓",
        places: [
            { name: "Giani Di Hatti", href: "https://maps.app.goo.gl/e3Z2ZJafp2u4TWj37" },
            { name: "Sita Ram", href: "https://maps.app.goo.gl/FL3rJPwxxU2cCcz56" },
            { name: "Ram Chole Bhature", href: "https://maps.app.goo.gl/3cqhpd8Wg41YG7az5" },
            { name: "Standard Corner", href: "https://maps.app.goo.gl/1NU4458LoVUqTjgt9" },
            { name: "Chache Di Hatti", href: "https://maps.app.goo.gl/9W7EmD1wic8Zx46i9" },
            { name: "Om Corner", href: "https://maps.app.goo.gl/KZLxw4CzPdDwBHkp6" },
            { name: "Nagpal Chole Bhature", href: "https://maps.app.goo.gl/qwu5T1WmKAob8HEN8" },
            { name: "Prem Di Hatti", href: "https://maps.app.goo.gl/qRFpbyxdpfCiaabQ7" },
            { name: "Roshan Di Kulfi", href: "https://maps.app.goo.gl/7nXu7gTYULYzHRt67" },
            { name: "Bhogal", href: "https://maps.app.goo.gl/QW72xZXAvmyeGHrG7" }
        ]
    },
    {
        category: "Where's the party at?",
        emoji: "🪩",
        places: [
            { name: "Bohca", href: "https://maps.app.goo.gl/2PYpSh1eCFMjCZyL9" },
            { name: "Dear Donna", href: "https://maps.app.goo.gl/wBQVFiDsynCqHp2d6" },
            { name: "YOUnion", href: "https://maps.app.goo.gl/PU5RmmjtpiH7WjKw8" },
            { name: "Banter", href: "https://maps.app.goo.gl/7bLrBYGhRqvxkWBg7" },
            { name: "Baardos La Citta", href: "https://maps.app.goo.gl/qyL2H8qsExBXjDXcA" },
            { name: "Diablo", href: "https://maps.app.goo.gl/JMmb9KkYb5nMDKrn6" }
        ]
    },
    {
        category: "Gedi Routes",
        emoji: "🏎️",
        places: [
            { name: "Ridge Road", href: "https://maps.app.goo.gl/xYxZ2zic4Rj8ddu47" },
            { name: "Around India Gate", href: "https://maps.app.goo.gl/Ne9v88QATekaVRjv6" },
            { name: "MG Road, Gurgaon", href: "https://maps.app.goo.gl/ubnso1KibzcNZgZ79" },
            { name: "Ring Road", href: "https://maps.app.goo.gl/sAQFoXbzvp8yHqa4A" },
        ]
    },
    {
        category: "Date Plans",
        emoji: "💐",
        places: [
            { name: "Khan Market", href: "https://maps.app.goo.gl/QXS3Shfn4kpUXsFA7" },
            { name: "Diggin, Chanakyapuri", href: "https://maps.app.goo.gl/FhqACTWEAAfr55Sr6" },
            { name: "Triveni", href: "https://maps.app.goo.gl/mqUu9wRQ63cSeX2c8" },
            { name: "Nehru Planetarium", href: "https://maps.app.goo.gl/5VGCoyA5H56ofJ7B9" },
            { name: "The Palette Cafe", href: "https://maps.app.goo.gl/i6WQAHzuAS4f21FG9" },
            { name: "Piano Man Jazz Club", href: "https://maps.app.goo.gl/aL8Ed6P9Suh9p3ui7" },
            { name: "Leos@621", href: "https://www.instagram.com/leos.621/" },
            { name: "Lodhi Art District", href: "https://maps.app.goo.gl/hEoQh5mtBoECvfHq5" },
            { name: "Sarojini Nagar", href: "https://maps.app.goo.gl/c2zzivzsWzchPATv9" },
            { name: "Sunder Nursery", href: "https://maps.app.goo.gl/Xdt9hpTAFBBknFaN9" },
        ]
    },
]


export default function Body() {
    return (
        <>
            <div className={styles.mainbodydiv}>
                <Bodybox categories={categories} />

            </div>
            <div className={styles.footerDiv}>
                <p>
                    Have more places in mind? Share them <a href="https://airtable.com/apphy3M7GYj9sJXGm/pagWrl7lQguxCb2mH/form" target="_blank" rel="noopener noreferrer">here</a>!
                </p>
                <p>
                    Made by <a href="https://twitter.com/paarugsethi" target="_blank" rel="noopener noreferrer">@paarugsethi</a>.
                </p>
            </div>
        </>
    );
}