import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
    const getLayout =   Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

    return getLayout(<Component {...pageProps} />);
}