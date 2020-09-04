import Link from "next/link"

export default class Back extends React.Component{
    render(){

        const {podcast} = this.props
        
        return(
            <React.Fragment>
                <Link href={`/channel?id=${podcast.channel.id}`}>
                    <a>
                        {`< atrás`}
                    </a>
                </Link>
                <style jsx>{`
                    a{
                        color: #fff;
                        margin-bottom: 20px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}