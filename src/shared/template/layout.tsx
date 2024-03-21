import Content from "./content";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex min-h-screen w-full flex-col ">
            <Header/>
            <Content>
                {children}
            </Content>
        </div>
    )
}