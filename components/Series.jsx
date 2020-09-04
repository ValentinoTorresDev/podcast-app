export default class Series extends React.Component{
    render(){

        const {series} = this.props

        return(
            <React.Fragment>
                <h2>Series</h2>

                {series.map((serie)=>(
                    <div>{serie.title}</div>
                ))}
                
                <style jsx>{`
                    
                `}</style>
            </React.Fragment>
        )
    }
}