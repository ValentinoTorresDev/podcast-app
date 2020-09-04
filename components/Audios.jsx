import Link from "next/link"

export default class Audios extends React.Component{
    render(){

        const {audios, funcion} = this.props

        return(
            <React.Fragment>
                <h2>Audios</h2>

                {audios.map((audio)=>(
                    <Link  href={`/podcast?id=${audio.id}`}>
                        <a>
                            <div>{audio.title}</div>
                        </a>
                    </Link>
                ))}

                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
}