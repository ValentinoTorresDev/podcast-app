import Layout from '../components/Layout'
import Link from 'next/link'

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

function Error({ statusCode }) {

    return (
        <Layout title= 'Oh no :('>
            {statusCode === 404 ?
                <div className="message">
                    <h1>Esta página no existe ;c</h1>
                    <p><Link href='/'><a>Volver al Home</a></Link></p>
                </div>
                :
                <div className="message">
                    <h1>Hubo un problema ;c</h1>
                    <p>Intenta nuevamente en unos minutos</p>
                </div>
            }
            <style jsx>{`
                .message{
                    padding: 100px 40px;
                    text-align: center;
                }
                h1{
                    margin-bottom: 20px;
                }
                a{
                    color: #8756ca;
                    text-decoration: none;
                }
            `}</style>
        </Layout>
    )
}
  
export default Error