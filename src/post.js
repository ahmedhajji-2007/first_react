export default function Post({name,win}){
    return(
        <div style={{width:"60%", height:"140px", border:"solid", margin:"50px", padding:"10px", borderBlockColor:"rgb(1, 34, 70)"}}>
            <h2>{name}</h2>
            <hr/>
            <h2>{win}</h2>
        </div>
    )
}
