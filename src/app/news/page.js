import Bento from "@/components/Bento";

export default function NewsPage() {    
    return (
        <main>
            <section>
            <div className="relative flex justify-start items-start" style={{height: 'calc(100vh - 80px)'}}>
                <div className=" w-full h-full absolute px-20 mt-10 gap-y-8 flex flex-col rounded-xl" style={{height: 'calc(100vh - 80px)'}}>
                    <h1 className=" font-bold text-3xl">Today news</h1>
                    <Bento />
                </div>
            </div>
            </section>
        </main>
    )
        
}