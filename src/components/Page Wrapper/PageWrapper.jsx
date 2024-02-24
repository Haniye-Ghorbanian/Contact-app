const PageWrapper = (props) => {
    return (
        <div className="w-full h-screen bg-slate-100 flex flex-col align-center justify-start space-y-8 py-8 px-12">
            {props.children}
        </div>
    )
}

export default PageWrapper;