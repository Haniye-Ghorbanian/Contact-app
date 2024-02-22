const PageWrapper = (props) => {
    return (
        <div className="w-full h-screen bg-slate-50 flex flex-col align-center justify-between py-8 px-12">
            {props.children}
        </div>
    )
}

export default PageWrapper;