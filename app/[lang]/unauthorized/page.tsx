export async function generateMetadata() {
    return {
      title: "Login Page",
      robots: {
        index: false,
        follow: false,
        googleBot: {
            index:false,
            follow:false
        }
      }
  }}


const Unauthorized = () => {
    return (
        <main>
            UNAUTHORIEZD
        </main>
    )
}

export default Unauthorized;