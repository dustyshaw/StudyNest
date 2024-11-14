
const FallbackComponent = () => {
  return (
    <div className='w-100 h-screen flex items-center justify-center'>
        <div style={{ maxWidth:"600px"}} className="text-center">
            
            <h1 className="text-2xl font-semibold">404 Not Found</h1>
            <p>Try reloading the page</p>
        </div>
    </div>
  )
}

export default FallbackComponent