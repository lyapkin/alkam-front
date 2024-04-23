import ContactsSection from "@/components/ContactsSection/ContactsSection";
import Footer from "@/components/Footer/Footer";
import React from "react";
import "../styles/style.scss";
import Providers from "./providers";

export const metadata = {
    title: "Алкам++",
    description: "Производство алюминиевых полуфабрикатов",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <Providers>{children}</Providers>
                <ContactsSection />
                <Footer top={false} />
            </body>
        </html>
    );
}
