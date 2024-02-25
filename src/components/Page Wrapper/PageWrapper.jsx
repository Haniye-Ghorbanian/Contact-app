const PageWrapper = (props) => {
    return (
        <div className="w-full h-screen bg-slate-100 flex flex-col align-center justify-start py-8 px-12">
            {props.children}
        </div>
    )
}

export default PageWrapper;