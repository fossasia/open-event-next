const LoadingPage = (): JSX.Element => (
  <p>This page was rendered for a while!</p>
)

export async function getServerSideProps(): Promise<any> {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
  return { props: {} }
}

export default LoadingPage
