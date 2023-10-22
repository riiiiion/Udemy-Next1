import {mapIncludes} from "yaml/dist/compose/util-map-includes";

export default  function FirstLayout({
    children,
                                     }:{
    children:React.ReactNode
}){
    return (
        <main className="mt-6 text-center">
            <p>Layout 1</p>
            {children}
        </main>
    )
}